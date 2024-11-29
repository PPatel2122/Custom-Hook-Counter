import React from 'react'

import './App.css'
import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'

function App() {

  return (
    <>
    <h1>UseCustomHook</h1>
    <h2>This app is made to demonstrate the custom hook counter, it is defiened by the user and can be used on the multiple places. over here hook made to perform the counter work, and used on the two different components. </h2>
      <FirstComponent/>
      <SecondComponent/>      
    </>
  )
}

export default App
