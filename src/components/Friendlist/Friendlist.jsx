import { FriendListItem } from "components/FriendListitem/FriendListitem";
import css from "./Friendlist.module.css";

export const FriendList = ({ friends}) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                />

            ))}
        </ul>
    );
};