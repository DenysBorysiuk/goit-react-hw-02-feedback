import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul>
    {options.map(option => (
      <li key={option}>
        <button type="button" onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      </li>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
