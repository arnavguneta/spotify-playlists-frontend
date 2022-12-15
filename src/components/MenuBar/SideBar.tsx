import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

import styles from './SideBar.module.css';

const SideBar = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  return (
    <>
      {/* <header>
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
              <li><NavLink to='/profile'>Profile</NavLink></li>
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
      </header> */}
      <nav className={styles.sidebar}>
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
        <div className={styles.logoSeparator} />
        <div className={styles.navContainer}>
          <ul className={`${styles.navItems} ${styles.navItemsFont}`}>
            <li>
              <NavLink to='/'>
                <HomeIcon className={styles.sidebarIcon} />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/library'>
                <LibraryMusicIcon className={styles.sidebarIcon} />
                Library
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default SideBar;