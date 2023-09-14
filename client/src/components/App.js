import React, { useEffect, useState } from "react";
import { Switch, Route, Routes } from "react-router-dom";
import AllBikes from "./AllBikes";
import NavBar from "./NavBar"
import BikeForm from "./BikeForm";
import BikeContainer from "./BikeContainer";
import LoginForm from "./LoginForm";
import Home from "./Home";
import CreateUser from "./CreateUser";
import CreateAccount from "./CreateAccount";

function App() {
  // const [showForm, setShowForm] = useState(false);
  const [bikes, setBikes] = useState([]);

    // const [bicycles, setBicycles] = useState([]);
    function getBicycles() {
        fetch('/bicycles')
        .then(r=>r.json())
        .then(bicycles => setBikes(bicycles)) 
      }

      useEffect(() => {
        getBicycles();
      }, []);

  // function handleClick() {
  //   setShowForm((showForm) => !showForm);
  // }

  function handleAddBike(newBike) {
    setBikes([...bikes, newBike]);
  }

  // function handleDeleteBike(bikeToDelete) {
  //   const updatedBikes = bikes.filter((bike) => bike.id !== bikeToDelete.id);
  //   setBikes(updatedBikes);
  // }

  // function handleUpdateBike(updatedBike) {
  //   const updatedBikes = bikes.map((bike) =>
  //     bike.id === updatedBike.id ? updatedBike : bike
  //   );
  //   setBikes(updatedBikes);
  // }
  return (

    <div>
      <NavBar />
      <h1>Micycle's Bicycles</h1>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/bicycles'>
        <AllBikes bikes={bikes} setBikes={setBikes}/>
      </Route>
      <Route exact path='/create_bicycle'>
        <BikeForm bikes={bikes} setBikes={setBikes} onAddBike={handleAddBike}/>
      </Route>
      <Route exact path='/users'>
        <CreateUser />
      </Route>
      <Route exact path='/create_user'>
        <CreateAccount />
      </Route>

      {/* <Route exact path='/users'>
        <LoginForm />
    </Route> */}





    </div>
  )
}

export default App;
