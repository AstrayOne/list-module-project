import React from 'react';
import styles from 'components/Header/Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.root} >
      <Link to='/' className={styles.homeNav} >Home</Link>
    </div>
  );
};

export default Header;
