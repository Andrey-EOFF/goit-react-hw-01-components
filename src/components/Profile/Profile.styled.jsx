import styled from 'styled-components';

const ProfileBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #b3d8f8;
  padding: 25px;
  border-radius: 10px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled.img`
  width: 100%;
  max-width: 200px;
  border-radius: 50%;
  background-color: #e3ff10c1;
`;

const Username = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
`;

const Tag = styled.p`
  font-size: 18px;
  color: gray;
`;

const Location = styled.p`
  font-size: 18px;
`;

const StatsList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 20px 0;
  padding: 0;
  width: 100%;
  max-width: 400px;
  &:hover {
    color: #416686;
  }
`;

const StatItem = styled.li`
  text-align: center;
`;

const StatLabel = styled.span`
  font-size: 18px;
  color: gray;
`;

const StatQuantity = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export {
  ProfileBlock,
  ProfileInfo,
  Avatar,
  Username,
  Tag,
  Location,
  StatsList,
  StatItem,
  StatLabel,
  StatQuantity,
};
