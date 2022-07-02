import React from 'react';
import { Switch } from 'react-router-dom';
import 'rsuite/dist/styles/rsuite-default.css';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import './styles/main.scss';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import { ProfileProvider } from './Components/context/Profile.context';

function App() {
  return (
    <ProfileProvider>
      <Switch>
        <PublicRoute path="/signin">
          <SignIn />
        </PublicRoute>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </ProfileProvider>
  );
}

export default App;
