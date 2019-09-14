import React from 'react';
import { Github, Grommet, FormSubtract } from 'grommet-icons';
import { Tag } from '../Tag';

export default {
  title: 'CONTROLS|controls/Tag',
  component: Tag,
};

const tagIcons = [<Github />, <Grommet />];


export const main = () => (
  <Tag label='Tag' onChange={() => alert('Closing')} />
);
export const a11yTitle = () => (
  <Tag
    a11yTitle='Tag component'
  />
);
export const icon = () => (
  <Tag
    icon={<FormSubtract />}
  />
);
export const disabled = () => (
  <Tag
    disabled={true}
    label='Disabled'
  />
);
export const focusable = () => (
  <Tag
    focusable={false}
    label='Cant focus'
  />
);
export const background = () => (
  <Tag
    background='accent-1'
    label='accent-1'
  />
);
export const border = () => (
  <Tag
    border={{
      side: 'all', size: 'medium', color: 'accent-1',
    }}
    round='medium'
    label='border'
  />
);
export const round = () => (
  <Tag
    round='medium'
    background='accent-2'
    label='round'
  />
);
export const onClick = () => (
  <Tag
    onClick={() => alert('Clicked on label')}
  />
);
export const onChange = () => {
  const [iconIndex, setIconIndex] = React.useState(0);
  const onToggle = () => {
    setIconIndex(1 - iconIndex);
  };
  return (
    <Tag
      icon={tagIcons[iconIndex]}
      onClick={() => alert('Clicked on label')}
      onChange={onToggle}
    />
  );
};

export const reverse = () => (
  <Tag
    reverse={true}
    label='Adam'
  />
);
export const size = () => (
  <Tag
    size='large'
    label='Large'
  />
);
