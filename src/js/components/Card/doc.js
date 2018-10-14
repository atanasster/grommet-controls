import { describe, PropTypes } from 'react-desc';

const PAD_SIZES = ['xsmall', 'small', 'medium', 'large'];

const ANIMATION_TYPE = PropTypes.oneOf([
  'fadeIn', 'fadeOut', 'jiggle', 'pulse',
  'slideUp', 'slideDown', 'slideLeft', 'slideRight',
  'zoomIn', 'zoomOut']);

const ANIMATION_SHAPE = PropTypes.shape({
  type: ANIMATION_TYPE,
  delay: PropTypes.number,
  duration: PropTypes.number,
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
});

export default (Element) => {
  const DocumentedElement = describe(Element)
    .description('A Card-type container, all props of Box apply.')
    .usage(
      `$ npm install grommet-controls\n
    import { Card } from 'grommet-controls';\n
    <Card>
      <Card.CardTitle>
        Title
      </Card.CardTitle>
      <Card.CardContent>
        card content goes here
      </Card.CardContent>  
    </Card>  
`
    );

  DocumentedElement.propTypes = {
    animation: PropTypes.oneOfType([
      ANIMATION_TYPE,
      ANIMATION_SHAPE,
      PropTypes.arrayOf(
        PropTypes.oneOfType([ANIMATION_TYPE, ANIMATION_SHAPE]),
      ),
    ])
      .description(`Animation effect(s) to use. 'duration' and 'delay' should
        be in milliseconds. 'jiggle' and 'pulse' types are intended for
        small elements, like icons.`),
    background: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        color: PropTypes.string,
        dark: PropTypes.bool,
        image: PropTypes.string,
        position: PropTypes.string,
        opacity: PropTypes.oneOfType([
          PropTypes.oneOf(['weak', 'medium', 'strong']),
          PropTypes.bool,
        ]),
      }),
    ]).description(`Either a color identifier to use for the background
        color. For example: 'neutral-1'. Or, a 'url()' for an image. Dark
        is not needed if color is provided.`),
    border: PropTypes.oneOfType([
      PropTypes.oneOf(['top', 'left', 'bottom', 'right',
        'horizontal', 'vertical', 'all']),
      PropTypes.shape({
        color: PropTypes.string,
        side: PropTypes.oneOf(['top', 'left', 'bottom', 'right',
          'horizontal', 'vertical', 'all']),
        size: PropTypes.oneOf(['small', 'medium', 'large']),
      }),
    ]).description('Include a border.').defaultValue('all'),
    elevation: PropTypes.oneOf([
      'none', 'xsmall', 'small', 'medium', 'large', 'xlarge',
    ])
      .description(`Elevated height above the underlying context, indicated
        via a drop shadow.`)
      .defaultValue('small'),
    gap: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge'])
      .description('The amount of spacing between child elements (title, content).').defaultValue('small'),
    margin: PropTypes.oneOfType([
      PropTypes.oneOf(['none', ...PAD_SIZES]),
      PropTypes.shape({
        bottom: PropTypes.oneOf(PAD_SIZES),
        horizontal: PropTypes.oneOf(PAD_SIZES),
        left: PropTypes.oneOf(PAD_SIZES),
        right: PropTypes.oneOf(PAD_SIZES),
        top: PropTypes.oneOf(PAD_SIZES),
        vertical: PropTypes.oneOf(PAD_SIZES),
      }),
    ])
      .description(`The amount of margin around the card. An object can
        be specified to distinguish horizontal margin, vertical margin, and
        margin on a particular side of the card.`).defaultValue('small'),
    pad: PropTypes.oneOfType([
      PropTypes.oneOf(['none', ...PAD_SIZES]),
      PropTypes.shape({
        bottom: PropTypes.oneOf(PAD_SIZES),
        horizontal: PropTypes.oneOf(PAD_SIZES),
        left: PropTypes.oneOf(PAD_SIZES),
        right: PropTypes.oneOf(PAD_SIZES),
        top: PropTypes.oneOf(PAD_SIZES),
        vertical: PropTypes.oneOf(PAD_SIZES),
      }),
    ])
      .description(`The amount of padding inside the card content. An
        object can be specified to distinguish horizontal padding, vertical
        padding, and padding on a particular side of the box`).defaultValue('small'),
    round: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'full'])
      .description('How much to round the corners of the card.').defaultValue('xsmall'),
  };

  return DocumentedElement;
};

export const docCardActions = (Element) => {
  const DocumentedElement = describe(Element)
    .description('Actions container, aligned at bottom of the Card. All properties of Box apply.')
    .usage(
      `$ npm install grommet-controls\n
    import { CardActions } from 'grommet-controls/components/Card';\n
    <Card>
      <CardActions>
        <Button ... />
      </CardActions>
    </Card>
`
    );

  DocumentedElement.propTypes = {
    children: PropTypes.node.description(
      'Content of card actions - usually Button or Anchor elements.'
    ).isRequired,
  };

  return DocumentedElement;
};

export const docCardTitle = (Element) => {
  const DocumentedElement = describe(Element)
    .description('Card title component. All properties of Box and Heading apply.')
    .usage(
      `$ npm install grommet-controls\n
    import { Card } from 'grommet-controls';\n
    <Card>
      <Card.CardTitle>
        Title
      </Card.CardTitle>
    </Card>
`
    );

  DocumentedElement.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node]).description(
      'Content of the title - a string or a react node.'
    ).isRequired,
  };

  return DocumentedElement;
};

export const docCardContent = (Element) => {
  const DocumentedElement = describe(Element)
    .description('Card content component, fills the available space and allows for scrolling if needed. All properties of Box apply.')
    .usage(
      `$ npm install grommet-controls\n
    import { CardContent } from 'grommet-controls/components/Card';\n
    <Card>
      <CardContent>
        Some content
      </CardContent>
    </Card>
`
    );

  DocumentedElement.propTypes = {
    children: PropTypes.node.description(
      'Content of the card.'
    ).isRequired,
  };

  return DocumentedElement;
};
