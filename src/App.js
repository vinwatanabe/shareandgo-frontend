import {Routes,Route} from 'react-router-dom'
import Home from './components/home'
import User from './components/user'
import Car from './components/car'
import Address from './components/address'
import PaymentMethod from './components/payment_method'
import Ride from './components/ride'
import Passenger from './components/passenger'
import SeatRequest from './components/seat_request'
import NavBar from './components/navBar'
import NotFound from './components/notFound'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
            <Route
            path="/"
            element = {<Home/>}
            />
            <Route
            path="/user"
            element = {<User/>}
            />
            <Route
            path="/car"
            element = {<Car/>}
            />
            <Route
            path="/address"
            element = {<Address/>}
            />
            <Route
            path="/payment_method"
            element = {<PaymentMethod/>}
            />
            <Route
            path="ride"
            element = {<Ride/>}
            />
            <Route
            path="passenger"
            element = {<Passenger/>}
            />
            <Route
            path="seat_request"
            element = {<SeatRequest/>}
            />
            <Route
            path="*"
            element = {<NotFound/>}
            />
        </Routes>
    </div>
  );
}

export default App;
