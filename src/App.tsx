import React from 'react';
import './App.css';
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <main className="form-signin">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
