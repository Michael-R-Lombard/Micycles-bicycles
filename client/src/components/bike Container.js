import React from "react";
import BikeCard from "./BikeCard";

function BikeContainer({ bikes, onDeleteBike, onUpdateBike }) {
  const bikeCards = bikes.map((bike) => (
    <BikeCard
      key={bike.id}
      bike={bike}
      onDeleteBike={onDeleteBike}
      onUpdateBike={onUpdateBike}
    />
  ));

  return <div id="bike-collection">{bikeCards}</div>;
}

export default BikeContainer;