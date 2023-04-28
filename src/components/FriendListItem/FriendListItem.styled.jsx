import styled from 'styled-components';

const Card = styled.li`
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 4px;
  background-color: #f5f5f5;
  margin-bottom: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StatusIndicator = styled.div`
  height: 14px;
  width: 14px;
  border-radius: 50%;
  margin-right: 10px;
  ${({ isOnline }) =>
    isOnline ? `background-color: #4caf50;` : `background-color: #f44336;`}
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Name = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export { Card, StatusIndicator, Avatar, Name };
