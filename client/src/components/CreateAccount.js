import React, { useState } from 'react';


function CreateAccount() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            
            const response = await fetch('/create_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify(formData), 
            });

            if (response.ok) {
                
                const data = await response.json();
                console.log('Account created successfully:', data);
            } else {
                
                console.error('Error creating account. Response:', response);
            }
        } catch (error) {
            
            console.error('Network error:', error);
        }

        
        setFormData({
            name: '',
            email: '',
            password: '',
        });
    };

    return (
        <div>
            <h2>Create an Account</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Create Account</button>
                </div>
            </form>
        </div>
    );
}

export default CreateAccount;
