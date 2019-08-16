import React from 'react';
import './App.css';
import LoginForm from './components/loginForm/LoginForm.js'
import UserInfo from './components/userInfo/UserInfo.js'
import TopBar from './components/topBar/TopBar.js'
import {useSelector} from 'react-redux'

function App() {
  const display = useSelector((state)=> state.user.display)
  return (
    <div>
      <TopBar />
      {display ?<LoginForm />: <p></p>}
      <UserInfo/>
    </div>
  );
}

export default App;
