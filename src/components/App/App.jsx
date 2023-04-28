import Profile from 'components/Profile/Profile';
import user from 'data/user';
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
    </AppStyled>
  );
};

export default App;
