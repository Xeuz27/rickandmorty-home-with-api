import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app';
import Character from './components/character';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <React.StrictMode>
      <Router>
       <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Character/:id" element={<Character />}/>
          <Route
              path="*"
              element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
                </main>
              }
          />
        </Routes>
     </Router>
  </React.StrictMode>
);



