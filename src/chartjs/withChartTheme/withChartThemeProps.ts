import React, { ReactElement, ValidationMap } from 'react';

export type ChartjsColorType = string;

export type ChartjsFontStyle = string;

export interface withChartThemeProps {
  classOpacity?: number;
  defaultScales?: object[];
  borderWidth?: number;
}

export interface IChartksTooltipItem {
  /** Label for the tooltip */
  label: string;
  /** Value for the tooltip */
  value: string;
  /* Index of the dataset the item comes from */
  datasetIndex: number;
  /** Index of this data item in the dataset */
  index: number;
  /** X position of matching point */
  x: number;
  /** Y position of matching point */
  y: number;
}
export interface IChartjsTooltipCallbacks {
  /** Returns the text to render before the title. */
  beforeTitle?: (item: IChartksTooltipItem[], data: object) => string;

  /** Returns text to render as the title of the tooltip. */
  title?: (item: IChartksTooltipItem[], data: object) => string;

  /** Returns text to render after the title. */
  afterTitle?: (item: IChartksTooltipItem[], data: object) => string;

  /** Returns text to render before the body section. */
  beforeBody?: (item: IChartksTooltipItem[], data: object) => string;

  /** Returns text to render before an individual label.
   * This will be called for each item in the tooltip.
   */
  beforeLabel?: (item: IChartksTooltipItem, data: object) => string;

  /** Returns text to render for an individual item in the tooltip. */
  label?: (item: IChartksTooltipItem, data: object) => string;

  /** Returns the colors to render for the tooltip item */
  labelColor?: (item: IChartksTooltipItem, Chart: any) => ChartjsColorType;

  /** Returns the colors for the text of the label for the tooltip item. */
  labelTextColor?: (item: IChartksTooltipItem, Chart: any) => ChartjsColorType;

  /** Returns text to render after an individual label. */
  afterLabel?: (item: IChartksTooltipItem, data: object) => string;

  /** Returns text to render after the body section. */
  afterBody?: (item: IChartksTooltipItem[], data: object) => string;

  /** Returns text to render before the footer section. */
  beforeFooter?: (item: IChartksTooltipItem[], data: object) => string;

  /** Returns text to render as the footer of the tooltip. */
  footer?: (item: IChartksTooltipItem[], data: object) => string;

  /** Returns text to render after the footer section. */
  afterFooter?: (item: IChartksTooltipItem[], data: object) => string;
}
export interface IChartjsTooltips {
  /** Are on-canvas tooltips enabled? */
  enabled?: boolean;

  /** Custom tooltips allow you to hook into the tooltip rendering process
   * so that you can render the tooltip in your own custom way
   */
  custom?: (tooltipModel: any) => void;

  /** Sets which elements appear in the tooltip */
  mode?: 'index' | 'point' | 'nearest' | 'dataset' | 'x' | 'y';

  /** If true, the tooltip mode applies only when the mouse position intersects with an element.
   * If false, the mode will be applied at all times.
   */
  intersect?: boolean;

  /** The mode for positioning the tooltip. */
  position?: 'average' | 'nearest';

  /** callbacks for providing text to the tooltips */
  callbacks?: IChartjsTooltipCallbacks;

  /** Sort tooltip items */
  itemSort?: (a, b) => boolean;

  /** Filter tooltip items. */
  filter?: (a, b) => boolean;

  /** Background color of the tooltip. */
  backgroundColor?: ChartjsColorType;

  /** Title font. */
  titleFontFamily?: string;

  /** Title font size. */
  titleFontSize?: number;

  /** Title font style. 'bold' */
  titleFontStyle?: ChartjsFontStyle;

  /** Title font color. */
  titleFontColor?: ChartjsColorType;

  /** Spacing to add to top and bottom of each title line. */
  titleSpacing?: number;

  /** Margin to add on bottom of title section. */
  titleMarginBottom?: number;

  /** Body line font. */
  bodyFontFamily?: string;

  /** Body font size. */
  bodyFontSize?: number;

  /** Body font style. */
  bodyFontStyle?: ChartjsFontStyle;

  /** Body font color. */
  bodyFontColor?: ChartjsColorType;

  /** Spacing to add to top and bottom of each tooltip item. */
  bodySpacing?: number;

  /** Footer font. */
  footerFontFamily?: string;

  /** Footer font size. */
  footerFontSize?: number;

  /** Footer font style. */
  footerFontStyle?: ChartjsFontStyle;

  /** Footer font color. */
  footerFontColor?: ChartjsColorType;

  /** Spacing to add to top and bottom of each footer line. */
  footerSpacing?: number;

  /** Margin to add before drawing the footer. */
  footerMarginTop?: number;

  /** Padding to add on left and right of tooltip. */
  xPadding?: number;

  /** Padding to add on top and bottom of tooltip. */
  yPadding?: number;

  /** Extra distance to move the end of the tooltip arrow away from the tooltip point. */
  caretPadding?: number;

  /** Size, in px, of the tooltip arrow. */
  caretSize?: number;

  /** Radius of tooltip corner curves. */
  cornerRadius?: number;

  /** Color to draw behind the colored boxes when multiple items are in the tooltip. */
  multiKeyBackground?: ChartjsColorType;

  /** If true, color boxes are shown in the tooltip. */
  displayColors?: boolean;

  /** Color of the border. */
  borderColor?: ChartjsColorType;

  /** Size of the border. */
  borderWidth?: number;
}

export interface IChartjsTitle {
  /** Is the title shown? */
  display?: boolean;

  /** Position of title. */
  position?: 'top' | 'left' | 'bottom' | 'right';

  /** Font size. */
  fontSize?: number;

  /** Font family for the title text. */
  fontFamily?: string;

  /** Font color. */
  fontColor?: ChartjsColorType;

  /** Font style. */
  fontStyle?: ChartjsFontStyle;

  /** Number of pixels to add above and below the title text. */
  padding?: number;

  /** Height of an individual line of text.  */
  lineHeight?: number | string;

  /** Title text to display. If specified as an array, text is rendered on multiple lines. */
  text?: string | string[];
}

export interface IChartjsLegendLabelsItem {
  /** Label that will be displayed */
  text?: string;

  /** Fill style of the legend box */
  fillStyle?: ChartjsColorType;

  /** If true, this item represents a hidden dataset.
   Label will be rendered with a strike-through effect
   */
  hidden?: boolean;

  /** For box border. */
  lineCap?: string;

  /** For box border. */
  lineDash?: number[];

  /** For box border. */
  lineDashOffset?: number;

  /** For box border. */
  lineJoin?: string;

  /** Width of box border */
  lineWidth?: number;

  /** Stroke style of the legend box */
  strokeStyle?: ChartjsColorType;

  /** Point style of the legend box (only used if usePointStyle is true) */
  pointStyle?: string;
}
export interface IChartjsLegendLabels {
  /** Width of coloured box. */
  boxWidth?: number;

  /** Font size of text. */
  fontSize?: number;

  /** Font style of text. */
  fontStyle?: ChartjsFontStyle;

  /** Color of text. */
  fontColor?: ChartjsColorType;

  /** Font family of legend text. */
  fontFamily?: string;

  /** Padding between rows of colored boxes. */
  padding?: number;

  /** Generates legend items for each thing in the legend.
  Default implementation returns the text + styling for the color box.
  */
  generateLabels?: (chart: IChartJsProps) => IChartjsLegendLabelsItem;

  /** Filters legend items out of the legend.
   Receives 2 parameters, a Legend Item and the chart data.
   */
  filter?: (item: IChartjsLegendLabelsItem, data: IChartjsData) => boolean;

  /** Label style will match corresponding point style
   (size is based on the mimimum value between boxWidth and fontSize).
   */
  usePointStyle?: boolean;
}

export interface IChartjsLegend {
  /** Is the legend shown? */
  display?: boolean;

  /** Position of the legend.  */
  position?: 'top' | 'left' | 'bottom' | 'right';

  /** Marks that this box should take the full width of the canvas (pushing down other boxes).
  This is unlikely to need to be changed in day-to-day use.
  */
  fullWidth?: boolean;

  /** A callback that is called when a click event is registered on a label item. */
  onClick?: (...args: any[]) => void;

  /** A callback that is called when a 'mousemove' event is registered on top of a label item. */
  onHover?: (...args: any[]) => void;

  /** A callback that is called when a 'mousemove' event is
   registered outside of a previously hovered label item. */
  onLeave?: (...args: any[]) => void;

  /** Legend will show datasets in reverse order. */
  reverse?: boolean;

  /** The legend label configuration */
  labels?: IChartjsLegendLabels;
}

export interface IChartjsLayout {
  /** The padding to add inside the chart. */
  padding?:
    | number
    | {
        left?: number;
        right?: number;
        top: number;
        bottom: number;
      };
}

export type ChartjsAnimationEasingType =
  | 'linear'
  | 'easeInQuad'
  | 'easeOutQuad'
  | 'easeInOutQuad'
  | 'easeInCubic'
  | 'easeOutCubic'
  | 'easeInOutCubic'
  | 'easeInQuart'
  | 'easeOutQuart'
  | 'easeInOutQuart'
  | 'easeInQuint'
  | 'easeOutQuint'
  | 'easeInOutQuint'
  | 'easeInSine'
  | 'easeOutSine'
  | 'easeInOutSine'
  | 'easeInExpo'
  | 'easeOutExpo'
  | 'easeInOutExpo'
  | 'easeInCirc'
  | 'easeOutCirc'
  | 'easeInOutCirc'
  | 'easeInElastic'
  | 'easeOutElastic'
  | 'easeInOutElastic'
  | 'easeInBack'
  | 'easeOutBack'
  | 'easeInOutBack'
  | 'easeInBounce'
  | 'easeOutBounce'
  | 'easeInOutBounce';

export interface IChartjsAnimationCallback {
  /** Chart object */
  chart: IChartJsProps;

  /** Current Animation frame number */
  currentStep: number;

  /** Number of animation frames */
  numSteps: number;

  /** Animation easing to use */
  easing: ChartjsAnimationEasingType;

  /** Function that renders the chart */
  render: (...args: any[]) => void;

  /** User callback */
  onAnimationProgress: (...args: any[]) => void;

  /** User callback */
  onAnimationComplete: (...args: any[]) => void;
}

export interface IChartjsAnimation {
  /** The number of milliseconds an animation takes. */
  duration?: number;

  /** Easing function to use */
  easing?: ChartjsAnimationEasingType;

  /** Callback called on each step of an animation */
  onProgress?: ({ animationObject: IChartjsAnimationCallback }) => void;

  /** Callback called at the end of an animation. */
  onComplete?: ({ animationObject: IChartjsAnimationCallback }) => void;

  animateScale?: boolean;
  animateRotate?: boolean;
}

export type ChartjsPointStyleType =
  | 'circle'
  | 'cross'
  | 'crossRot'
  | 'dash'
  | 'line'
  | 'rect'
  | 'rectRounded'
  | 'rectRot'
  | 'star'
  | 'triangle';

export interface IChartjsPointConfiguration {
  /** Point radius. */
  radius?: number;

  /** Point style. */
  pointStyle?: ChartjsPointStyleType | HTMLCanvasElement;

  /** Point rotation (in degrees). */
  rotation?: number;

  /** Point fill color. */
  backgroundColor?: ChartjsColorType;

  /** Point stroke width. */
  borderWidth?: number;

  /** Point stroke color. */
  borderColor?: ChartjsColorType;

  /* Extra radius added to point radius for hit detection. */
  hitRadius?: number;

  /** Point radius when hovered. */
  hoverRadius?: number;

  /** Stroke width when hovered. */
  hoverBorderWidth?: number;
}

export interface IChartjsLineConfiguration {
  /** Bézier curve tension (0 for no Bézier curves). */
  tension?: number;

  /** Line fill color. */
  backgroundColor?: ChartjsColorType;

  /** Line stroke width. */
  borderWidth?: number;

  /** Line stroke color. */
  borderColor?: ChartjsColorType;

  /** Line cap style.  */
  borderCapStyle?: 'butt' | 'round' | 'square';

  /** Line dash. */
  borderDash?: number[];

  /** Line dash offset. */
  borderDashOffset?: number;

  /** Line join style. */
  borderJoinStyle?: 'bevel' | 'round' | 'miter';

  /** true to keep Bézier control inside the chart, false for no restriction. */
  capBezierPoints?: boolean;

  /** Fill location: 'zero', 'top', 'bottom', true (eq. 'zero') or false (no fill). */
  fill?: boolean | 'zero' | 'top' | 'bottom';

  /** true to show the line as a stepped line (tension will be ignored). */
  stepped?: boolean;
}

export interface IChartjsRectangleConfiguration {
  /** Bar fill color. */
  backgroundColor?: ChartjsColorType;

  /** Bar stroke width. */
  borderWidth?: number;

  /** Bar stroke color. */
  borderColor?: ChartjsColorType;

  /** Skipped (excluded) border:  */
  borderSkipped?: 'bottom' | 'left' | 'top' | 'right';
}

export interface IChartjsArcConfiguration {
  /** Arc fill color. */
  backgroundColor?: ChartjsColorType;

  /** Arc stroke alignment. 'center' */
  borderAlign?: string;

  /** Arc stroke color. */
  borderColor?: ChartjsColorType;

  /** Arc stroke width. */
  borderWidth?: number;
}

export interface IChartjsElements {
  /** Point elements are used to represent the points in a line, radar or bubble chart. */
  point?: IChartjsPointConfiguration;

  /** Line elements are used to represent the line in a line chart. */
  line?: IChartjsLineConfiguration;

  /** Rectangle elements are used to represent the bars in a bar chart. */
  rectangle?: IChartjsRectangleConfiguration;

  /** Arcs are used in the polar area, doughnut and pie charts. */
  arc?: IChartjsArcConfiguration;
}

export interface IChartjsAxisGridLines {
  /** If false, do not display grid lines for this axis. */
  display?: boolean;

  /** If true, gridlines are circular (on radar chart only). */
  circular?: boolean;

  /** The color of the grid lines. If specified as an array, the first color applies to
  the first grid line, the second to the second grid line and so on.
  */
  color?: ChartjsColorType | ChartjsColorType[];

  /** Length and spacing of dashes on grid lines. */
  borderDash?: number[];

  /** Offset for line dashes. */
  borderDashOffset?: number;

  /** Stroke width of grid lines. */
  lineWidth?: number | number[];

  /** If true, draw border at the edge between the axis and the chart area. */
  drawBorder?: boolean;

  /** If true, draw lines on the chart area inside the axis lines.
  This is useful when there are multiple axes and you need to control which grid lines are drawn.
  */
  drawOnChartArea?: boolean;

  /** If true, draw lines beside the ticks in the axis area beside the chart. */
  drawTicks?: boolean;

  /** Length in pixels that the grid lines will draw into the axis area. */
  tickMarkLength?: number;

  /** Stroke width of the grid line for the first index (index 0). */
  zeroLineWidth?: number;

  /** Stroke color of the grid line for the first index (index 0). */
  zeroLineColor?: ChartjsColorType;

  /** Length and spacing of dashes of the grid line for the first index (index 0) */
  zeroLineBorderDash?: number[];

  /** Offset for line dashes of the grid line for the first index (index 0) */
  zeroLineBorderDashOffset?: number;

  /** If true, grid lines will be shifted to be between labels.
    This is set to true for a category scale in a bar chart by default.
   */
  offsetGridLines?: boolean;
}

export interface IChartjsAxisScaleLabel {
  /** If true, display the axis title. */
  display?: boolean;

  /** The text for the title. (i.e. "# of People" or "Response Choices"). */
  labelString?: string;

  /** Height of an individual line of text  */
  lineHeight?: number | string;

  /** Font color for scale title. */
  fontColor?: ChartjsColorType;

  /** Font family for the scale title, follows CSS font-family options. */
  fontFamily?: string;

  /** Font size for scale title. */
  fontSize?: number;

  /** Font style for the scale title, follows CSS font-style options
    (i.e. normal, italic, oblique, initial, inherit).
   */
  fontStyle?: ChartjsFontStyle;

  /** Padding to apply around scale labels. Only top and bottom are implemented. */
  padding?: number;
}

export interface IChartjsAxisTicks {
  /** f true, automatically calculates how many labels can be shown and hides labels accordingly.
    Labels will be rotated up to maxRotation before skipping any.
    Turn autoSkip off to show all labels no matter what.
   */
  autoSkip?: boolean;

  /** Padding between the ticks on the horizontal axis when autoSkip is enabled. */
  autoSkipPadding?: number;

  /** Distance in pixels to offset the label from the centre point of the tick
   (in the x direction for the x axis, and the y direction for the y axis).
   Note: this can cause labels at the edges to be cropped by the edge of the canvas
   */
  labelOffset?: number;

  /** Maximum rotation for tick labels when rotating to condense labels.
    Note: Rotation doesn't occur until necessary. Note: Only applicable to horizontal scales.
   */
  maxRotation?: number;

  /** Minimum rotation for tick labels. Note: Only applicable to horizontal scales. */
  minRotation?: number;

  /** Flips tick labels around axis, displaying the labels inside the chart instead of outside.
    Note: Only applicable to vertical scales.
   */
  mirror?: boolean;

  /** Padding between the tick label and the axis.
   When set on a vertical axis, this applies in the horizontal (X) direction.
   When set on a horizontal axis, this applies in the vertical (Y) direction.
   */
  padding?: number;
  min?: number;
  max?: number;
  stepSize?: number;
  suggestedMin?: number;
  suggestedMax?: number;
  beginAtZero?: boolean;
  userCallback?: (tick: number) => string;
}

export interface IChartjsAxis {
  display?: boolean;

  /** Type of scale being employed. Custom scales can be created and registered with a string key.
  This allows changing the type of an axis for a chart.
  */
  type?: string;

  /** Position of the axis in the chart. */
  position?: 'top' | 'left' | 'bottom' | 'right';

  /** If true, extra space is added to the both edges and the axis is scaled
   to fit into the chart area.
   This is set to true for a category scale in a bar chart by default.
  */
  offset?: boolean;

  /** The ID is used to link datasets and scale axes together. */
  id?: string;

  /** Grid line configuration. */
  gridLines?: IChartjsAxisGridLines;

  /** Scale title configuration. */
  scaleLabel?: IChartjsAxisScaleLabel;

  /** Tick configuration. */
  ticks?: IChartjsAxisTicks;

  stacked?: boolean;
  time?: {
    format?: string;
    tooltipFormat?: string;
  };
  distribution?: string;
  reverse?: boolean;
}

export interface IChartjsOptions {
  opacity?: number;
  themedData?: boolean;

  /** tooltips configuration */
  tooltips?: IChartjsTooltips;

  /** The chart title defines text to draw at the top of the chart. */
  title?: IChartjsTitle;

  /** The chart legend displays data about the datasets that are appearing on the chart. */
  legend?: IChartjsLegend;

  /** The layout configuration is passed into the options.layout namespace.
  The global options for the chart layout is defined in Chart.defaults.global.layout
  */
  layout?: IChartjsLayout;

  /** Chart.js animates charts out of the box. A number of options are
  provided to configure how the animation looks and how long it takes.
  */
  animation?: IChartjsAnimation;

  /** While chart types provide settings to configure the styling of each dataset,
  you sometimes want to style all datasets the same way
  */
  elements?: IChartjsElements;
  plugins?: {
    [x: string]: any;
  };
  scales?: {
    yAxes?: IChartjsAxis[];
    xAxes?: IChartjsAxis[];
  };
  scale?: IChartjsAxis;
  hover?: IChartjsTooltips;
  hoverMode?: string;
  intersect?: boolean;
}

export interface IChartjsDataObject {
  label?: string;
  data?: number;
  opacity?: number;
  x?: string | Date | number;
  y?: number;
}
export interface IChartjsDataset {
  label?: string;
  data?: number[] | IChartjsDataObject[];
  borderWidth?: number;
  opacity?: number;
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
  fill?: boolean;
  type?: string;
  pointRadius?: number;
  lineTension?: number;
}
export interface IChartjsData {
  datasets?: IChartjsDataset[];
  labels?: string[] | Date[];
}

export interface IChartJsProps {
  options?: IChartjsOptions;
  data?: IChartjsData;
}
export type ChartJsType = React.ElementType<IChartJsProps>;

export interface ChartjsComponentType {
  (props: IChartJsProps, context?: any): ReactElement | null;
  propTypes?: IChartJsProps;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<IChartJsProps>;
  displayName?: string;
}
