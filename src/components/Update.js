import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../styles/Update.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom';

import logo from '../assets/journalLogo.png';



const Update = () => {

    const location = useLocation();
    const history = useHistory();
    const entryId = location.state.detail._id;


    const [date, setDate] = useState('');
    const [gratitude, setGratitude] = useState('');
    const [anticipation, setAnticipation] = useState('');
    const [accomplishment, setAccomplishment] = useState('');

    // Fetch entry data from the server on initial render
    useEffect(() => {
        fetch(`https://170.64.177.128:5000/entries/${entryId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setDate(data.date);
                setGratitude(data.gratitude);
                setAnticipation(data.anticipation);
                setAccomplishment(data.accomplishment);
            })
            .catch(error => {
                console.error('A problem occurred fetching the entry:', error);
            });
    }, [entryId]);

    // Handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedEntry = {
            date,
            gratitude,
            anticipation,
            accomplishment
        };
        fetch(`https://170.64.177.128:5000/entries/${entryId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedEntry),
        });
        alert("Entry updated");
        history.go(-2)
    };

    return ( 
        <div className={styles.wrapper} >
            <div className={styles.container}>
                <form onSubmit={handleSubmit} >
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
                        <button className={styles.btn} button onClick={() => history.goBack()} >Back to Preview</button>
                        <button className={styles.btn} type='submit'>Update</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Update;