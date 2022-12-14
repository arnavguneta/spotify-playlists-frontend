import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

import styles from './MenuBar.module.css';

const MenuBar = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer} onClick={() => {
          navigate('/');
        }}>
          <div className={styles.logoImg}>
            <img src='/images/logo/spotify.svg' />
          </div>
          <div className={styles.logo}>
            <span>STATS</span>
          </div>
        </div>
        <div className={styles.navList}>
          <ul className={`${styles.navItems} ${styles.navItemsFont}`}>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/profile'>Playlists</NavLink></li>
            <li><NavLink to='/playlists'>Profile</NavLink></li>
            <button className={`${styles.mainBtn} ${styles.navItemsFont}`}>
              {
                user === null && <NavLink to='/login'>Login</NavLink>
                || <NavLink to='/logout'>Logout</NavLink>
                // TODO: render user component instead of logout link
              }
            </button>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MenuBar;