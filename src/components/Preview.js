import { useLocation } from 'react-router-dom';
import styles from '../styles/preview.module.css';
import Navbar from './Navbar';


const Preview = () => {
    const location = useLocation();
    const entry = location.state.detail;
    
    return (         
        <div className={styles.wrapper}>
            <Navbar/>
            <div className={styles.container}>
            <p className={styles.title}>Date : {entry.date}</p>
            <div>
                <div className={styles.TextAreaGrouping}>
                    <p className={styles.title}>Gratitudes:</p>
                    <p className={styles.textarea}>{entry.gratitude}</p>
                </div>
                <div className={styles.TextAreaGrouping}>
                    <p className={styles.title}>Anticipations</p>
                    <p className={styles.textarea}>{entry.anticipation}</p>
                </div>
                <div className={styles.TextAreaGrouping}>
                    <p className={styles.title}>Accomplishments</p>
                    <p className={styles.textarea}>{entry.accomplishment}</p>
                </div>
            </div>
            </div>

        </div>
    );
}
 
export default Preview;