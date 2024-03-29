import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material';
import styles from './Collapse.module.css';

export const Collapse = ({ toggle, handleToggle }: 
  { toggle: boolean, handleToggle: () => void }) => {
  return (
    <div id={styles.container} onClick={handleToggle} title='Collapse Sidebar'>
      {toggle && <ArrowCircleRight /> || <ArrowCircleLeft />}
      {/* eslint-disable-next-line max-len */}
      {/* <svg className={`${toggle ? styles.toggle : ''}`} width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.29,11.29a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l3,3a1,1,0,0,0,1.42-1.42L11.41,13H15a1,1,0,0,0,0-2H11.41l1.3-1.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.42,0ZM2,12A10,10,0,1,0,12,2,10,10,0,0,0,2,12Zm18,0a8,8,0,1,1-8-8A8,8,0,0,1,20,12Z"></path></svg> */}
    </div>
  );
};