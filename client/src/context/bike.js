import React, { useState } from "react";

const BikeContext = React.createContext();

function BikeProvider({ children }) {
  const [bikes, setBikes] = useState([]);

  return (
    <BikeContext.Provider value={{ bikes, setBikes }}>
      {children}
    </BikeContext.Provider>
  );
}

export { BikeContext, BikeProvider };
