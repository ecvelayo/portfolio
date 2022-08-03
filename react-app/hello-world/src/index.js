import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import LayoutComponent from './LayoutComponent/LayoutComponent';
import AppHeader from './AppHeader/AppHeader';
import AppFooter from './AppFooter/AppFooter';
import TodoList from './TodoList/TodoList';


class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<LayoutComponent></LayoutComponent>}></Route>
            {/* <Route path="header" element={<AppHeader></AppHeader>}></Route> */}
            <Route path="/tasks" element={<TodoList/>}></Route>
            <Route path="/:username" element={<AppHeader/>}></Route>
            <Route path="*" element={<AppFooter></AppFooter>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
