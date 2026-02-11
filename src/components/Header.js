import { Link } from "react-router-dom";
import "../styles/Header.css";
import PathConstants from "../routes/pathConstant";
export default function Header() {
return ( <header>
  <div className="header-div"> <h1 className="title"> <Link to={PathConstants.HOME}>My Dapp</Link> </h1>
    <nav className="navbar"> <ul className="nav-list"> <li className="nav-item">
    <Link to={PathConstants.HOME}>Home</Link>
    </li>
    <li className="nav-item"> <Link to={PathConstants.PORTFOLIO}>Portfolio</Link> </li>
    <li className="nav-item"> <Link to={PathConstants.ABOUT}>About Me</Link>
    </li>
    </ul>
    </nav>
  </div> </header>
);
}