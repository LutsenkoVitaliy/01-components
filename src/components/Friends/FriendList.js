import PropTypes from 'prop-types';
import { FriendsList } from './FriendList.styled'
import FriendsListItem from './FriendListItem/FriendListItem'


export default function FriendList({friends}) {
    return (
    <FriendsList>
        {friends.map(friend => (
            <FriendsListItem
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />   
        ))}
    </FriendsList>
    )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};