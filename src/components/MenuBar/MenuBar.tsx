import { NavLink } from 'react-router-dom';

import styles from './MenuBar.module.css';

const MenuBar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logoContainer}>
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


        </div>
    );
};

export default MenuBar;