import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import user from 'data/user';
import data from 'data/data';
import friends from 'data/friends';
import transactions from 'data/transactions';

import AppStyled from 'components/App/App.styled';

const App = () => {
  return (
    <AppStyled>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </AppStyled>
  );
};

export default App;

// clg
// console.log(object)

// nfn
// const name = (params) => {

// }

// anfn
// (params) => {

// }
