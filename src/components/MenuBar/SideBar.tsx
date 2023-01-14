import { NavLink, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

import styles from './SideBar.module.css';

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className={styles.sidebar}>
        <div className={styles.logoContainer} onClick={() => {
          navigate('/');
        }}>
          <div className={styles.logoImg}>
            {/* eslint-disable-next-line max-len */}
            <img src={`${process.env.REACT_APP_ASSETS || ''}/images/logo/spotify.svg`} />
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