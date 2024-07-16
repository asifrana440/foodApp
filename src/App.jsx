import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Success from './Pages/Success';
import Error from './Pages/Error';
import ProtectedRoute from './Compontens/ProtectedRoute';

const App = () => {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
     <Route
          path="/success"
          element={<ProtectedRoute element={<Success />} />}
        /> 
        <Route path="/*" element={<Error/>} /> // orginal page k ilwa koi b type kro gy error page aya ga
      </Routes>
    </BrowserRouter>
  )
}

export default App