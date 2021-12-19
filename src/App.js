import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import Home from './Containers/Home/Home.jsx';
import Admin from './Containers/Admin/Admin.jsx';
import Wall from './Containers/Wall/Wall.jsx';

function App() {
    return (
      <div className="App">
  
        <BrowserRouter>
        <Header/>
          <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/Admin" element={<Admin/>}/>
          <Route path="/Wall" element={<Wall/>}/>
       
          </Routes>
        
        </BrowserRouter>
        
        
      </div>
    );
  }
  
  export default App;
  