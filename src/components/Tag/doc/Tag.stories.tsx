import React from 'react';
import { Github, Grommet, FormSubtract } from 'grommet-icons';
import { ControlTypes } from '@component-controls/core';
import { Tag } from '../Tag';

export default {
  title: 'controls/Tag',
  component: Tag,
};

const tagIcons = [<Github key="github" />, <Grommet key="grommet" />];

export const main = props => <Tag {...props} />;

main.controls = {
  label: { type: ControlTypes.TEXT, value: 'Tag' },
  background: { type: ControlTypes.COLOR },
  size: {
    type: ControlTypes.OPTIONS,
    options: ['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'],
  },
  onChange: { type: ControlTypes.BUTTON, value: () => console.log('onChange') },
};
export const a11yTitle = () => <Tag a11yTitle="Tag component" />;
export const icon = () => <Tag icon={<FormSubtract />} />;
export const disabled = () => <Tag disabled={true} label="Disabled" />;
export const focusable = () => <Tag focusable={false} label="Cant focus" />;
export const background = () => <Tag background="accent-1" label="accent-1" />;
export const border = () => (
  <Tag
    border={{
      side: 'all',
      size: 'medium',
      color: 'accent-1',
    }}
    round="medium"
    label="border"
  />
);
export const round = () => (
  <Tag round="medium" background="accent-2" label="round" />
);
export const onClick = () => <Tag onClick={() => console.log('onClick')} />;
export const onChange = () => {
  const [iconIndex, setIconIndex] = React.useState(0);
  const onToggle = () => {
    setIconIndex(1 - iconIndex);
  };
  return (
    <Tag
      icon={tagIcons[iconIndex]}
      onClick={() => console.log('onClick')}
      onChange={onToggle}
    />
  );
};

export const reverse = () => <Tag reverse={true} label="Adam" />;
export const size = () => <Tag size="large" label="Large" />;
