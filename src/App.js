import './App.css';
//import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { store } from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/Expense-Tracker' element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
}


export default App;