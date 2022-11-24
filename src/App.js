import React, { useContext } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useNavigate,
} from 'react-router-dom';
import './App.css';
import { Context, AuthContext } from './context/AuthContext';
import Gateway from './pages/Gateway';
import Registration from './pages/Registration';
import Login from './pages/Login';
import MainPassenger from './pages/MainPassenger';
import DestinationPassenger from './pages/DestinationPassenger';
import AvailableDrivers from './pages/AvailableDrivers';
import RideInfo from './pages/RideInfo';
import RideStatus from './pages/RideStatus';
import RideCompleteReview from './pages/RideCompleteReview';
import UserAccountPage from './pages/UserAccountPage';
import UserAccountEdit from './pages/UserAccountEdit';
import Messages from './pages/Messages';
import MessageContent from './pages/MessageContent';
import NotFound from './pages/NotFound';
import Header from './components/Header';

function App() {
	function ProtectedRoute({ children }) {
		const { authenticated, loading } = useContext(Context);
		let navigate = useNavigate();

		if (loading) {
			return <h1>Loading...</h1>;
		}

		if (!authenticated) {
			window.location.href = '/';
		} else {
			return children;
		}
	}

	return (
		<>
			<Router>
				<AuthContext>
					<Header />
					<div className='container-sm'>
						<Routes>
							<Route path='/' element={<Gateway />} />
							<Route path='/registration' element={<Registration />} />
							<Route path='/login' element={<Login />} />
							<Route
								path='/main-passenger'
								element={
									<ProtectedRoute>
										<MainPassenger />
									</ProtectedRoute>
								}
							/>
							<Route
								path='/passenger-destination'
								element={
									<ProtectedRoute>
										<DestinationPassenger />
									</ProtectedRoute>
								}
							/>
							<Route
								path='/available-drivers'
								element={
									<ProtectedRoute>
										<AvailableDrivers />
									</ProtectedRoute>
								}
							/>
							<Route
								path='/ride-info'
								element={
									<ProtectedRoute>
										<RideInfo />
									</ProtectedRoute>
								}
							/>
							<Route
								path='/waiting-ride'
								element={
									<ProtectedRoute>
										<RideStatus status='waiting' />
									</ProtectedRoute>
								}
							/>
							<Route
								path='/ride-confirmed'
								element={
									<ProtectedRoute>
										<RideStatus status='confirmed' />
									</ProtectedRoute>
								}
							/>
							<Route
								path='/ride-complete'
								element={
									<ProtectedRoute>
										<RideCompleteReview />
									</ProtectedRoute>
								}
							/>
							<Route
								path='/user-account'
								element={
									<ProtectedRoute>
										<UserAccountPage />
									</ProtectedRoute>
								}
							/>
							<Route
								path='/account/edit'
								element={
									<ProtectedRoute>
										<UserAccountEdit />
									</ProtectedRoute>
								}
							/>
							<Route
								path='/messages'
								element={
									<ProtectedRoute>
										<Messages />
									</ProtectedRoute>
								}
							/>
							<Route
								path='/message-content'
								element={
									<ProtectedRoute>
										<MessageContent />
									</ProtectedRoute>
								}
							/>
							<Route path='*' element={<NotFound />} />
						</Routes>
					</div>
				</AuthContext>
			</Router>
		</>
	);
}

export default App;
