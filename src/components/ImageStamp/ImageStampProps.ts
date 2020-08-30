export interface IImageStampProps {
  /** Adjust width/height if image is not square. By default, the image is cut off square */
  contain?: 'width' | 'height';
  /** Whether this is a plain image with no border */
  plain?: boolean;
  /** How much to round the corners of the stamp */
  round?: 'xsmall' | 'small' | 'medium' | 'large' | 'full';
  /** The size of the image stamp */
  size?: 'medium' | 'large' | 'xlarge' | 'xxlarge';
  /** The image source url */
  src?: string;
}
