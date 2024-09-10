import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NetflixIndex } from './netflix';
import { Login } from './component/login/login';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import { DataBinding } from './component/data-binding/data-bindin';
import { DataBinding2 } from './component/data-binding/data-binding-json';
import { DataBinding3 } from './component/data-binding/data-binding3';
import { StateBinding } from './component/data-binding/state';
import { ApiBinding } from './component/API-data-binding/api';
import { StyleDemo } from './component/style-binding/styledemo';
import { ClassBinding } from './component/class-binding/class-binding';
import { EventHandling } from './component/events-handing/event';
import { MouseEvents } from './component/mouse-events/mouse';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Login />
    <DataBinding /> */}
    <DataBinding2 />
    <DataBinding3 /> 
    <StateBinding />
    <ApiBinding />
    <StyleDemo />
    <ClassBinding />
    <EventHandling />
    <MouseEvents />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
