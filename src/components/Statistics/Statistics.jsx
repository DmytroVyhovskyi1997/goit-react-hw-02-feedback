import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral ,
  bad ,
  total ,
  positivePercentage ,
}) => {
  return (
    <ul className={css.list}>
      <li className={css.text}>Good: {good}</li>
      <li className={css.text}>Natural: {neutral}</li>
      <li className={css.text}>Bad: {bad}</li>
      <li className={css.text}>Total: {total}</li>
      <li className={css.text}>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
