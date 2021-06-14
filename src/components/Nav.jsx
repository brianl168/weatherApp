import React from 'react';
import SearchBar from './SearchBar.jsx';
import styles from '../style/Nav.module.css';
import { Link } from 'react-router-dom';

function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to='/'>
        <a className={"navbar-brand " + styles.head} href="/">
          <span className={styles.text}>Weather App
          </span>
        </a>
      </Link>
      <Link to='/about'>
        <span className={styles.about} >About</span>
      </Link>
      <SearchBar onSearch={onSearch}></SearchBar>
    </nav>
  )
};

export default Nav;
