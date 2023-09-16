import React, { useEffect, useState } from "react";
import { Switch, Route, Routes } from "react-router-dom";
import AllBikes from "./components/AllBikes";
import NavBar from "./components/NavBar";
import BikeForm from "./components/BikeForm";
import Home from "./components/Home";
import UserLogin from "./components/UserLogin";
import CreateAccount from "./components/CreateAccount";

function App() {
  const [bikes, setBikes] = useState([]);

  function getBicycles() {
    fetch("/bicycles")
      .then((r) => r.json())
      .then((bicycles) => setBikes(bicycles));
  }

  useEffect(() => {
    getBicycles();
  }, [bikes]);

  function handleAddBike(newBike) {
    setBikes([...bikes, newBike]);
  }

  return (
    <div>
      <NavBar />
      <h1>Micycle's Bicycles</h1>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/bicycles">
        <AllBikes bikes={bikes} setBikes={setBikes} />
      </Route>
      <Route exact path="/create_bicycle">
        <BikeForm bikes={bikes} setBikes={setBikes} onAddBike={handleAddBike} />
      </Route>
      <Route exact path="/users">
        <UserLogin />
      </Route>
      <Route exact path="/create_user">
        <CreateAccount />
      </Route>
    </div>
  );
}

export default App;
