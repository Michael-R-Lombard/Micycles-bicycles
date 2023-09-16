import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";

function UserLogin() {
  const [users, setUsers] = useState([]);
  const [formErrors, setFormErrors] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then(setUsers);
  }, []);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((r) => {
          if (r.ok) {
            return r.json();
          } else {
            throw new Error("Failed to login.");
          }
        })
        .then((user) => {
          setUsers([...users, user]);
          formik.resetForm();
          setFormErrors([]);
          history.push('/create_bicycle');
        })
        .catch((error) => {
          setFormErrors([error.message]);
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="container mt-5">
      <label htmlFor="username">Username: </label>
      <input
        id="username"
        name="username"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      <label htmlFor="password">Password: </label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.username && formik.touched.username && (
        <p style={{ color: "red" }}>{formik.errors.username}</p>
      )}
      {formik.errors.password && formik.touched.password && (
        <p style={{ color: "red" }}>{formik.errors.password}</p>
      )}
      {formErrors.length > 0 && (
        <p style={{ color: "red" }}>{formErrors.join(", ")}</p>
      )}
      <button type="submit">Login</button>
    </form>
  );
}

export default UserLogin;
