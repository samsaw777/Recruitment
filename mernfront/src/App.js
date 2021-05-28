import './App.css';
import Recruitment from './Components/Recruitment'
import Admin from './Components/Adminpanel'
import User from './Components/Userinfo'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        {/* <Recruitment /> */}
        <Switch>
          <Route exact path="/" component={Admin} />
          <Route exact path="/userinfo/:id" component={User} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
