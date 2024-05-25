
import { Profile } from "./Profile/profile.jsx";
import user from "../JSON/user.json";
import { Statistics } from "./Statistics/Statistics.jsx";
import data from "../JSON/data.json";

import friends from "../JSON/friends.json";
import { FriendList } from "./Friendlist/Friendlist.jsx";

import { TransactionHistory } from "./TransactionHistory/TransactionHistory.jsx";
import transactions from "../JSON/transactions.json";
import sampleItems from "../data/SampleItems.json";


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

  < TransactionHistory items={sampleItems} />
  </div>
  );
};
export default App;