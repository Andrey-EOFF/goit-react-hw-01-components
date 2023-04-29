import PropTypes from 'prop-types';
import {TableRow, TableData} from './TransactionHistoryItems.styled';


const TransactionHistoryItems = ({ id, type, amount, currency }) => {
  return (
    <TableRow key={id}>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </TableRow>
  );
};

TransactionHistoryItems.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItems;
