import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './Components/Details';
import Loging from './Components/Loging';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <nav>
          <Link to="login">Login</Link>
          <Link ro="details">Details</Link>
        </nav>
        <Routes>
          <Route path='/Login' element={<Loging/>}></Route>
          <Route path='/Details' element={<Details/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
