import React from "react";
import styles from "../Navbar/Navbar.module.css";

export const Navbar = () => {
  return (
    <>
      <nav className={styles.container}>
        <ul className={styles.navbar}>
          <a className={styles.item}>Home</a>
          <a className={styles.item}>About Me</a>
          <a className={styles.item}>Contact</a>
          <a className={styles.item}>Projects</a>
        </ul>
      </nav>
      </>
  );
};
