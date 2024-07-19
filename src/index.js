import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/swiper.min.css';


import '../src/assets/css/animate.min.css';
import '../src/assets/css/magnific-popup.css';
import '../src/assets/css/fontawesome-all.min.css';
import '../src/assets/css/flaticon.css';
import '../src/assets/css/odometer.css';

import '../src/assets/css/aos.css';
import '../src/assets/css/default.css';
import '../src/assets/css/main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
