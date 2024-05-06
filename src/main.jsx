import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import router from './router'
import './index.css'
import './estilos/Style_Navbar.css'
import './estilos/StyleHeader.css'
import './estilos/StyleServicios.css'
 
import './views/configManual/navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
