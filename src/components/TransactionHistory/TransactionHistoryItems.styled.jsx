import styled from 'styled-components';

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableData = styled.td`
  padding: 10px;
  text-align: center;
`;

export { TableRow, TableData };
