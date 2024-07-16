import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './NormalPages/HomePage/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import these
import { AppProvider } from './Services/context'; // Ensure this import is correct
import BookList from './components/ListBooks/BookList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} > 
          <Route path = "book" element = {<BookList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);

reportWebVitals();
