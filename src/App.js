import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Contact from './Contact/Contact';
import Login from './Login/Login';
import Post from './Post/Post';
import Signup from './Signup/Signup';
import TandC from './TandC/TandC';
import Feed from './Feed/Feed';
import Profile from './Profile/Profile';
import Home from './LandingPage/LandingPage';
import EditProfile from './EditProfile/EditProfile';




function App() {
  return (
    <div className="App">
       <Navbar/>
      <div className='overlay'>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Login" component={Login}/>
          <Route exact path="/Signup" component={Signup}/>
          <Route exact path="/Contact" component={Contact}/>
          <Route exact path="/TandC" component={TandC}/>
          <Route exact path="/Feed" component={Feed}/>
          <Route exact path="/Post" component={Post}/>
          <Route exact path="/EditProfile" component={EditProfile}/>
          <Route exact path="/Profile" component={Profile}/>
      </Switch>
      </div>
    </div>
  );
}

export default App;
