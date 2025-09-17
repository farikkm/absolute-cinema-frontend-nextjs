import { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <img src="/icons/logo.png" alt="logo" />
        </div>
        <nav className="header__menu">
          <ul className={`header__list ${openMenu ? "_active" : ""}`}>
            <li className="header__item" onClick={() => setOpenMenu(false)}>
              <a href="#" className="header__link">
                Home
              </a>
            </li>
            <li className="header__item" onClick={() => setOpenMenu(false)}>
              <a href="#" className="header__link">
                Movies
              </a>
            </li>
            <li className="header__item" onClick={() => setOpenMenu(false)}>
              <a href="#" className="header__link">
                Series
              </a>
            </li>
            <li className="header__item" onClick={() => setOpenMenu(false)}>
              <a href="#" className="header__link">
                Kids
              </a>
            </li>
          </ul>
          <div className="header__button" onClick={() => setOpenMenu(!openMenu)}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </nav>
        <div className="header__actions">
          <i className="header__actions_search fa-solid fa-magnifying-glass"></i>
          <i className="header__actions_profile fa-solid fa-user"></i>
          <i className="header__actions_mode fa-solid fa-sun-plant-wilt"></i>
        </div>
      </div>
    </header>
  );
}
