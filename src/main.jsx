import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import DetailPage from './Detail.jsx';
import Data from './Data.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import{
    createBrowserRouter,
    RouterProvider

} from 'react-router-dom'
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/about',
                element:<About/>

            },
            {
                path: '/songs/:songId',
                element: <DetailPage/>
            },
            {
                path:'/songs',
                element:<Data/>
            }
        ]


    }
])




ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)

















// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
//
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
