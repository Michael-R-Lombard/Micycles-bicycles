import React, { useEffect, useContext } from "react";
import { Route } from "react-router-dom";
import AllBikes from "./components/AllBikes";
import NavBar from "./components/NavBar";
import BikeForm from "./components/BikeForm";
import Home from "./components/Home";
import UserLogin from "./components/UserLogin";
import CreateAccount from "./components/CreateAccount";
import { BikeContext } from "./context/bike";
import WishList from "./components/WishList";

function App() {
  const { bikes, setBikes } = useContext(BikeContext);

  function getBicycles() {
    fetch("/bicycles")
      .then((r) => r.json())
      .then((bicycles) => {
        setBikes(bicycles);
      });
  }

  useEffect(() => {
    getBicycles();
  }, []);

  function handleAddBike(newBike) {
    setBikes([...bikes, newBike]);
  }

  function handleDeleteBike(bikeId) {
    const updatedBikes = bikes.filter((bike) => bike.id !== bikeId);
    setBikes(updatedBikes);
  }

  function handleUpdateBike(updatedBike) {
    const updatedBikes = bikes.map((bike) =>
      bike.id === updatedBike.id ? updatedBike : bike
    );
    setBikes(updatedBikes);
  }

  return (
    <div>
      <h1 className="bg-info text-center">Micycle's Bicycles</h1>
      <NavBar />
      <Route exact path="/">
        <Home
          bikes={bikes}
          onDeleteBike={handleDeleteBike}
          onUpdateBike={handleUpdateBike}
        />
      </Route>
      <Route exact path="/bicycles">
        <AllBikes
          bikes={bikes}
          onAddBike={handleAddBike}
          onDeleteBike={handleDeleteBike}
          onUpdateBike={handleUpdateBike}
        />
      </Route>
      <Route exact path="/create_bicycle">
        <BikeForm onAddBike={handleAddBike} />
      </Route>
      <Route exact path="/users">
        <UserLogin />
      </Route>
      <Route exact path="/create_user">
        <CreateAccount />
      </Route>
      <Route exact path="/wish_list">
        <WishList
          bikes={bikes}
          onDeleteBike={handleDeleteBike}
          onUpdateBike={handleUpdateBike}
        />
      </Route>
    </div>
  );
}

export default App;
