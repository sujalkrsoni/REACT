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
import { DisplayContainer } from './component/mouse-events/mouse2';
import { TouchMove } from './component/mouse-events/touchmove';
import { KeyboardEvent } from './component/mouse-events/keyboard';
import { LoginValidation } from './component/mouse-events/passwordvalidation.jsx';
import { CopyPaste } from './component/mouse-events/copy-paste.jsx';
import { FormDemo } from './component/mouse-events/form.jsx';
import { Form } from './component/form/formdemo.jsx';
import { Formik } from './component/form/formikdemo.jsx';
import { FormikForm } from './component/form/formikform.jsx';
import { HookDemo } from './component/form/hookfrom.jsx';
import { Debounce } from './component/debouncing/debounce.jsx';
import { ContextDemo } from './component/context-demo/context.jsx';
import { ReducerDemo } from './component/reducer demo/reducer.jsx';
import { Register } from './component/class component/register/register.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Login />
    <DataBinding />
    <DataBinding2 />
    <DataBinding3 /> 
    <StateBinding />
    <ApiBinding />
    <StyleDemo />
    <ClassBinding />
    <EventHandling />
    <MouseEvents />
    <DisplayContainer />
    <TouchMove />
    <KeyboardEvent />
    <LoginValidation />
    <CopyPaste />
    <FormDemo />
    <Form />
    <Formik />
    <FormikForm />
    <HookDemo />
    <Debounce />
    <ContextDemo /> */}
    {/* <ReducerDemo /> */}
    <Register />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
