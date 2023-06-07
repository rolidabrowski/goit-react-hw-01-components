import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendsList } from './FriendsList';
import { TransactionHistory } from './TransactionHistory';
import data from './data.json';
import user from './user.json';
import friends from './friends.json';
import transactions from './transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendsList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
