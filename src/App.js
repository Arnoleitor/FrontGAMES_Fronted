import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import Home from './Containers/Home/Home.jsx';
import Admin from './Containers/Admin/Admin.jsx';
import Post from './Containers/Post/Post.jsx';
import Login from './Containers/Login/Login.jsx';
import Profile from './Containers/Profile/Profile.jsx';
import Register from './Containers/Register/Register';


function App() {
    return (
      <div className="App">
  
        <BrowserRouter>
        <Header/>
          <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/Admin" element={<Admin/>}/>
          <Route path="/Post" element={<Post/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/Register" element={<Register/>}/>
       
          </Routes>
        
        </BrowserRouter>
        
        
      </div>
    );
  }
  
  export default App;
  