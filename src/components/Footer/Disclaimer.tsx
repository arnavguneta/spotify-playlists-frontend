import styles from './Disclaimer.module.css';

export const Disclaimer = () => {
  return (
    <footer>
      <span id={styles.disclaimer}>
        © 2023 - Spotify Stats<br/>
        Spotify Stats is in no way affiliated with Spotify AB.
      </span>
    </footer>

  );
};