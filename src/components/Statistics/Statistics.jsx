import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title = 'Upload stats', stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>
        {title.length > 0 ? `${title} ` : 'No unread messages.'}
      </h2>
      <ul className={css.list}>
        {stats.map(stat => (
          <li key={stat.id} className={css.item}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
