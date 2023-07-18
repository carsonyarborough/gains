import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Workout from './Pages/Workout';

function App() {
  return (
    <><Router>

      <Routes>
        <Route path="/" />
        <Route path="/workout" element={<Workout />} />
      </Routes>
    </Router>
      <div className="App">
        <p className="My-Header">
          Choose pre planned workout
        </p>
        <a href="/workout"><button>
          Legs
        </button></a>
        <a href="/workout"><button>
          Push
        </button></a>
        <a href="/homepage"><button>
          Home
        </button></a>
        <a href="/workout"><button>
          Pull
        </button></a>
        <a href="/workout"><button>
          Core
        </button></a>
      </div></>
  );
}

export default App;
