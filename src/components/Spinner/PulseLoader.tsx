import { PulseLoader } from 'react-spinners';
import styles from './Spinner.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <PulseLoader color="#1DB954" />
    </div>
  );
};

export default Loader;