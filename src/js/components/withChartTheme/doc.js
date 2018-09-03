import { PropTypes } from 'react-desc';

export default (DocumentedElement) => {
  // eslint-disable-next-line no-param-reassign
  DocumentedElement.propTypes = {
    data: PropTypes.shape({
      datasets: PropTypes.arrayOf({
        backgroundColor: PropTypes.string.description('Fill color for the chart, can be a grommet theme color ie "accent-1".'),
        borderColor: PropTypes.string.description('Line color for the chart, can be a grommet theme color ie "accent-1".'),
        color: PropTypes.string.description('Fill and line colors for the chart, can be a grommet theme color ie "accent-1".'),
        opacity: PropTypes.number.description('Background opacity for the dataset '),
      }),
    }).description('Chart data object'),
    options: PropTypes.shape({
      opacity: PropTypes.number.description('Background opacity for the chart '),
      themedData: PropTypes.bool.description('If true, all datapoints will be themed with grommet colors'),
    }),
  };
};
