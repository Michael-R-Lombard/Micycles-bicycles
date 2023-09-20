import React from "react";
import BikeCard from "./BikeCard";

function Home({ bikes, onDeleteBike, onUpdateBike }) {
  return (
    <div className="bg-info">
      <div id="bike-collection">
        {bikes.map((bike) => (
          <BikeCard
            key={bike.id}
            bike={bike}
            donate={false}
            onDeleteBike={onDeleteBike}
            onUpdateBike={onUpdateBike}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
