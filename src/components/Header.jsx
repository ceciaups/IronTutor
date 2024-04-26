import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link id="logo" to="/"><img src="logo.png" alt="Iron Tutor's Logo"></img></Link>
      <nav>
        <ul id="nav-bar" className="nav-bar">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/about">About</Link></li>
          <li className="nav-item"><Link to="/courses">Courses</Link></li>
          <li className="nav-item"><Link to="/inspiration">Inspiration</Link></li>
          <li className="nav-item"><Link to="/faq">FAQ</Link></li>
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