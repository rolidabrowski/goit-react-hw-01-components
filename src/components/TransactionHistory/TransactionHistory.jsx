import './TransactionHistory.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <table className="fl-table">
      <thead>
        <tr>
          <th>Items</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionHistoryItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

TransactionHistoryItem.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
