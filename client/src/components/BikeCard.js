import React from "react";

function BikeCard({ bike, donate, onDeleteBike, onUpdateBike }) {
  const { id, name, image, likes } = bike;
  const userId = window.localStorage.getItem("userId");

  function handleDeleteClick() {
    fetch(`/bicycles/${id}`, {
      method: "DELETE",
    }).then(() => {
      onDeleteBike(id);
    });
  }

  function handleLikeClick() {
    const updateObj = {
      likes: bike.likes + 1,
    };

    fetch(`/bicycles/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObj),
    })
      .then((r) => r.json())
      .then(onUpdateBike);
  }

  function handleWishListClick(event) {
    event.preventDefault();

    const newWishListItem = {
      user_id: userId,
      bicycle_id: id
    };

    fetch("/wish_list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWishListItem),
    })
      .then((r) => r.json())
      .catch(err => console.log(err))
  }

  return (
    <div className="container">
      <h2>{name}</h2>
      <img src={image} alt={name} style={{ maxWidth: "15rem" }} />
      <p>{likes} Likes</p>
      <button className="btn btn-primary" onClick={handleLikeClick}>
        Like
      </button>
      {donate ? (
        <button
          className="btn btn-muted text-white"
          onClick={handleDeleteClick}
        >
          Donate Bicycle
        </button>
      ) : (
        <></>
      )}

      <button className="btn btn-danger" onClick={handleWishListClick}>
        Wish List
      </button>
    </div>
  );
}

export default BikeCard;
