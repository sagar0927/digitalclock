import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import HomeScreen from './HomeScreen';
import reportWebVitals from './reportWebVitals';
import './assets/styles/styles.css';
import Footer from './Footer';
import Navbar from './Navbar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomeScreen />
    <Navbar />
    <Footer/>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
