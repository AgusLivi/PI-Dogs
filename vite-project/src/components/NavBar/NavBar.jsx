import { Link } from 'react-router-dom';
import './NavBarModule.css';

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li><Link to="/">Log Out</Link></li>
        <li><Link to="/form">Create New breed</Link></li>
        <li><Link to="/Home">Home</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;