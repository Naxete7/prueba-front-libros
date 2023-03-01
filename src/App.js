
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './containers/Home/Home';
import Books from './containers/Books/Books';
import Designing from './containers/BooksDetails/Designing';
import Git from "./containers/BooksDetails/Git";
import You from "./containers/BooksDetails/You";
import Understanding from "./containers/BooksDetails/Understanding";
import Programing from "./containers/BooksDetails/Programing";
import Speaking from "./containers/BooksDetails/Speaking";
import Learning from "./containers/BooksDetails/Learning";
import Eloquent from "./containers/BooksDetails/Eloquent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/designing" element={<Designing />} />
          <Route path="/git" element={<Git />} />
          <Route path="/you" element={<You />} />
          <Route path='/understanding' element={<Understanding />} />
          <Route path='/programing' element={<Programing />} />
          <Route path='/speaking' element={<Speaking />} />
          <Route path='/learning' element={<Learning />} />
          <Route path='eloquent' element={<Eloquent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
