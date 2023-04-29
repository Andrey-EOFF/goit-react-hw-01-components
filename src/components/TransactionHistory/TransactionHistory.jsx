import PropTypes from 'prop-types';
import TransactionHistoryItems from './TransactionHistoryItems';
import {
  Table,
  TableHeader,
  TableHeaderData,
  TableRow,
  TableBody,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderData>Type</TableHeaderData>
          <TableHeaderData>Amount</TableHeaderData>
          <TableHeaderData>Currency</TableHeaderData>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionHistoryItems
            key={id}
            id={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
