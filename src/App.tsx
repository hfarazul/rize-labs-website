import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HolderPage from './components/HolderPage/HolderPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HolderPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
