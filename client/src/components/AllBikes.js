import React, { useEffect, useState } from "react";
import BikeForm from "./BikeForm";
import BikeContainer from "./bike Container";




function AllBikes (){
  const [showForm, setShowForm] = useState(false);
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
    //   console.log(bicycles)

    function handleClick() {
      setShowForm((showForm) => !showForm);
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
        <div>
            <h1>All Bicycles</h1>
            {showForm ? (
          <BikeForm onAddBike={handleAddBike} setShowForm={setShowForm} />
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
        )} 
        </div>
    )
}

export default AllBikes;