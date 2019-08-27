import { MouseEvent } from 'react';
import { BoxProps } from 'grommet';
import { ITagProps } from '../Tag/TagProps';

export type TagValueType = string | string[];

export interface ITagsProps {
  /** Function that will be called when each option is rendered */
  children?: (tags: TagValueType[], index: number, value: TagValueType) => React.ReactNode,
  /** Whether the tag list is focusable */
  focusable?: boolean,
  /** Icon element to remove a tag */
  icon?: React.ReactNode,
  /** Tag elements `<Box />` and `<Text />` properties */
  tagProps?: ITagProps & BoxProps,
  /** Function that will be called when the user removes a tag */
  onChange?: (event: {
      option: TagValueType[],
      value: TagValueType,
      target: Element | Text,
  }) => void,
  /** Function that will be called when the user clicks on a tag */
  onClick?: (event: MouseEvent<HTMLDivElement>, value: TagValueType) => void,
  /** Placeholder text to use when no value is provided */
  placeholder?: string,
  /** List of tag items to display */
  value?: TagValueType,
}
