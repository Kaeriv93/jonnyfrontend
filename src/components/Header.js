import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub,  } from "react-icons/fa";

function Header(props) {
  //inline style for the nav tag


  return (
    <header>
      <nav className="navbar">
        <Link to="/">
          <div>HOME</div>
        </Link>
          <div className="favicons">
            <li className='git'> <FaGithub /></li>
            <li className="linkedIn"> <FaLinkedin/></li>
          </div>
      </nav>
    </header>
  );
}

export default Header;