import { Link } from 'react-router-dom';

import styles from './NavBar.module.css';
import { useUserContext } from '../../../hooks/useUserContext';
import { AccountPill } from './Account/AccountPill';
import { Burger } from './Burger/Burger';

const NavBar = () => {
  const userState = useUserContext();
  const navItems = ['Home', 'Library'];
  return (
    <header>
      <nav className={styles.navbar}>
        <Burger items={navItems} />
        {
          !userState?.isAuth
          && 
          <Link to='/login'>
            <button className={`${styles.mainBtn} ${styles.navItemsFont}`}>
              Login
            </button>
          </Link>
          || <AccountPill />
        }
      </nav>
    </header>
  );
};

export default NavBar;