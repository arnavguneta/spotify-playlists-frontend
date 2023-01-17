import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuItems } from '../../../../common/types';

import styles from './Burger.module.css';


export const Burger = ({ items }: MenuItems) => {
  const [showBurger, setShowBurger] = useState(false);
  const toggleBurger = () => {
    setShowBurger(prevState => !prevState);
  };

  return (
    <div id={styles.burgerContainer} onClick={toggleBurger}>
      <MenuIcon></MenuIcon>
      <ul className={
        `${styles['dropdown']} ${styles[`${(showBurger)
          ? 'active' : 'closed'}`]}`
      }>
        {items.map(item =>
          <NavLink key={item} to={(item !== 'Home')
            ? `/${item.toLowerCase()}` : '/'}>
            <li className={styles['item']}>{item}</li>
          </NavLink>
        )
        }
      </ul>
    </div>
  );
};