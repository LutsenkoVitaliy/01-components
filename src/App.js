import Profile from "./components/Profile/Profile";
import Friends from './components/Friends/FriendList';
import Statistics from './components/Statistics/Statistics';
import Transaction from './components/Transaction/TransactionHistory';
import profiles from './components/Profile/user.json';
import friends from './components/Friends/friends.json';
import data from './components/Statistics/data.json';
import transaction from './components/Transaction/transactions.json';


const profile = profiles;

export default function App() {
  return (
    <div>
      <Profile
        avatar={profile.avatar}
        username={profile.username}
        tag={profile.tag}
        location={profile.location}
        followers={profile.stats.followers}
        views={profile.stats.views}
        likes={profile.stats.likes}
      />
    </div>
  );
}



