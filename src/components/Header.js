import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub,  } from "react-icons/fa";

function Header(props) {
  //inline style for the nav tag


  return (
    <header>
      <nav className="navbar">
        <Link to="/">
          <div className="home">HOME</div>
        </Link>
          <div className="favicons">
            <li><a href='https://github.com/Kaeriv93' target='_blank' rel="noopener noreferrer" className='git'><FaGithub/></a></li>
            <li><a href='https://www.linkedin.com/in/vireak-san-472a25227/' target='_blank' rel="noopener noreferrer" className='linkedIn'><FaLinkedin/></a></li>
          </div>
      </nav>
    </header>
  );
}

export default Header;
