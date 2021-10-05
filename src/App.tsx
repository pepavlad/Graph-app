import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import SignUpForm from './pages/SignUpForm/SignUpForm';
import SignInForm from './pages/SignInForm/SignInForm';
import AppLoading from './AppLoading';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Confirm from './pages/Confirm/Confirm';
import ProtectedRoute from './routes/ProtectedRoute';
import UserPage from './pages/UserPage/UserPage';
import { authState } from './interfaces/auth';
import './App.scss';

const App: React.FC<{}> = () => {
  const [authState, setAuthState] = useState<authState>();
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        if (user.emailVerified) {
          setAuthState({ authenticated: true, needConfirm: false });
        } else {
          setAuthState({ authenticated: false, needConfirm: true });
        }
      } else {
        setAuthState({ authenticated: false, needConfirm: false });
      }
    });
  }, [authState]);

  if (!authState) {
    return (
      <div className='progress'>
        <div className='indeterminate'> </div>
      </div>
    );
  }
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={AppLoading} />
          <ProtectedRoute path='/home' component={Home} authState={authState} />
          <ProtectedRoute
            authState={authState}
            path='/profile'
            component={UserPage}
          />
          <Route path='/register' component={SignUpForm} />
          <Route path='/confirm' component={Confirm} />
          <Route path='/login' component={SignInForm} />
          <Route path='*' component={() => <div>404 not found.</div>} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
