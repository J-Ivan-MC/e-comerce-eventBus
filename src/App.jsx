import { useState } from 'react';
import Home from './Pages/Home'
import  Cart  from './Pages/CartPage'
 
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
  Route
} from 'react-router-dom'
 
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={'/'} element={<Root/>}>
        <Route path={'/cart'} element={<Cart/>}/>
      </Route>
    )
  )
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}
 
export default App;
const Root = () =>{
  return(
    <Home/>
    
  )
}
