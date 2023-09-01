import styles from '../styles/Entry.module.css'
import Navbar from './Navbar';


const entries = () => {
    return ( 
        <div className={styles.wrapper}>
            <Navbar/>
            <div className={styles.container}>
                <h2 className={styles.header} >All Entries!</h2>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo quia voluptas eos, aperiam nesciunt a vitae in laboriosam, distinctio aliquam sapiente sed voluptate. Deserunt modi similique nostrum eaque sunt?</p>
                </div>
            </div>
        </div>
     );
}
 
export default entries;