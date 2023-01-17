import { Link } from 'react-router-dom';
import { DropdownSettings } from '../../../common/types';

import styles from './Dropdown.module.css';

export const Dropdown = ({ items, toggle, show, style }: DropdownSettings) => {
  return (
    <ul style={style} onClick={toggle} className={
      `${styles.dropdown} ${styles[`${(show)
        ? 'active' : 'closed'}`]}`
    }>
      {items.map(item =>
        <Link key={item} to={(item !== 'Home')
          ? `/${item.toLowerCase()}` : '/'}>
          <li className={`${styles.item} ${(item === 'Logout')
            ? styles.red : ''}`} onClick={toggle}>{item}</li>
        </Link>
      )}
    </ul>
  );
};