import { Link } from 'react-router-dom';

import styles from './NavBar.module.css';
import { useUserContext } from '../../../hooks/useUserContext';
import { AccountPill } from '../../UI/Account/AccountPill';

const NavBar = () => {
  const userState = useUserContext();

  return (
    <header>
      <nav className={styles.navbar}>
        {
          !userState?.isAuth
          &&
          <Link to='/login'>
            <button className={`${styles.mainBtn} ${styles.navItemsFont}`}>
              Login
            </button>
          </Link>
          ||
          <AccountPill />
        }
      </nav>
    </header>
  );
};

export default NavBar;