import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {


  return (<>  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/login" element={<div>Login</div>} />
        <Route path="/register" element={<div>Register</div>} />
        <Route path="/dashboard" element={<div>Dashboard</div>} />
        <Route path="/Navbar" element={<Navbar/>} />
      </Routes>
    </BrowserRouter>
  
  </>
  )}

export default App
