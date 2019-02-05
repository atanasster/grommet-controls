import React, { Component } from 'react';
import { Box } from 'grommet/components/Box';
import { Heading } from 'grommet/components/Heading';
import { ThemeContext } from 'grommet/contexts/ThemeContext';
import { StyledCard } from './StyledCard';

class Card extends Component {
  static defaultProps = {
    align: 'center',
    border: 'all',
    elevation: 'small',
    round: 'xsmall',
    flex: false,
    gap: 'small',
    backContent: undefined,
    flipped: false,
    fill: 'horizontal',
    flipOnHover: true,
    background: 'white',
    flipDuration: 0.3,
  };

  constructor(props, context) {
    super(props, context);
    this.state = { flipped: !!props.flipped };
  }
  componentWillReceiveProps({ flipped: nextFlipped }) {
    const { flipped } = this.state;
    if (nextFlipped !== undefined && nextFlipped !== flipped) {
      this.toggleInnerContent(nextFlipped);
    }
  }
  toggleInnerContent = (showInnner) => {
    const { backContent, onFlip } = this.props;
    if (backContent) {
      const { flipped } = this.state;
      if (flipped !== showInnner) {
        this.setState({ flipped: showInnner }, () => {
          if (onFlip) {
            // timeout to allow event to propagate
            setTimeout(() => {
              onFlip(showInnner);
            }, 0);
          }
        });
      }
    }
  };
  onHover = (hover) => {
    this.toggleInnerContent(hover);
  };
  render() {
    const {
      align, gap, children,
      ...rest
    } = this.props;
    return (
      <ThemeContext.Consumer>
        {theme => (
          <StyledCard
            theme={theme}
            align={align}
            gap={gap}
            overflow='hidden'
            {...rest}
          >
            {children}
          </StyledCard>
        )}
      </ThemeContext.Consumer>
    );
  }
}

let CardDoc;
if (process.env.NODE_ENV !== 'production') {
  CardDoc = require('./doc').default(Card); // eslint-disable-line global-require
}
const CardWrapper = CardDoc || Card;

CardWrapper.CardActions = ({ children, pad = 'small', ...rest }) => (
  <Box justifySelf='end' align='center' pad={pad} gap='small' border='top' flex={false} fill='horizontal' direction='row' {...rest}>
    {children}
  </Box>
);

CardWrapper.CardTitle = ({
  children, color, textAlign, truncate, level = 4, pad = 'small', strong = false, responsive, ...rest
}) => (
  <Box responsive={responsive} direction='row' fill='horizontal' pad={pad} border='bottom' gap='small' flex={false} {...rest} >
    {typeof children !== 'string' ? children : (
      <Heading
        level={level}
        margin='none'
        color={color}
        textAlign={textAlign}
        truncate={truncate}
        responsive={responsive}
      >
        {strong ? <strong>{children}</strong> : children}
      </Heading>
    )}
  </Box>
);

CardWrapper.CardContent = ({ children, pad = 'small', ...rest }) => (
  <Box pad={pad} fill={true} flex={true} {...rest} >
    {children}
  </Box>
);

// eslint-disable-next-line import/prefer-default-export
export { CardWrapper as Card };
