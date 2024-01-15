import { useEffect, useState } from 'react';
import styles from '../styles/Entry.module.css'
import Navbar from './Navbar';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import moment from 'moment';


const Entries = () => {
    const [Entries, setEntries]=useState(null);
    const [selectedEntry, setSelectedEntry] = useState(null);
    const [quote, setQuote] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() =>{
        fetch('http://170.64.177.128/entries')//updated code to tell BE to fetch data on render.
        .then(res =>{
            if (!res.ok) { // Check if response is ok
                throw Error('Could not fetch data');
            }
            return res.json();
        })
        .then(data => {
            setEntries(data)
            setIsLoading(false);
        })
        .catch(err => {
            console.error(err)
            setIsLoading(false);
        });
    }, [Entries]);


    const handleDelete = (id) =>{
        console.log(id + "///here is the ID nolo"); // Add this line
        fetch(`http://170.64.177.128/entries/${id}`, {//``and $ actually solved my DataBase problem
            method: 'DELETE',
        })
        .then(response => {
            // Log the raw response
            console.log('Raw response:', response);
        
            if (!response.ok) {
                return response.text().then(error => {
                    throw new Error(`Error during delete: ${error}`);
                });
            }
            return response.json();
        })
        .then(() =>{
            setEntries(Entries.filter(item => item._id !== id));
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    if (isLoading) {
        return <div style={{fontSize:'2rem',textAlign:'center'}} >Loading...</div>;
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
                            state: {detail: entry}}}// here we are telling Link to carry our data obj from 1 comp to another..just like with params on URLs
                        >
                        <div className={styles.previewText} >
                            <p style={{fontWeight:'bold'}} >Grateful for: <span style={{fontWeight:'normal'}} >{ entry.gratitude}</span> </p>
                            <p style={{fontWeight:'bold'}} >{moment(entry.date).format('YYYY-MM-DD')}</p>
                        </div>
                        </Link>
                        <div className={styles.previewBtn} ><button onClick={() => handleDelete(entry._id)} style={{padding:'2px', borderRadius:'5px', border:'none', cursor:'pointer'}}  >Delete</button></div>
                    </div>
                ))}
            </div>
                
        </div>
     );
}
 
export default Entries;         