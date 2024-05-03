import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <>
      <div className="header__container">
        <div className="nav__header">
          <Link to="/" className="nav_link">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
              className="nav-home"
            />
          </Link>
          <Link to="/aboutme" className="nav_link">
            <img
              src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-person_90382.png"
              className="nav-about-me"
            />
          </Link>
          <Link to="/proyects" className="nav_link">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6208/6208597.png"
              className="nav-proyects"
            />
          </Link>
          <Link to="/cv" className="nav_link">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3846/3846805.png"
              className="nav-cv"
            />
          </Link>
        </div>
      </div>
    </>
  );
};
