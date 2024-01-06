import { useEffect, useState } from 'react';
import styles from '../styles/Entry.module.css'
import Navbar from './Navbar';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Entries = () => {
    const [Entries, setEntries]=useState(null);
    const [selectedEntry, setSelectedEntry] = useState(null);
    const [quote, setQuote] = useState(null);


    useEffect(() =>{
        fetch('http://localhost:5000/entries')//updated code to tell BE to fetch data on render.
        .then(res =>{
            if (!res.ok) { // Check if response is ok
                throw Error('Could not fetch data');
            }
            return res.json();
        })
        .then(data => {
            setEntries(data)
        })
        .catch(err => {
            console.error(err)
        });
    }, [Entries]);

    useEffect(() => {
        fetch('/api/quote/')
            .then(res => {
                //console.log(res)
                if (!res.ok) {
                    throw Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                console.log(data)
                setQuote(data.quote); // Adjust this based on the API's response structure
            })
            .catch(err => {
                console.error('An error occurred while fetching the quote:bonolo', err);
            });
    }, []);

    const handleDelete = (id) =>{
        console.log(id + "here is the ID nolo"); // Add this line
        fetch(`http://localhost:5000/entries/${id}`, {//``and $ actually solved my DataBase problem
            method: 'DELETE',
        })
        .then(() =>{
            setEntries(Entries.filter(item => item._id !== id));
        })
    }



    return ( 
        <div className={styles.wrapper}>
            <Navbar/>
            <h2 className={styles.Header}>Welcome Home😊</h2>
            <div className={styles.container}>
                <h2 className={styles.header} >All Entries!</h2>
                {Entries && Entries.map((entry)=>(
                    <div className={styles.preview} key={entry._id}>
                        <Link className={styles.link} to={{                            
                            pathname: "Preview",
                            state: {detail: entry}}}
                        >
                        <div>
                            <p>Grateful for:{ entry.gratitude}</p>
                            <p>{ entry.date}</p>
                        </div>
                        </Link>
                        <div><button onClick={() => handleDelete(entry._id)}>Delete</button></div>
                    </div>
                ))}
            </div>
            <div className={styles.api}>
                {quote && <p>{quote}</p>}
            </div>
                
        </div>
     );
}
 
export default Entries;         