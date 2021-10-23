import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './components/navbar.component';

function App() {
  return (
    <Router>
      <Navbar>
        
      </Navbar>
      <div className="container-fluid hero-container">
        <div className="hero-image">
          <div className="hero-text">
            <h1>hi</h1>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
