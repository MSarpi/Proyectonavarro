import { createBrowserRouter } from "react-router-dom"
import Index from "./views/index/Inicio"
import Ropa from "./views/index/secciones/Ropa"
const router = createBrowserRouter([  
    {
        path: '/',
        element: <Index />,
        // children: [
        //     {
        //         index: true,
        //         element: <Ropa />
        //     }
        // ] 
    }
    ,
    {
        path: '/Ropa',
        element: <Ropa />,
        // children: [
        //     {
        //         path: '/auth/login',
        //         element: <Login />
        //     },
        //     {
        //         path: '/auth/register',
        //         element: <Register />
        //     }
        // ]
    },

])  
 
export default router