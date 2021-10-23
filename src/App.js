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
            <h1>Y Budge</h1>
            <p>Keep your spending responsible with automatic social media posts when you go out</p>
            <button type="button" class="btn btn-outline-light">Read More</button>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
