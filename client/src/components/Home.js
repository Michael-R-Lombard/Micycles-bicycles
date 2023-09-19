import React from "react";
import BikeContainerHome from "./BikeContainerHome";

function Home({ bikes }) {
  return (
    <div className="bg-info"> 
      <BikeContainerHome bikes={bikes.slice(0,3)} />
    </div>
  );
}

export default Home;
