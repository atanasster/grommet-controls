import { IImageStampProps } from '../ImageStamp/ImageStampProps';

export interface IAvatarOwnProps {
  /** Image to be displayed */
  image?: string;
  /** Main title(name) for the Avatar */
  title?: string;
  /** Secondary title for the Avatar */
  subTitle?: string;
}
export type IAvatarProps = IAvatarOwnProps & IImageStampProps;
