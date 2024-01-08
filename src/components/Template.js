import styles from '../styles/Template.module.css';
import logo from '../assets/journalLogo.png';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


const Template = () => {

    const[date, setDate] = useState('');
    const[gratitude, setGratitude] = useState('');
    const[anticipation, setAnticipation] = useState('');
    const[accomplishment, setAccomplishment] = useState('');

    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
         const entry = {date, gratitude, anticipation, accomplishment};
        
        fetch('http://localhost:5000/entries' , {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(entry)
        })
        .then(() =>{
            console.log('new blog added, yey!')
            alert("Entry added")
        })
        .catch(err => {
            console.error('Error:', err);
        });

        history.push('/Entries')
    }
    
    

    return ( 
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.title} >
                        <div>
                            <div className={styles.LogoContainer} >
                                <img src={logo} alt="Logo" className={styles.logo}/>
                                <h2>GRATITUDE</h2>
                            </div>
                            <h2 className={styles.subTitle}>Journal</h2>
                            </div>
                        <div className={styles.dateContainer}>
                            <input type="date" className={styles.date}
                            required
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                    </div>
                    <label>
                        <h4>1. Things im grateful for: </h4>
                        <textarea className={styles.textA}
                        required
                        value={gratitude}
                        onChange={(e) => setGratitude(e.target.value)}
                        ></textarea>
                    </label>
                    <label>
                        <h4>2. Things im looking forward to: </h4>
                        <textarea className={styles.textA}
                        required
                        value={anticipation}
                        onChange={(e) => setAnticipation(e.target.value)}
                        ></textarea>
                    </label>
                    <label>
                        <h4>3. Things i accomplished: </h4>
                        <textarea className={styles.textA} 
                        required
                        value={accomplishment}
                        onChange={(e) => setAccomplishment(e.target.value)}
                        ></textarea>
                    </label>
                    <div className={styles.linksContainer}>
                        <Link to='Entries' ><button className={styles.btn}>Home</button></Link>
                        <button className={styles.btn} type='submit'>Add New Entry</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Template;