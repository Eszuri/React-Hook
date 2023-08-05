import React from 'react'
import './style.css'
import { Route, Routes } from 'react-router-dom'
import Root from './Root'
import UseState from './components/useState/UseState';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Root />} />
        <Route path='/usestate' element={<UseState />} />
      </Routes>
    </>
  )
}

export default App