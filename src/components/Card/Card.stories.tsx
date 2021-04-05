import React from 'react';
import {
  Box,
  BoxProps,
  Button,
  Heading,
  HeadingProps,
  Image,
  ImageProps,
  Text,
} from 'grommet';
import { Add, Bitcoin, Edit } from 'grommet-icons';
import { ControlTypes, Document, Example } from '@component-controls/core';
import { Card } from './Card';
import { ImageStamp } from '../ImageStamp';
import { IImageStampProps } from '../ImageStamp';

export default {
  title: 'controls/Card',
  component: Card,
} as Document;

const actions = [
  {
    label: 'Edit',
    icon: <Edit />,
    onClick: () => {},
  },
  {
    label: 'New',
    icon: <Add />,
    onClick: () => {},
  },
];
export const main: Example<BoxProps &
  HeadingProps &
  ImageProps & {
    title: string;
    image: string;
    imageStamp: IImageStampProps;
  }> = ({
  border,
  align,
  direction,
  pad,
  imageStamp,
  title,
  level,
  fit,
  image,
  height,
}) => (
  <Card>
    <Card.CardTitle
      border={border}
      align={align}
      direction={direction}
      pad={pad}
    >
      <Box direction="row">
        <ImageStamp {...imageStamp} />
        <Heading level={level} margin="xsmall">
          {title}
        </Heading>
      </Box>
      <Box direction="row">
        <Bitcoin color="plain" />
        <Text>sub-title info</Text>
      </Box>
    </Card.CardTitle>
    <Card.CardContent>
      <Image fit={fit} src={image} height={`${height}`} />
    </Card.CardContent>
    <Card.CardActions justify="center">
      {actions.map((action, index) => (
        <Button
          key={`actions_${index}`}
          label={action.label}
          onClick={action.onClick}
        />
      ))}
    </Card.CardActions>
  </Card>
);

main.controls = {
  border: {
    type: ControlTypes.OBJECT,
    value: {
      color: {
        type: ControlTypes.COLOR,
        value: '#333',
      },
      size: {
        type: ControlTypes.OPTIONS,
        options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      },
      side: {
        type: ControlTypes.OPTIONS,
        options: [
          'top',
          'left',
          'bottom',
          'right',
          'horizontal',
          'vertical',
          'all',
        ],
        value: 'bottom',
      },
    },
    groupId: 'Card.CardTitle',
  },
  align: {
    type: ControlTypes.OPTIONS,
    options: ['start', 'center', 'end', 'baseline', 'stretch'],
    value: 'center',
    groupId: 'Card.CardTitle',
  },
  direction: {
    type: ControlTypes.OPTIONS,
    options: [
      'row',
      'column',
      'row-responsive',
      'row-reverse',
      'column-reverse',
    ],
    value: 'column',
    groupId: 'Card.CardTitle',
  },
  pad: {
    type: ControlTypes.OPTIONS,
    options: [
      'none',
      'xxsmall',
      'xsmall',
      'small',
      'medium',
      'large',
      'xlarge',
    ],
    value: 'small',
    groupId: 'Card.CardTitle',
  },

  imageStamp: {
    type: ControlTypes.OBJECT,
    value: {
      src: {
        type: ControlTypes.TEXT,
        value:
          'https://s3.amazonaws.com/uifaces/faces/twitter/shadeed9/128.jpg',
      },
      round: {
        type: ControlTypes.OPTIONS,
        options: ['xsmall', 'small', 'medium', 'large', 'full'],
        value: 'full',
      },
    },
    groupId: 'Heading',
  },
  title: {
    type: ControlTypes.TEXT,
    value: 'Info card',
    groupId: 'Heading',
  },
  level: {
    type: ControlTypes.NUMBER,
    value: 3,
    min: 1,
    max: 5,
    groupId: 'Heading',
  },
  fit: {
    type: ControlTypes.OPTIONS,
    value: 'cover',
    options: ['cover', 'contain'],
    groupId: 'Content',
    display: 'inline-radio',
  },
  image: {
    type: ControlTypes.TEXT,
    value: 'https://s3.amazonaws.com/uifaces/faces/twitter/denisepires/128.jpg',
    groupId: 'Content',
    data: { name: 'internet.avatar' },
  },
  height: {
    type: ControlTypes.NUMBER,
    value: 250,
    min: 100,
    max: 900,
    step: 50,
    range: true,
    groupId: 'Content',
  },
};
export const animation: Example = () => (
  <Card
    animation={{
      type: 'zoomIn',
      duration: 5000,
      size: 'xlarge',
    }}
  >
    <Card.CardTitle border="bottom">Card</Card.CardTitle>
    <Card.CardContent>
      <Image
        fit="cover"
        src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
        height="250"
      />
    </Card.CardContent>
  </Card>
);
export const background: Example = () => (
  <Card background="accent-1">
    <Card.CardTitle border="bottom">Card</Card.CardTitle>
    <Card.CardContent basis="small">Card content</Card.CardContent>
  </Card>
);
export const border: Example = () => (
  <Card
    border={{
      color: 'brand',
      size: 'medium',
    }}
  >
    <Card.CardTitle border="bottom">Card</Card.CardTitle>
    <Card.CardContent basis="small">Card content</Card.CardContent>
  </Card>
);
export const elevation: Example = () => (
  <Card elevation="large">
    <Card.CardTitle border="bottom">Card</Card.CardTitle>
    <Card.CardContent basis="small">Card content</Card.CardContent>
  </Card>
);
export const gap: Example = () => (
  <Card gap="medium">
    <Card.CardTitle border="bottom">Card</Card.CardTitle>
    <Card.CardContent basis="small">Card content</Card.CardContent>
  </Card>
);
export const pad: Example = () => (
  <Card pad="medium">
    <Card.CardTitle border="bottom">Card</Card.CardTitle>
    <Card.CardContent basis="small">Card content</Card.CardContent>
  </Card>
);
export const round: Example = () => (
  <Card round="medium" pad="small">
    <Card.CardTitle border="bottom">Card</Card.CardTitle>
    <Card.CardContent basis="small">Card content</Card.CardContent>
  </Card>
);
