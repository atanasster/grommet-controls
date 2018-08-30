import React, { Component } from 'react';
import { compose } from 'recompose';
import { Stack, Box, Heading, Text } from 'grommet';
import { withTheme } from '../hocs';
import { StyledCard, StyledCardContent, StyledFlipCard } from './StyledCard';

export const CardActions = ({ children, ...rest }) => (
  <Box justifySelf='end' align='center' gap='small' pad='small' flex={false} fill='horizontal' direction='row' {...rest}>
    {children}
  </Box>
);

export const CardTitle = ({ children, color, size, textAlign, truncate, level = 2, strong = true, margin = 'none', responsive, ...rest }) => (
  <Box responsive={responsive} direction='row' align='center' justify='center' gap='small' pad='small' flex={false} {...rest} >
    {typeof children !== 'string' ? children : (
      <Heading
        level={level}
        margin={margin}
        color={color}
        size={size}
        textAlign={textAlign}
        truncate={truncate}
        responsive={responsive}
      >
        {strong ? <strong>{children}</strong> : children}
      </Heading>
    )}
  </Box>
);

export const CardSubTitle = ({ children, color, size = 'medium', margin, textAlign, truncate, weight, strong = true, ...rest }) => (
  <Box direction='row' gap='small' justify='center' pad='small' flex={false} {...rest} >
    {typeof children !== 'string' ? children : (
      <Text
        size={size}
        margin={margin}
        textAlign={textAlign}
        truncate={truncate}
        weight={weight}
      >
        {strong ? <strong>{children}</strong> : children}
      </Text>
    )}
  </Box>
);

export const CardContent = ({ children, ...rest }) => (
  <Box overflow='auto' justifySelf='stretch' fill='horizontal' {...rest} >
    {children}
  </Box>
);

class Card extends Component {
  static defaultProps = {
    title: undefined,
    subTitle: undefined,
    size: { width: 'large', height: 'medium' },
    margin: 'small',
    align: 'center',
    border: 'all',
    elevation: 'small',
    pad: 'small',
    round: 'xsmall',
    flex: false,
    gap: 'small',
    titleLevel: 2,
    backContent: undefined,
    flipped: false,
    flipOnHover: true,
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
  }
  onHover = (hover) => {
    this.toggleInnerContent(hover);
  }
  render() {
    const { align, gap, children, flipCard,
      theme, size, backContent, flipDuration, flipOnHover,
      ...rest } = this.props;
    const { flipped } = this.state;
    let sizeWidth;
    let sizeHeight;
    if (size) {
      sizeWidth = (typeof size === 'string') ? size : size.width;
      sizeHeight = (typeof size === 'string') ? size : size.height;
    }
    return (
      <StyledCard
        theme={theme}
        sizeHeight={sizeHeight}
        sizeWidth={sizeWidth}
        overflow='hidden'
        align='stretch'
        {...rest}
      >
        <StyledCardContent
          fill='horizontal'
          flex={true}
          onMouseOver={flipOnHover ? () => this.onHover(true) : undefined}
          onMouseLeave={flipOnHover ? () => this.onHover(false) : undefined}
        >
          <Stack>
            <StyledFlipCard
              align={align}
              gap={gap}
              show={!flipped}
              flipDuration={flipDuration}
            >
              {children}
            </StyledFlipCard>
            {backContent && (
              <StyledFlipCard
                style={{ overflow: 'auto' }}
                show={flipped}
                flipDuration={flipDuration}
              >
                {backContent}
              </StyledFlipCard>
            )}
          </Stack>
        </StyledCardContent>
      </StyledCard>
    );
  }
}
Card.CardActions = CardActions;
Card.CardTitle = CardTitle;
Card.CardSubTitle = CardSubTitle;
Card.CardContent = CardContent;

let CarDoc;
if (process.env.NODE_ENV !== 'production') {
  CarDoc = require('./doc').default(Card); // eslint-disable-line global-require
}

const CardWrapper = compose(
  withTheme,
)(
  CarDoc || Card
);

export { CardWrapper as Card };

