
export interface IColorsProps {
  /** Color palette for the user to choose a color from */
  colors?: object,
  /** The default selected color */
  color?: string,
  /** Called with an object containing the selected color, rowName and colorName */
  onSelect?: (props: {
    color: string,
    rowName: string,
     colorName: string,
  }) => void,
  /** What size to make it */
  size?: 'small' | 'medium' | 'large',
  /** The maximum number of colors per row, if left emty will be calculated automatically */
  columns?: number,
  /** If true, will wrap any rows of colors that exceed the columns limit,
   *  otherwise will truncate larger rows */
  wrap?: boolean,
}
