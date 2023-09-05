import { useState } from 'react';
import styles from '../styles/Entry.module.css'
import Navbar from './Navbar';


const Entries = () => {
    const [Entries, setEntries]=useState([
        {Gratitude:'finally learned coding on my own',Antitcipatioin:'Be a Super Star',Accomplishments:'Time to ',Date:'06/05/2023', id:'1'},
        {Gratitude:'finally learned coding on my own',Antitcipatioin:'Be a Super Star',Accomplishments:'Time to scare ',Date:'06/05/2023',  id:'2'},
        {Gratitude:'finally ',Antitcipatioin:'Be a Super Star',Accomplishments:'Time to scare them',Date:'06/05/2023',  id:'3'}
    ])
    return ( 
        <div className={styles.wrapper}>
            <Navbar/>
            <div className={styles.container}>
                <h2 className={styles.header} >All Entries!</h2>
                {Entries.map((Entries)=>(
                    <div className={styles.preview} key={Entries.id}>
                        <div>{ Entries.Gratitude}</div>
                        <div>{ Entries.Date}</div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Entries;