import {Link} from 'react-router-dom'
const NavBar = () => {
    return (<nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Testing App</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="user">Users</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="car">Cars</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="address">Addresses</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="payment_method">Payment Methods</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="ride">Rides</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="passenger">Passengers</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="seat_request">Seat Requests</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav> );
}
 
export default NavBar;