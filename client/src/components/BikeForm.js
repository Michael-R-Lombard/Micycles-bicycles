import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function BikeForm({ onAddBike }) {
    const history = useHistory()
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        handlebar_size: "",
        frame_size: "",
        wheel_size: ""
    });

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newBike = {
            ...formData,
            likes: 0,
        };

        fetch("/bicycles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBike),
        })
            .then((r) => r.json())
            .then((bike) => {
                onAddBike(bike) 
                history.push("/bicycles")
            });
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="add-bike-form">
                <h3>Create a bicycle!</h3>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    placeholder="Enter a bicycle name..."
                    className="input-text"
                />
                <br />
                <input
                    type="text"
                    name="frame_size"
                    onChange={handleChange}
                    value={formData.frame_size}
                    placeholder="Enter frame size, sm, md, lg"
                    className="input-text"
                />
                <br />
                <input
                    type="text"
                    name="handlebar_size"
                    onChange={handleChange}
                    value={formData.handlebar_size}
                    placeholder="Enter handlebar size, sm, md, lg"
                    className="input-text"
                />
                <br />
                <input
                    type="text"
                    name="wheel_size"
                    onChange={handleChange}
                    value={formData.wheel_size}
                    placeholder="Enter wheel size, sm, md, lg"
                    className="input-text"
                />
                <br />
                <input
                    type="text"
                    name="image"
                    onChange={handleChange}
                    value={formData.image}
                    placeholder="Enter a bicycle image URL..."
                    className="input-text"
                />
                <br />
                <input
                    type="submit"
                    name="submit"
                    value="Create New Bike"
                    className="submit"
                />
            </form>
        </div>
    );
}

export default BikeForm;