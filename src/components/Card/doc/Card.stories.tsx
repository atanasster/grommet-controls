import React from 'react';
import {
 Box, Button, Heading, Image, Text,
} from 'grommet';
import { Add, Bitcoin, Edit } from 'grommet-icons';
import { Card } from '../Card';
import { ImageStamp } from '../../ImageStamp';


export default {
  title: 'CONTROLS|controls/Card',
  component: Card,
};

const actions = [
  {
    label: 'Edit',
    icon: <Edit />,
    onClick: () => {},
  }, {
    label: 'New',
    icon: <Add />,
    onClick: () => {},
  },
];
export const main = () => (
  <Card>
    <Card.CardTitle border='bottom' align='center' direction='column' pad='small'>
      <Box direction='row'>
        <ImageStamp round='full' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' />
        <Heading level={3} margin='xsmall'>Info card</Heading>
      </Box>
      <Box direction='row'>
        <Bitcoin color='plain' />
        <Text>sub-title info</Text>
      </Box>
    </Card.CardTitle>
    <Card.CardContent>
      <Image fit='cover' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' height='250' />
    </Card.CardContent>
    <Card.CardActions justify='center'>
      {actions.map((action, index) => (<Button key={`actions_${index}`} label={action.label} onClick={action.onClick} />))}
    </Card.CardActions>

  </Card>
);
export const animation = () => (
  <Card
    animation={{
      type: 'zoomIn', duration: 5000, size: 'xlarge',
    }}
  >
    <Card.CardTitle border='bottom'>
              Card
    </Card.CardTitle>
    <Card.CardContent>
      <Image fit='cover' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' height='250' />
    </Card.CardContent>
  </Card>
);
export const background = () => (
  <Card
    background='accent-1'
  >
    <Card.CardTitle border='bottom'>
              Card
    </Card.CardTitle>
    <Card.CardContent
      basis='small'
    >
              Card content
    </Card.CardContent>
  </Card>
);
export const border = () => (
  <Card
    border={{
      color: 'brand', size: 'medium',
    }}
  >
    <Card.CardTitle border='bottom'>
              Card
    </Card.CardTitle>
    <Card.CardContent
      basis='small'
    >
              Card content
    </Card.CardContent>
  </Card>
);
export const elevation = () => (
  <Card
    elevation='large'
  >
    <Card.CardTitle border='bottom'>
              Card
    </Card.CardTitle>
    <Card.CardContent
      basis='small'
    >
              Card content
    </Card.CardContent>
  </Card>
);
export const gap = () => (
  <Card
    gap='medium'
  >
    <Card.CardTitle border='bottom'>
              Card
    </Card.CardTitle>
    <Card.CardContent
      basis='small'
    >
              Card content
    </Card.CardContent>
  </Card>
);
export const pad = () => (
  <Card
    pad='medium'
  >
    <Card.CardTitle border='bottom'>
              Card
    </Card.CardTitle>
    <Card.CardContent
      basis='small'
    >
              Card content
    </Card.CardContent>
  </Card>
);
export const round = () => (
  <Card round='medium' pad='small'>
    <Card.CardTitle border='bottom'>
              Card
    </Card.CardTitle>
    <Card.CardContent
      basis='small'
    >
              Card content
    </Card.CardContent>
  </Card>
);
