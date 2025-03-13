import { useState } from 'react'
import {router} from './Router/Router'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <div className='bg-gray-900'>
      <RouterProvider router={router}/>
      

    </div>
    
  )
}

export default App
