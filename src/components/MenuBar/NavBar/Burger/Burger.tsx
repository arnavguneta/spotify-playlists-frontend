import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuItems } from '../../../../common/types';
import { Dropdown } from '../../../UI/Dropdown/Dropdown';

import styles from './Burger.module.css';

export const Burger = ({ items }: MenuItems) => {
  const [showBurger, setShowBurger] = useState(false);
  
  const toggleBurger = () => {
    setShowBurger(prevState => !prevState);
  };

  return (
    <div id={styles.burgerContainer} onClick={toggleBurger}>
      <MenuIcon id={styles.menu}></MenuIcon>
      <Dropdown items={items} show={showBurger} toggle={toggleBurger} 
        style={{left: '1.5rem'}}/>
    </div>
  );
};