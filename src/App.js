import React from 'react';
import LogIn from './pages/SignIn/SignIn';
import UserPage from './pages/UsersPage/UsersPage';
import SignUp from './pages/SignUp/SignUp';
import { Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from './protected.route';
import UserCardPage from "./pages/UserCardPage/UserCardPage"

function App() {

  return (
    <div className="App">
      <Switch >
        <Route exact path="/" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
        <ProtectedRoute exact path="/users" component={UserPage} />
        <Route exact path="/users/:id" component={UserCardPage} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>     
    </div>
  );
}

export default App;
