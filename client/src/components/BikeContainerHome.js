import React from "react";
import BikeCard from "./BikeCard";

function BikeContainerHome({ bikes }) {
  const bikeCards = bikes.map((bike) => (
    <BikeCard
      key={bike.id}
      bike={bike}
      
    />
  ));

  return <div id="bike-collection">{bikeCards}</div>;
}

export default BikeContainerHome;