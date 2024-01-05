import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css';

const navbar = () => {
    return ( 
        <div>
            <div className={styles.headerWrapper}>
                <div className={styles.header}>
                    <h2 className={styles.title}>My Journal Entries</h2>
                    <div style={{display:'flex'}}>
                        <Link to='Template' className={styles.links} ><button className={styles.btn}>New Entry</button></Link>
                        <Link to='Entries' ><button className={styles.btn}>Home</button></Link>
                    </div>
                </div>
                <hr />
            </div>
            
      </div>
     );
}
 
export default navbar;