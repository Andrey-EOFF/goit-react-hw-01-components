import PropTypes from 'prop-types';
import {
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
} from 'components/Profile/Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <ProfileBlock>
      <ProfileInfo>
        <Avatar src={avatar} alt={username} />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </ProfileInfo>

      <StatsList>
        <StatItem>
          <StatLabel>Followers</StatLabel>
          <StatQuantity>{followers}</StatQuantity>
        </StatItem>
        <StatItem>
          <StatLabel>Views</StatLabel>
          <StatQuantity>{views}</StatQuantity>
        </StatItem>
        <StatItem>
          <StatLabel>Likes</StatLabel>
          <StatQuantity>{likes}</StatQuantity>
        </StatItem>
      </StatsList>
    </ProfileBlock>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
