import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import contact from './pages/Contact';
import login from './pages/login';
import './App.css';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" component={login} />
      <Route path="/contact" component={contact} />
    </Routes>
  </Router>
  );
}

export default App;
