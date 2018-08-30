import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { Text, Keyboard } from 'grommet';
import { FormClose } from 'grommet-icons';
import { withFocus, withTheme } from '../hocs';
import { StyledTag, StyledIcon } from './StyledTag';

import doc from './doc';

class Tag extends Component {
  static contextTypes = {
    grommet: PropTypes.object,
  };
  static defaultProps = {
    label: 'Text',
    pad: { horizontal: 'xsmall' },
    focusable: true,
  }

  clickTag = (e) => {
    const { onClick, disabled } = this.props;
    if (!disabled && onClick) {
      onClick(e);
    }
    e.preventDefault();
    e.stopPropagation();
  }

  toggleTag = (e) => {
    const { onChange, disabled } = this.props;
    if (!disabled && onChange) {
      e.preventDefault();
      e.stopPropagation();
      onChange(e);
    }
  };

  render() {
    const {
      disabled, label, a11yTitle, reverse, background, onClick, onChange,
      theme, icon, color, focusable, round, size, truncate, focus, ...rest
    } = this.props;
    const { grommet } = this.context;
    const tagRound = round || (theme.tag && theme.tag.border ? theme.tag.border.round : undefined);
    const canFocus = focusable && !disabled && !!(onClick || onChange);
    let closeIcon;
    if (icon || onChange) {
      closeIcon = (
        <StyledIcon theme={theme} disabled={disabled} onClick={onChange}>
          {icon || <FormClose />}
        </StyledIcon>
      );
    }
    return (
      <Keyboard
        onEnter={this.clickTag}
        onSpace={this.toggleTag}
      >
        <StyledTag
          direction='row'
          align='center'
          a11yTitle={a11yTitle}
          round={tagRound}
          onClick={onClick && this.clickTag}
          role='checkbox'
          aria-checked={true}
          focus={focus}
          tabIndex={canFocus ? '0' : undefined}
          background={background}
          disabled={disabled}
          reverse={reverse}
          theme={theme}
          grommet={grommet}
          {...rest}

        >
          {reverse && closeIcon}
          {React.isValidElement(label) ? label : (
            <Text
              color={color}
              size={size}
              truncate={truncate}
            >
              {label && label.toString()}
            </Text>
          )}
          {!reverse && closeIcon}
        </StyledTag>
      </Keyboard>
    );
  }
}

const TagWrapper = compose(
  withTheme,
  withFocus,
)(
  process.env.NODE_ENV !== 'production' ? doc(Tag) : Tag
);

export { TagWrapper as Tag };
