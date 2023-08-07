// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <div className="flex-nav">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-img"
      />
      <h1 className="nav-text">Wave</h1>
    </div>
    <ul>
      <li>
        <Link className="link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="link" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)
export default Header
