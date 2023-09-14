import React, { useEffect, useState } from "react";
import BikeContainerHome from "./BikeContainerHome";

function Home() {
    const [bikes, setBikes] = useState([]);

    function getBicycles() {
        fetch('/bicycles')
        .then(r=>r.json())
        .then(bicycles => {
            
            setBikes(bicycles.slice(0,3))}) 
      }

      useEffect(() => {
        getBicycles();
      }, []);
    return (
<div>
<BikeContainerHome bikes={bikes}/>
</div>
 );
}

export default Home;