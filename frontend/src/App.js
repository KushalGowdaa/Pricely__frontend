import './App.css';
import HomePage from './components/HomePage';
import ProductSearch from './components/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
            <div className="App">
                <Routes>
                    {/* Home route */}
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </div>
        </Router>
  );
}

export default App;
