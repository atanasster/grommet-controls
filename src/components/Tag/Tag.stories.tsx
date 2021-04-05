import React from 'react';
import { Github, Grommet, FormSubtract } from 'grommet-icons';
import { ControlTypes, Document, Example } from '@component-controls/core';
import { Tag } from './Tag';
import { ITagOwnProps } from './TagProps';

export default {
  title: 'controls/Tag',
  component: Tag,
} as Document;

const tagIcons = [<Github key="github" />, <Grommet key="grommet" />];

export const main: Example<ITagOwnProps> = props => <Tag {...props} />;

main.controls = {
  label: { type: ControlTypes.TEXT, value: 'Tag' },
  background: { type: ControlTypes.COLOR },
  size: {
    type: ControlTypes.OPTIONS,
    options: ['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'],
  },
  onChange: { type: ControlTypes.BUTTON, value: () => console.log('onChange') },
};
export const a11yTitle: Example = () => <Tag a11yTitle="Tag component" />;
export const icon: Example = () => <Tag icon={<FormSubtract />} />;
export const disabled: Example = () => <Tag disabled={true} label="Disabled" />;
export const focusable: Example = () => (
  <Tag focusable={false} label="Cant focus" />
);
export const background: Example = () => (
  <Tag background="accent-1" label="accent-1" />
);
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
export const round: Example = () => (
  <Tag round="medium" background="accent-2" label="round" />
);
export const onClick: Example = () => (
  <Tag onClick={() => console.log('onClick')} />
);
export const onChange: Example = () => {
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

export const reverse: Example = () => <Tag reverse={true} label="Adam" />;
export const size: Example = () => <Tag size="large" label="Large" />;
