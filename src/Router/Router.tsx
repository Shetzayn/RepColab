import { createBrowserRouter } from 'react-router-dom'
import Home from '../views/Home'
import Discover from '../views/Discover'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/descubrir',
        element: <Discover />, 
    }
])