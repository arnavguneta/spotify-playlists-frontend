import { NavLink, useNavigate } from 'react-router-dom';

import styles from './MenuBar.module.css';

const MenuBar = () => {
  const navigate = useNavigate();
  const onHomeClick = () => {
    navigate('/');
  };

  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer} onClick={onHomeClick}>
          <div className={styles.logoImg}>
            <img src='/images/logo/spotify.svg' />
          </div>
          <div className={styles.logo}>
            <span>Stats</span>
          </div>
        </div>
        <div className={styles.navList}>
          <ul className={styles.navItems}>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/profile'>Profile</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/logout'>Logout</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MenuBar;