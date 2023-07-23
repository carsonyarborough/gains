import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Workout from './Pages/Workout';
import Home from './Pages/Home';

function App() {
  return (
    <><Router>

      <Routes>
        <Route path="/"/>
        <Route path="/home" element={<Home />} />
        <Route path="/workout" element={<Workout />} />
   
      </Routes>
    </Router>
    </>
  );
}

export default App;
