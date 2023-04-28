import styled from 'styled-components';

const StatisticsSection = styled.section`
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
  background-color: #bdbaba;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

const StatList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StatItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.span`
  display: inline-block;
  min-width: 50px;
  margin-right: 10px;
  font-weight: bold;
`;
const Percentage = styled.span`
  display: inline-block;
  width: 60px;
  text-align: right;
  font-weight: bold;
`;

export { StatisticsSection, Title, StatList, StatItem, Label, Percentage };
