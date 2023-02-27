
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './containers/Home/Home';
import Books from './containers/Books/Books';
import BooksDetails from './containers/BooksDetails/BooksDetails.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Books />} />
          <Route path="/" element={<BooksDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
