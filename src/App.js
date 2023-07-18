import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Legs from './Pages/Legs';
import Push from './Pages/Push';
import Pull from './Pages/Pull';
import Core from './Pages/Core';

function App() {
  return (
    <><Router>

      <Routes>
        <Route path="/" />
        <Route path="/legs" element={<Legs />} />
        <Route path="/push" element={<Push />} />
        <Route path="/pull" element={<Pull />} />
        <Route path="/core" element={<Core />} />
      </Routes>
    </Router>
      <div className="App">
        <p className="My-Header">
          Choose pre planned workout
        </p>
        <a href="/legs"><button>
          Legs
        </button></a>
        <a href="/push"><button>
          Push
        </button></a>
        <a href="/homepage"><button>
          Home
        </button></a>
        <a href="/pull"><button>
          Pull
        </button></a>
        <a href="/core"><button>
          Core
        </button></a>
      </div></>
  );
}

export default App;
