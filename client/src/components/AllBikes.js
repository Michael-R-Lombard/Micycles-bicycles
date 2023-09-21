import React, { useState } from "react";
import BikeForm from "./BikeForm";
import BikeCard from "./BikeCard";
import { useHistory } from "react-router-dom";

function AllBikes({ bikes, onAddBike, onDeleteBike, onUpdateBike }) {
  const history = useHistory();
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    history.push("/create_bicycle");
  }

  return (
    <div className="bg-info">
      <h1 className="bg-info text-center">All Bicycles</h1>
      {showForm ? (
        <BikeForm onAddBike={onAddBike} setShowForm={setShowForm} />
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
              onDeleteBike={onDeleteBike}
              onUpdateBike={onUpdateBike}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default AllBikes;
