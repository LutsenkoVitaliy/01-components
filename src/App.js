import Profile from "./components/Profile/Profile";
import user from './components/Profile/user.json';

import FriendList from './components/Friends/FriendList';
import friends from './components/Friends/friends.json';

import Statistics from './components/Statistics/Statistics';
import data from './components/Statistics/data.json';

import TransactionHistory from './components/Transaction/TransactionHistory';
import transactions from './components/Transaction/transactions.json';

import { Container } from "./App.styled";


export default function App() {
  return (
    <Container>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data}/>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}



