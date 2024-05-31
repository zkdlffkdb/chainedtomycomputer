import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Homepage, Prologue, Chapter1, Chapter2, Chapter3, Epilogue, Chapter1EducationalPage } from './components/pages/index.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/prologue" element={<Prologue />} />
          <Route path="/chapter_1" element={<Chapter1 />} />
          <Route path="/chapter_2" element={<Chapter2 />} />
          <Route path="/chapter_3" element={<Chapter3 />} />
          <Route path="/epilogue" element={<Epilogue />} /> 
          <Route path="/chapter1educationalpage" element={<Chapter1EducationalPage />} />       
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
