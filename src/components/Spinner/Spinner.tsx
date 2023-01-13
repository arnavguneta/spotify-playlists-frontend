import { ClipLoader } from 'react-spinners';
import styles from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <ClipLoader color="#1DB954" />
    </div>
  );
};

export default Spinner;