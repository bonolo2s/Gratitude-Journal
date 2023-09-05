import styles from '../styles/Template.module.css';
import logo from '../assets/journalLogo.png';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


const Template = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.title} >
                    <div>
                        <div className={styles.LogoContainer} >
                            <img src={logo} alt="Logo" className={styles.logo}/>
                            <h2>GRATITUDE</h2>
                        </div>
                        <h2 className={styles.subTitle}>Journal</h2>
                        </div>
                    <div className={styles.dateContainer}>
                        <input type="date" required className={styles.date}/>
                    </div>
                </div>
                <div>
                    <h4>1. Things im grateful for: </h4>
                    <textarea name="" id="" className={styles.textA}></textarea>
                </div>
                <div>
                    <h4>2. Things im looking forward to: </h4>
                    <textarea name="" id="" className={styles.textA} ></textarea>
                </div>
                <div>
                    <h4>3. Things i accomplished: </h4>
                    <textarea name="" id="" className={styles.textA} ></textarea>
                </div>
                <div className={styles.linksContainer}>
                    <Link ><button className={styles.btn} >Add New Entry</button></Link>
                    <Link to='Entries' ><button className={styles.btn}>Home</button></Link>
                </div>
            </div>
        </div>
     );
}
 
export default Template;