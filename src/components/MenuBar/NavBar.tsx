import { NavLink } from 'react-router-dom';

import styles from './NavBar.module.css';
import { useUserContext } from '../../hooks/useUserContext';

const NavBar = () => {
  const userState = useUserContext();

  return (
    <header>
      <nav className={styles.navbar}>
        <button className={`${styles.mainBtn} ${styles.navItemsFont}`}>
          {
            !userState?.isAuth && <NavLink to='/login'>Login</NavLink>
            || <NavLink to='/logout'>Logout</NavLink>
            // TODO: render user component instead of logout link
          }
        </button>
      </nav>
    </header>
  );
};

export default NavBar;