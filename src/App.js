import styles from './styles/App.module.css';
import Login from './components/login';
import SignUp from './components/Signup';
import Template from './components/Template';
import Entries from './components/JournalEntries';
import Preview from './components/Preview'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Update from './components/Update';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Switch>
          <Route exact path="/">
          <div className={styles.content}>
            <p className={styles.head} >GRATITUDE JOURNAL</p>
            <h1>CREATING MY</h1>
            <h1 className={styles.sub}>DREAM LIFE</h1>
            <Link to="/Entries"><button className={styles.homeBtn}>Welcome</button></Link>
          </div>
          </Route>
          <Route exact path="/Template">
            <Template/>
          </Route>
          <Route exact path="/Entries">
            <Entries/>
          </Route>
          <Route exact path="/Preview">
            <Preview/>
          </Route>
          <Router exact path="/Update" >
            <Update/>
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
