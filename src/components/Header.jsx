import "./Header.css";

export const Header = () => {
  return (
    <>
      <div className="header__container">
        <div className="nav__header">
          <a className="home">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
              className="nav-home"
            />
          </a>
          <a className="home">
            <img
              src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-person_90382.png"
              className="nav-about-me"
            />
          </a>
          <a className="home">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6208/6208597.png"
              className="nav-proyects"
            />
          </a>
          <a className="home">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3846/3846805.png"
              className="nav-about-me"
            />
          </a>
        </div>
      </div>
    </>
  );
};
