import { Link } from 'react-router-dom';

import styles from './NavBar.module.css';
import { useUserContext } from '../../../hooks/useUserContext';
import { AccountPill } from './Account/AccountPill';
import { Burger } from './Burger/Burger';
import { basename } from '../../../common/constants';

const NavBar = () => {
  const userState = useUserContext();
  const burgerItems = ['Home', 'Library'];
  const accountItems = ['Profile', 'Logout'];

  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.altMenu}>
          <Burger items={burgerItems} />
          <div className={styles.logo}>
            <Link to='/'>
              <img src={`${basename}/images/logo/spotify.svg`} />
            </Link>
          </div>
        </div>
        {
          !userState?.isAuth
          &&
          <Link to='/login'>
            <button className={`${styles.mainBtn} ${styles.navItemsFont}`}>
              Login
            </button>
          </Link>
          || <AccountPill items={accountItems} />
        }
      </nav>
    </header>
  );
};

export default NavBar;