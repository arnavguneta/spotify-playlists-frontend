import { NavLink, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

import styles from './SideBar.module.css';
import { basename } from '../../../common/constants';

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className={styles.sidebar}>
        <div className={styles.menuWrapper}>
          <div className={styles.logoContainer} onClick={() => {
            navigate('/');
          }}>
            <div className={styles.logoImg}>
              <img src={`${basename}/images/logo/spotify.svg`} />
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
        </div>
        <div className={styles.playlistWrapper}>
          <ul>
            <li>PL</li>
            <li>PL</li><li>PL</li><li>PL</li><li>PL</li><li>PL</li>
            <li>PL</li><li>PL</li><li>PL</li><li>PL</li><li>PL</li>
            <li>PL</li><li>PL</li><li>PL</li><li>PL</li><li>PL</li>
            <li>PL</li><li>PL</li><li>PL</li><li>PL</li><li>PL</li>
            <li>PL</li><li>PL</li><li>PL</li><li>PL</li><li>PL</li>
            <li>PL</li><li>PL</li><li>PL</li><li>PL</li><li>PL</li>
            <li>PL</li><li>PL</li><li>PL</li><li>PL</li><li>PL</li>
            <li>PL</li><li>PL</li><li>PL</li><li>PL</li><li>PL</li>
            <li>PL</li><li>PL</li><li>PL</li><li>PL</li><li>PL</li>
            <li>PL</li><li>PL</li><li>PL</li><li>PL</li><li>PL</li>
            <li>PL</li><li>PL</li><li>PL</li><li>PL</li><li>PL</li>
            <li>PL</li><li>PL</li><li>PL</li><li>PL</li><li>PL</li>

          </ul>
        </div>
      </nav>
    </>
  );
};

export default SideBar;