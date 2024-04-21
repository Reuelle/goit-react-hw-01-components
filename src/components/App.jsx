
import { Profile } from "./Profile/profile";
import user from "../JSON/user.json";
import { Statistics } from "./Statistics/Statistics";
import data from "../JSON/data.json";

import Friends from "../JSON/friends.json";
import { FriendList } from "./Friendlist/Friendlist";

import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from "../JSON/transactions.json";


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
  <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
  />

  <Statistics title="Upload Stats" stats={data} />

  <FriendList friends={friends} />

  <TransactonHistotry items={transactions} />
    </div>
  );
};
