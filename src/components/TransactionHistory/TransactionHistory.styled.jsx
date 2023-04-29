import styled from 'styled-components';

const Table = styled.table`
  width: 600px;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #f2f2f2;
`;

const TableHeaderData = styled.th`
  padding: 10px;
  font-weight: bold;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
const TableBody = styled.tbody``;

export { Table, TableHeader, TableHeaderData, TableRow, TableBody };
