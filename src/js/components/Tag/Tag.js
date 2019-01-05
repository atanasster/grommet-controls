import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { ThemeContext } from 'styled-components';
import { Text, Keyboard } from 'grommet';
import { FormClose } from 'grommet-icons';
import { withFocus } from 'grommet/components/hocs';
import { StyledTag, StyledIcon } from './StyledTag';

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
      icon, color, focusable, round, size, truncate, focus, ...rest
    } = this.props;
    const { grommet } = this.context;
    const tagRound = round;
    const canFocus = focusable && !disabled && !!(onClick || onChange);
    return (
      <Keyboard
        onEnter={this.clickTag}
        onSpace={this.toggleTag}
      >
        <ThemeContext.Consumer>
          {(theme) => {
            let closeIcon;
            if (icon || onChange) {
              closeIcon = (
                <StyledIcon theme={theme} disabled={disabled} onClick={onChange}>
                  {icon || <FormClose />}
                </StyledIcon>
              );
            }
            return (
              <StyledTag
                direction='row'
                justify='between'
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
            );
          }}
        </ThemeContext.Consumer>
      </Keyboard>
    );
  }
}

let TagDoc;
if (process.env.NODE_ENV !== 'production') {
  TagDoc = require('./doc').default(Tag); // eslint-disable-line global-require
}

const TagWrapper = compose(
  withFocus,
)(
  TagDoc || Tag
);

export { TagWrapper as Tag };
