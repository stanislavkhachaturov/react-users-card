import React from 'react';
import LogIn from './pages/SignIn/SignIn';
import UserPage from './pages/UsersPage/UsersPage';
import SignUp from './pages/SignUp/SignUp';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Route exact path="/" component={LogIn}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/users" component={UserPage}/>
      </BrowserRouter>     
    </div>
  );
}

export default App;
