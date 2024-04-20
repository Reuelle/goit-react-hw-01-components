
import { Profile } from "./profile";
import user from "../JSON/user.json";
import data from "../JSON/data.json";

export const App = () => {
  console.log(user);
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
  <Statistics stats={data} />

    </div>
  );
};
