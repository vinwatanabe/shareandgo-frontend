import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Gateway from './pages/Gateway';
import Registration from './pages/Registration';
import Login from './pages/Login';
import MainPassenger from './pages/MainPassenger';
import DestinationPassenger from './pages/DestinationPassenger';
import DriversAvailable from './pages/DriversAvailable';
import RideInfo from './pages/RideInfo';
import RideStatus from './pages/RideStatus';
import RideCompleteReview from './pages/RideCompleteReview';
import UserAccountPage from './pages/UserAccountPage';
import Messages from './pages/Messages';
import MessageContent from './pages/MessageContent';
import Header from './components/Header';

function App() {
	return (
		<>
			<Router>
				<Header />
				<div className='container-sm'>
					<Routes>
						<Route path='/' element={<Gateway />} />
						<Route path='/registration' element={<Registration />} />
						<Route path='/login' element={<Login />} />
						<Route path='/main-passenger' element={<MainPassenger />} />
						<Route
							path='/passenger-destination'
							element={<DestinationPassenger />}
						/>
						<Route path='/drivers-available' element={<DriversAvailable />} />
						<Route path='/ride-info' element={<RideInfo />} />
						<Route path='/ride-status' element={<RideStatus />} />
						<Route path='/ride-complete' element={<RideCompleteReview />} />
						<Route path='/user-account' element={<UserAccountPage />} />
						<Route path='/messages' element={<Messages />} />
						<Route path='/message-content' element={<MessageContent />} />
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
