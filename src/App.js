import Profile from "./components/Profile/Profile";
import profiles from './components/Profile/user.json'

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



