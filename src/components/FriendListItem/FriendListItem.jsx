import PropTypes from 'prop-types';
import {
  Card,
  StatusIndicator,
  Avatar,
  Name,
} from 'components/FriendListItem/FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Card>
      <StatusIndicator isOnline={isOnline}></StatusIndicator>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Card>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
