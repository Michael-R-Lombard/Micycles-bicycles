import React from "react";
import BikeCard from "./BikeCard";

function BikeContainerHome({ bikes }) {
  const bikeCards = bikes.map((bike) => <BikeCard key={bike.id} bike={bike} className="mb-3"/>);

  return (
    <div id="bike-collection" className="container d-flex flex-row flex-wrap justify-content-start">
      {bikeCards}
    </div>
  );
}

export default BikeContainerHome;
