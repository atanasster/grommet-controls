import React from 'react';
import { ThemeContext } from 'styled-components';
import {
 Box, BoxProps, Heading, HeadingProps,
} from 'grommet';
import {
 ICardProps, ICardTitleProps, ICardContentProps, ICardActionsProps,
} from './CardProps';
import { StyledCard } from './StyledCard';

type CardProps = ICardProps & BoxProps;

/**
* A Card-type container, all props of Box apply<br/>
* `import { Card } from 'grommet-controls';`<br/>
* `<Card>`<br/>
* &nbsp;&nbsp;`<Card.CardTitle>`<br/>
* &nbsp;&nbsp;&nbsp;&nbsp;`Title`<br/>
* &nbsp;&nbsp;`</Card.CardTitle>`<br/>
* &nbsp;&nbsp;`<Card.CardContent>`<br/>
* &nbsp;&nbsp;&nbsp;&nbsp;`card content goes here`<br/>
* &nbsp;&nbsp;`</Card.CardContent>`<br/>
* `</Card>`<br/>
*/
export const Card = ({
 children, ...rest
} : CardProps) => (
  <ThemeContext.Consumer>
    {theme => (
      <StyledCard
        theme={theme}
        overflow='hidden'
        {...rest}
      >
        {children}
      </StyledCard>
        )}
  </ThemeContext.Consumer>
);
Card.displayName = 'Card';

Card.defaultProps = {
  align: 'center',
  border: 'all',
  elevation: 'small',
  round: 'xsmall',
  flex: false,
  gap: 'small',
  fill: 'horizontal',
  background: 'white',
};

/**
*  Card Actions to be placed at the bottom of the Card
*/
export const CardActions = ({ children, pad = 'small', ...rest }: ICardActionsProps & BoxProps) => (
  <Box align='center' pad={pad} gap='small' border='top' flex={false} fill='horizontal' direction='row' {...rest}>
    {children}
  </Box>
);
CardActions.displayName = 'CardActions';
Card.CardActions = CardActions;

/**
*  Card Title display the card title
*/
export const CardTitle = ({
  children,
  color,
  textAlign,
  truncate,
  level = 4,
  strong = false,
  responsive,
  ...rest
}: ICardTitleProps & BoxProps & HeadingProps) => (
  <Box direction='row' fill='horizontal' border='bottom' gap='small' flex={false} {...rest}>
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
CardTitle.displayName = 'CardTitle';
Card.CardTitle = CardTitle;

/**
*  Card Content
*/
export const CardContent = ({ children, pad = 'small', ...rest }: ICardContentProps & BoxProps) => (
  <Box pad={pad} fill={true} flex={true} {...rest}>
    {children}
  </Box>
);
CardContent.displayName = 'CardContent';
Card.CardContent = CardContent;
