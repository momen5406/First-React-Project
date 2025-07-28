import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "@fortawesome/fontawesome-free/css/all.min.css"

import Home from './Components/Home/Home';
import About from './Components/About/About';
import Layout from './Components/Layout/Layout';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {

  const x = createBrowserRouter([
    {path: "/", element: <Layout />, children: [
      {index: true, element: <Home />},
      {path: "about", element: <About />},
      {path: "portfolio", element: <Portfolio />},
      {path: "contact", element: <Contact />},
    ]},
  ])

  return <RouterProvider router={x}></RouterProvider>
}

export default App
