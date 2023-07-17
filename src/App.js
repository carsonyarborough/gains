import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <><Router>
      <Route> </Route>
      <Routes path="/" />
      </Router>
      <div className="App">
      <p className="My-Header">
        Choose pre planned workout
      </p>
      <button>
        Legs
      </button>
      <button>
        Push
      </button>
      <button>
        Pull
      </button>
    </div></>
  );
}

export default App;
