import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';

export default function Home() {
  return (
    <div className={styles.container} data-tid="container">
      <h2>Tools</h2>
      <ul className={styles.list}>
        <li>
          <Link to={routes.PASSWORD}>Password Center</Link>
        </li>
        <li>
          <Link to={routes.COUNTER}>Counter</Link>
        </li>
      </ul>
    </div>
  );
}
