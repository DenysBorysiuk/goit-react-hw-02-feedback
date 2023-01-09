import PropTypes from 'prop-types';
import { List } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <List>
    {options.map(option => (
      <li key={option}>
        <button type="button" onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      </li>
    ))}
  </List>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
