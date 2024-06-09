import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Routes , Route}from 'react-router-dom';
import Home from "./Pages/Home.js"
import Login from "./Pages/Login.js"
import Registration from './Pages/Registration.js';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/Registration' element={<Registration/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
