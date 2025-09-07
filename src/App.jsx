import { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Registration from './components/Registration';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';





function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}

      {/* Routes */}
      <Routes>
        <Route path="/components/Registration" element={<Registration />} />
        <Route path="/components/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App
