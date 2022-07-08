import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import LayoutComponent from './LayoutComponent/LayoutComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LayoutComponent>
      <div class='container-fluid second w-100 h-100'>
        <h1>THIS IS THE SECOND BODY CONTENT</h1>
      </div>
      <div class='container-fluid first w-100 h-100'>
        <h1>THIS IS THE FIRST BODY CONTENT</h1>
      </div>
    </LayoutComponent>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
