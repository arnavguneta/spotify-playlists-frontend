import { Link } from 'react-router-dom';
import styles from './Disclaimer.module.css';

export const Disclaimer = () => {
  return (
    <footer className={styles.footer}>
      <span>
        Spotify Stats is in no way affiliated with Spotify AB
      </span>
      <span id={styles.author}>
        Developed by <a href='https://www.linkedin.com/in/arnavguneta/'
          target='_blank'>Arnav Guneta</a>
      </span>
      <span>
        <Link to='/privacy'>Privacy Policy</Link><br />
        <Link to='/terms'>Terms of Service</Link>
      </span>
    </footer>

  );
};