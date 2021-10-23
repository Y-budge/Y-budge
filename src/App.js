import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './components/navbar.component';

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar>
          
        </Navbar>
      </Router>
    </div>
  );
}

export default App;
