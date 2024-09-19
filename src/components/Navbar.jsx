import { useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Home
      </a>
      <div className={styles.menu}>
        <img
          className={styles.btn}
          src={
            menuOpen
              ? "https://res.cloudinary.com/dp9qiodee/image/upload/v1726756397/hrtuqvsb5u1hjwkmc79k.png"
              : "https://res.cloudinary.com/dp9qiodee/image/upload/v1726754723/v21ozri2r6kcmtv4a2ma.png"
          }
          alt="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.items} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="about">Sobre mí</a>
          </li>
          <li>
            <a href="projects">Proyectos</a>
          </li>
          <li>
            <a href="contact">Contacto</a>
          </li>
          <li>
            <a href="cv">Mi CV</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
