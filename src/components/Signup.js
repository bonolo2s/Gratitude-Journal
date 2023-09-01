import styles from '../styles/signup.module.css';
import { Link } from 'react-router-dom';

const signUp = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className={styles.container}>
            <h1 className={styles.title}>Gratitude Journal</h1>
            <h1 className={styles.title}>Sign Up</h1>
                <div className={styles.names} >
                    <div>
                        <label htmlFor="First Name"></label>
                        <input type="text" placeholder='First Name' id='First Name'  className={styles.name} />
                    </div>
                    <div>
                        <label htmlFor="Last Name"></label>
                        <input type="text" placeholder='Last Name' id='Last Name'  className={styles.name} />
                    </div>
                </div>
                <div>
                    <label htmlFor="email"></label>
                    <input type="email" placeholder='Your@email.com' required id='email' className={styles.email}/>
                </div>
                <div>
                    <label htmlFor="Password"></label>
                    <input type="password" placeholder='Password' id='Password' className={styles.password} />
                </div>
                <div>
                    <label htmlFor="ConfirmPassword"></label>
                    <input type="password" placeholder='Confirm Password' id='ConfirmPassword' className={styles.password} />
                </div>
                <div>
                    <input type="radio" id='agreement' />
                    <label htmlFor="agreement">I agree with the Privacy and Policy</label>
                </div>
                <p>By creating an account you agree to our <a href="#">Terms and Conditions</a> </p>
                <button className={styles.create}>Create Free Account</button>
                <hr />
            <p>already have an account?</p>
            <Link to="/login"> <button className={styles.lgn}>Log In</button></Link>
            </div>
        

        </div>
     );
}
 
export default signUp;