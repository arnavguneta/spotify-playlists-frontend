import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

import styles from './NavBar.module.css';

const NavBar = () => {
  const { user } = useContext(UserContext);

  return (
    <header>
      <nav className={styles.navbar}>
        <button className={`${styles.mainBtn} ${styles.navItemsFont}`}>
          {
            user === null && <NavLink to='/login'>Login</NavLink>
            || <NavLink to='/logout'>Logout</NavLink>
            // TODO: render user component instead of logout link
          }
        </button>
      </nav>
    </header>
  );
};

export default NavBar;