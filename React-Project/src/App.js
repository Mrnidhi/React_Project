import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './uauthcomp/UnHomepage';
import RegisterFrom from './uauthcomp/register_page';
import LoginP from './uauthcomp/login_page';
import AuthHom from './Authcomp/AuthHP';
import UnHomePage from './uauthcomp/UnHomepage';


function App() {
  return (
  
      
      <BrowserRouter>
      
       <Routes>
       <Route path="/unauthhome" element={<UnHomePage/>} />
        <Route path="/authhome" element={<AuthHom/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginP/>} />
        <Route path="/register" element={<RegisterFrom/>} />
      </Routes>

      </BrowserRouter>
    
  );
}

export default App;
