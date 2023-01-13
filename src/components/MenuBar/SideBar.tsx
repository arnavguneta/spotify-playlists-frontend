import { NavLink, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

import styles from './SideBar.module.css';

const SideBar = () => {
  const navigate = useNavigate();

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
            </ul>
          </div>
        </nav>
      </header> */}
      <nav className={styles.sidebar}>
        <div className={styles.logoContainer} onClick={() => {
          navigate('/');
        }}>
          <div className={styles.logoImg}>
            <img src='./images/logo/spotify.svg' />
          </div>
          <div className={styles.logo}>
            <span>STATS</span>
          </div>
        </div>
        <div className={styles.separator} />

        <ul className={`${styles.navItems} ${styles.navItemsFont}`}>
          <li>
            <NavLink to='/'>
              <HomeIcon className={styles.sidebarIcon} />
              <p>Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink to='/library'>
              <LibraryMusicIcon className={styles.sidebarIcon} />
              <p>Library</p>
            </NavLink>
          </li>
        </ul>
        <div className={styles.separator} />
      </nav>
    </>
  );
};

export default SideBar;