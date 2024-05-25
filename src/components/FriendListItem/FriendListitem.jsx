import React from 'react';
import PropTypes from 'prop-types';
import css from "./FriendListItem.module.css";

export const FriendListItem = ({ avatar, id, name, isOnline }) => {
  console.log(isOnline ? 'Online' : 'Offline');
    return (
      <li className={css.friendListItem}>
        <span className={`${css.status} ${isOnline ? css.online : css.offline}`}></span>
        <img src={avatar} alt="User avatar" width="48" className={css.avatar} />
        <p className={css.name}>{name}</p>
      </li>
    );
  };
  FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  };
  
  export default FriendListItem;