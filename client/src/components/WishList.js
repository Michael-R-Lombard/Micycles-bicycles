import { useState, useEffect } from "react";
import BikeCard from "./BikeCard";

function WishList({ bikes, onDeleteBike, onUpdateBike }) {
  const [wishList, setWishList] = useState([]);
  const userId = window.localStorage.getItem("userId");

  function getWishList() {
    fetch(`/wish_list/${userId}`)
      .then((r) => r.json())
      .then((wishList) => {
        setWishList(wishList);
      });
  }

  useEffect(() => {
    getWishList();
  }, []);

  return (
    <div className="bg-info">
      <div id="bike-collection">
        {wishList.map((item) => {
          return bikes
            .filter((bike) => {
              return bike.id === item.bicycle_id;
            })
            .map((wishListBike) => {
              return (
                <BikeCard
                  key={wishListBike.id}
                  bike={wishListBike}
                  donate={false}
                  onDeleteBike={onDeleteBike}
                  onUpdateBike={onUpdateBike}
                />
              );
            });
        })}
      </div>
    </div>
  );
}

export default WishList;
