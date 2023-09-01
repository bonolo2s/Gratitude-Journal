import styles from '../styles/login.module.css';
import { Link } from 'react-router-dom';


const login = () => {
    return (          
        <div className={styles.wrapper}>
            
            <div className={styles.container}>
            <h1 className={styles.title}>Gratitude Journal</h1>
            <h1 className={styles.title}>Login</h1>
                <div>
                    <label htmlFor="email"></label>
                    <input type="email" name='Email' placeholder='your@email.com' id='email' className={styles.email}/>
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="password" name='Email' placeholder='Password' id='password' className={styles.password} />
                </div>
                <div className='linkContainer'>
                <a href="#" className={styles.lgnLink}>Forgot Password?</a>
                </div>
                <button className={styles.lgn}>Login</button>
                <Link to="/Entries"><button>View Demo</button></Link>

            </div>
            
        </div>
 
    );
}
 
export default login;