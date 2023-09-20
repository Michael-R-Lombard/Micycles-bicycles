import React, { useState } from "react";
import BikeForm from "./BikeForm";
import BikeCard from "./BikeCard";
import { useHistory } from "react-router-dom";

function AllBikes({ bikes, setBikes }) {
  const history = useHistory();
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    history.push("/create_bicycle");
  }

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
    <div className="bg-info">
      <h1 className="bg-info text-center">All Bicycles</h1>
      {showForm ? (
        <BikeForm onAddBike={handleAddBike} setShowForm={setShowForm} />
      ) : (
        <>
          <div className="buttonContainer d-flex justify-content-center">
            <button
              className="btn btn-success text-white"
              onClick={handleClick}
            >
              Add a Bike
            </button>
          </div>
          {bikes.map((bike) => (
            <BikeCard
              key={bike.id}
              bike={bike}
              donate={true}
              onDeleteBike={handleDeleteBike}
              onUpdateBike={handleUpdateBike}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default AllBikes;
