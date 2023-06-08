import css from './FriendsList.module.css';
import PropTypes from 'prop-types';

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(friend => (
        <FriendsListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span
        style={{
          backgroundColor: isOnline ? 'green' : 'red',
        }}
        className={css.status}
      >
        {isOnline}
      </span>
      <img
        className="friend-avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

FriendsListItem.propTypes = {
  friends: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
