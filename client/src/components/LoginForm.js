import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useLogin } from "./LoginContext";


export const LoginForm = () => {
    const { isLoggedIn, login, logout } = useLogin(); 

    const [users, setUsers] = useState([{}]);
    const [refreshPage, setRefreshPage] = useState(false);

    useEffect(() => {
        
        fetch("/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                console.log(data);
            });
    }, [refreshPage]);

    const formSchema = yup.object().shape({
        username: yup.string().required("Must enter a username").max(4),
        password: yup.string().required("Must enter a password").min(4), 
        // age: yup
        //     .number()
        //     .positive()
        //     .integer()
        //     .typeError("Please enter an Integer")
        //     .max(125),
    });

    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
           
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            login();

            
            fetch("users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values, null, 2),
            }).then((res) => {
                if (res.status === 200) {
                    setRefreshPage(!refreshPage);
                }
            });
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit} style={{ margin: "30px" }} className="form">
                <label htmlFor="username">Username</label>
                <br />
                <input
                    id="username"
                    name="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />
                <p style={{ color: "red" }}>{formik.errors.username}</p>
                <label htmlFor="password">Password</label>
                <br />

                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <p style={{ color: "red" }}>{formik.errors.password}</p>

                
                <br />

                <input
                    id="age"
                    name="age"
                    onChange={formik.handleChange}
                    value={formik.values.age}
                />
                <p style={{ color: "red" }}>{formik.errors.age}</p>
                <button type="submit">Submit</button>
            </form>
            <table style={{ padding: "15px" }}>
                <tbody>
                    {users === "undefined" ? (
                        <p>Loading</p>
                    ) : (
                        users.map((user, i) => (
                            <tr key={i}>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default LoginForm;
