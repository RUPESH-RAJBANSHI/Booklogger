import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/Login';
import RegisterPage from './Pages/Register';

import Navbar from './components/Navbar';

function App() {


  return (<>  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/Login" element={<LoginPage/>} />
        <Route path="/Register" element={<RegisterPage/>} />
        <Route path="/dashboard" element={<div>Dashboard</div>} />
        <Route path="/Navbar" element={<Navbar/>} />
      </Routes>
    </BrowserRouter>
  
  </>
  )}

export default App
