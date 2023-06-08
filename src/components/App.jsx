import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendsList } from './FriendsList';
import { TransactionHistory } from './TransactionHistory';
import data from './data';
import user from './user';
import friends from './friends';
import transactions from './transactions';

export const App = () => {
  return (
    <div
      style={{
        height: '100',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
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
      <Statistics stats={data} />
      <FriendsList friends={friends} isOnline={true} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
