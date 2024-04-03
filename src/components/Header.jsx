import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header>
      <img id="logo" src="public/logo.png" alt="Iron Tutor's Logo"></img>
      <nav>
        <ul id="nav-bar" className="nav-bar">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Courses</li>
          <li className="nav-item">Inspiration</li>
          <li className="nav-item">FAQ</li>
        </ul>
      </nav>
      <div id="header-contact">
        <div className="header-social header-small">
          <i className="fa-solid fa-location-dot"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook-f"></i>
        </div>
        <div>info@irontutor.com</div>
        <div className="header-small">416-299-9769</div>
      </div>
    </header>
  )
}