import logo from './logo.svg';
import './App.sass';
import './styles/colors.sass'
import { Landing } from './pages/landing';
import { UNRobot } from 'pages/unrobot';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
       <Switch>
          
          <Route path="/unrobot">
            <UNRobot/>
          </Route>
          <Route path="/">
          <Landing/>
          </Route>
        </Switch>
        </Router>
      
    
      
    </div>
  );
}

export default App;
