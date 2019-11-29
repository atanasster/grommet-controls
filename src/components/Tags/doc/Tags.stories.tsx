import React from 'react';
import { Box, Button } from 'grommet';
import { FormSubtract, Trash } from 'grommet-icons';
import { action } from '@storybook/addon-actions';
import { Tags } from '../Tags';

export default {
  title: 'CONTROLS/input/Tags',
  component: Tags,
};


const stringOptions = ['small', 'medium', 'large', 'xlarge', 'huge'];
const defaultTags = [stringOptions[0], stringOptions[2]];


const TagsInput = (props) => {
  const [tags, setTags] = React.useState(defaultTags);

  const onChangeTags = ({ option }) => setTags(option);

  const resetTags = () => setTags(defaultTags);

  return (
    <Box gap='large'>
      <Box direction='row'>
        <Tags
          value={tags}
          border='all'
          basis='medium'
          placeholder='No selection'
          onChange={onChangeTags}
          {...props}
        />
      </Box>
      <Box direction='row' justify='start'>
        <Button primary={true} label='Reset tags' onClick={resetTags} />
      </Box>
    </Box>
  );
};

export const main = () => <TagsInput />;

export const a11yTitle = () => <TagsInput a11yTitle='Grommet tags' />;

export const children = () => {
  const [tags, setTags] = React.useState(defaultTags);
  const onChangeTags = ({ option }) => setTags(option);
  const removeTag = tagIndex => setTags(
        tags.filter((_, index) => index !== tagIndex)
    );
  return (
    <Tags
      value={tags}
      focusable={false}
      onChange={onChangeTags}
    >
      {(tag, index) => (
        <Box
          key={`remove_${index}`}
          pad={{
            horizontal: 'xsmall',
          }}
        >
          <Button label={tag} icon={<Trash />} onClick={() => removeTag(index)} />
        </Box>
            )}
    </Tags>
  );
};
export const icon = () => <TagsInput icon={<FormSubtract />} />;

export const direction = () => <TagsInput direction='column' />;
export const tagProps = () => (
  <TagsInput
    tagProps={{
      background: 'status-critical',
      size: 'large',
      border: {
        color: 'brand', size: 'medium',
      },
    }}
  />
          );
export const onClick = () => <TagsInput onClick={action('onClick')} />;
export const focusable = () => <TagsInput focusable={false} />;
export const placeholder = () => <TagsInput placeholder='No selection' />;
export const value = () => <TagsInput value='tag' />;
