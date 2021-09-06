import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm/SignUpForm';
import SignInForm from './pages/SignInForm/SignInForm';
import AppLoading from './AppLoading';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Confirm from './pages/Confirm/Confirm';
import ProtectedRoute from './routes/ProtectedRoute';

const App: React.FC = () => {
	const [isLogin, setIsLogin] = useState(false);
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Switch>
					<Route
						exact
						path='/'
						component={() => <AppLoading setIsLogin={setIsLogin} />}
					/>
					<Route path='/home' component={Home} />
					<Route path='/confirm' component={Confirm} />
					<Route path='/login' component={SignInForm} />
					<Route path='/register' component={SignUpForm} />
					<Route path='*' component={() => <div>404 not found.</div>} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
