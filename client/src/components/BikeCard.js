import React from "react";

function BikeCard({ bike, onDeleteBike, onUpdateBike }) {
    const { id, name, image, likes } = bike;

    function handleDeleteClick() {
        fetch(`/bicycles/${id}`, {
            method: "DELETE",
        })
            
            .then(() => {
                onDeleteBike(id)   
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

    return (
        <div className="card">
            <h2>{name}</h2>
            <img src={image} alt={name} className="" style={{"maxWidth":"20rem"}} />
            <p>{likes} Likes </p>
            <button className="like-btn" onClick={handleLikeClick}>
                Like {"<3"}
            </button>
            <button className="del-btn" onClick={handleDeleteClick}>
                Donate Bicycle
            </button>
        </div>
    );
}

export default BikeCard;