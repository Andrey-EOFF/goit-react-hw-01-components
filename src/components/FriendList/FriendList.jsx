// import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
    return <ul className="friend-list"> { <li>{ friends[0] }</li>}</ul>;
};

export default FriendList;