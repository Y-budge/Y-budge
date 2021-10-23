import './App.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './components/navbar.component';
import Landing from './components/landing.component';
import Login from './components/login.component';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Landing} />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default App;
