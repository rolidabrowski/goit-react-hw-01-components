import './Statistics.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title = 'Upload stats', stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">
        {title.length > 0 ? `${title} ` : 'No unread messages.'}
      </h2>
      <ul className="stat-list">
        {stats.map(stat => (
          <li key={stat.id} className="item">
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
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
