import { NavLink, Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

import styles from './SideBar.module.css';
import { basename } from '../../../common/constants';
import { Separator } from '../../UI/Misc/Separator';

const SideBar = ({ toggle }: { toggle: boolean }) => {
  console.log('rerendered sidebar');
  return (
    <div className={`${toggle ? styles.closed : ''}`}>
      <nav className={styles.sidebar}>
        <div className={styles.menuWrapper}>
          <div className={styles.logoContainer}>
            <div className={styles.logoImg}>
              <Link to='/'>
                <img src={`${basename}/images/logo/spotify.svg`} />
              </Link>
            </div>
            <div className={styles.logo}>
              <Link to='/'><span>STATS</span></Link>
            </div>
          </div>
          <Separator width='95%' />
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
          <Separator width='95%' />
        </div>
        <div className={styles.playlistWrapper}>
          <ul>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;