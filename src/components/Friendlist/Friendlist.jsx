import React from 'react';
import PropTypes from 'prop-types';
import { FriendListItem } from "components/FriendListitem/FriendListitem";
import css from "./Friendlist.module.css";

export const FriendList = ({ friends}) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendListItem
                key={id}
                id={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                />

            ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
    ).isRequired,
  };
  
  export default FriendList;