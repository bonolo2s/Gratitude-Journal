import { useEffect, useState } from 'react';
import styles from '../styles/Entry.module.css'
import Navbar from './Navbar';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Entries = () => {
    const [Entries, setEntries]=useState(null);
    const [selectedEntry, setSelectedEntry] = useState(null);

    useEffect(() =>{
        fetch('http://localhost:8000/entries')
        .then(res =>{
            return res.json();
        })
        .then(data => {
            setEntries(data)
        })
    }, []);

    const handleDelete = (id) =>{
        fetch(`http://localhost:8000/entries/${id}`, {//``and $ actually solved my DataBase problem
            method: 'DELETE',
        })
        .then(() =>{
            setEntries(Entries.filter(item => item.id !== id));
        })
    }



    return ( 
        <div className={styles.wrapper}>
            <Navbar/>
            <div className={styles.container}>
                <h2 className={styles.Header}>Welcome Home😊</h2>
                <h2 className={styles.header} >All Entries!</h2>
                {Entries && Entries.map((entry)=>(
                    <div className={styles.preview} key={entry.id}>
                        <Link className={styles.link} to={{                            
                            pathname: "Preview",
                            state: {detail: entry}}}
                        >
                        <div>Grateful for:{ entry.gratitude}
                            <div>{ entry.date}</div>
                        </div>
                        </Link>
                        <div><button onClick={() => handleDelete(entry.id)}>Delete</button></div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Entries;         