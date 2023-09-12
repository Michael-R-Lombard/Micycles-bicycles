import React, { useEffect, useState } from "react";
import { Switch, Route, Routes } from "react-router-dom";
import AllBikes from "./AllBikes";
import NavBar from "./NavBar"
import BikeForm from "./BikeForm";
import BikeContainer from "./bike Container";
import LoginForm from "./LoginForm";

function App() {
  // const [showForm, setShowForm] = useState(false);
  // const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetch("/bicycles")
      .then((r) => r.json())
      .then();
  }, []);

  // function handleClick() {
  //   setShowForm((showForm) => !showForm);
  // }

  // function handleAddBike(newBike) {
  //   setBikes([...bikes, newBike]);
  // }

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
    <Route exact path='/bicycles'>
        <AllBikes />
   </Route>
    {/* {showForm ? (
          <BikeForm onAddBike={handleAddBike} />
        ) : (
          <>
            <div className="buttonContainer">
              <button onClick={handleClick}>Add a Bike</button>
            </div>
            <BikeContainer
              bikes={bikes}
              onDeleteBike={handleDeleteBike}
              onUpdateBike={handleUpdateBike}
            />
          </>
        )}  */}
    {/* <Route exact path='/users'>
        <LoginForm />
    </Route> */}

     
      

      
    </div>
  )
}

export default App;
