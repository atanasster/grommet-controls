import React, { Component, RefObject } from 'react';
import { findDOMNode } from 'react-dom';
import { Box, Keyboard, Text, BoxProps } from 'grommet';
import { FormClose } from 'grommet-icons/icons/FormClose';
import { Tag } from '../Tag';
import { ITagsProps } from './TagsProps';

export const TagsSelect = (props: ITagsProps) => {
  const { tagProps, ...rest } = props || { tagProps: {} };
  return ({ placeholder, value, onChange }) => (
    <Tags
      focusable={false}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      tagProps={{
        ...tagProps,
        onClick: e => e.stopPropagation(),
      }}
      {...rest}
    />
  );
};

interface ITagsState {
  selectedTagIndex: number;
}
/**
 * A list of tags that can be removed.
 */
class Tags extends Component<ITagsProps & BoxProps, ITagsState> {
  static defaultProps = {
    pad: 'small',
    focusable: true,
    margin: { horizontal: 'xsmall', vertical: 'small' },
    value: [],
    gap: 'xsmall',
    direction: 'row-responsive',
    icon: <FormClose />,
  };

  state: ITagsState = {
    selectedTagIndex: -1,
  };

  tagRefs: RefObject<HTMLDivElement>[] = [];

  elementRef = React.createRef<HTMLDivElement>();

  selectTag = selected => {
    const { onChange, value } = this.props;
    if (onChange) {
      let tags = selected;
      if (Array.isArray(value)) {
        const index = value.indexOf(tags);
        if (index !== -1) {
          tags = value.filter(item => item !== selected);
        } else {
          tags = [...value, tags];
        }
      } else {
        tags = [tags];
      }
      onChange({
        target: findDOMNode(this.elementRef.current),
        option: selected,
        value: tags,
      });
    }
  };

  focusTag(index) {
    if (index >= 0 && index < this.tagRefs.length) {
      const tagElement = findDOMNode(
        this.tagRefs[index].current,
      ) as HTMLDivElement;
      if (tagElement && typeof tagElement.focus === 'function') {
        tagElement.focus();
      }
      this.setState({ selectedTagIndex: index });
    }
  }

  onNextTag = event => {
    const { value } = this.props;
    const { selectedTagIndex } = this.state;
    event.preventDefault();
    let index = selectedTagIndex + 1;
    if (index >= value.length) {
      index = 0;
    }
    this.focusTag(index);
  };

  onPreviousTag = event => {
    const { selectedTagIndex } = this.state;
    const { value } = this.props;
    event.preventDefault();
    let index = selectedTagIndex - 1;
    if (index < 0) {
      index = value.length - 1;
    }
    this.focusTag(index);
  };

  onSelectTag = event => {
    const { value } = this.props;
    const { selectedTagIndex } = this.state;
    if (selectedTagIndex >= 0 && selectedTagIndex < value.length) {
      event.preventDefault(); // prevent submitting forms
      event.stopPropagation();
      this.selectTag(value[selectedTagIndex]);
    }
  };

  onCloseClick = (e, tag) => {
    e.stopPropagation();
    this.selectTag(tag);
  };

  render() {
    const {
      placeholder,
      children,
      value,
      onChange,
      focusable,
      onClick,
      direction,
      icon,
      tagProps,
      ...rest
    } = this.props;
    let noValues;
    if (!value || (Array.isArray(value) && value.length === 0)) {
      noValues = React.isValidElement(placeholder) ? (
        placeholder
      ) : (
        // placeholder. minimum height of icon to keep size
        <Text color="placeholder" style={{ minHeight: '24px' }}>
          {placeholder || 'No selection'}
        </Text>
      );
    }

    let values;
    if (Array.isArray(value)) {
      values = value;
    } else {
      values = value ? [value] : [];
    }
    return (
      <Keyboard
        onEnter={this.onSelectTag}
        onSpace={this.onSelectTag}
        onLeft={this.onPreviousTag}
        onRight={this.onNextTag}
      >
        <Box
          tabIndex={focusable ? 0 : undefined}
          ref={this.elementRef as any}
          direction={direction}
          overflow="auto"
          style={{ minWidth: 'auto' }}
          {...rest}
        >
          {noValues ||
            values.map((tag, index) => {
              if (children) {
                return children(tag, index, value);
              }
              if (!this.tagRefs[index]) {
                this.tagRefs[index] = React.createRef();
              }
              return (
                <Tag
                  key={`tag_${tag}_${index}`}
                  ariaChecked={true}
                  a11yTitle={`Remove ${tag.toString()}`}
                  label={typeof tag !== 'object' ? tag.toString() : undefined}
                  ref={this.tagRefs[index]}
                  onClick={onClick ? e => onClick(e, tag) : undefined}
                  onChange={
                    onChange ? e => this.onCloseClick(e, tag) : undefined
                  }
                  icon={icon}
                  {...(typeof tag === 'object'
                    ? { ...tagProps, ...tag }
                    : tagProps)}
                />
              );
            })}
        </Box>
      </Keyboard>
    );
  }
}

export { Tags };
