import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { createBrowserRouter,RouterProvider } from 'react-router-dom';
// import Contact from './components/Contact';
// import About from './components/About';


// const appRouter = createBrowserRouter([
//   {
//     path:"/",
//     element:<App/>
//   },
//   {
//     path:"/about",
//     element :<About/>
//   },
//   {
//     path:"/contact",
//     element :<Contact/>
//   }
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<RouterProvider routerr = {appRouter}/>);
root.render(<App/>);
