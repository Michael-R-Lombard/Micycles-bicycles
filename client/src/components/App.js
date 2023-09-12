import React, { useEffect, useState } from "react";
import { Switch, Route, Routes } from "react-router-dom";
import AllBikes from "./AllBikes";
import NavBar from "./NavBar"

function App() {
  return (
  
  <div>
    <NavBar />
    <h1>Micycle's Bicycles</h1>
    <Route exact path='/bicycles'>
        <AllBikes />
    </Route>
     
      

      
    </div>
  )
}

export default App;
