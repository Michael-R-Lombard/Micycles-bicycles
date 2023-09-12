// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { useLogin } from './LoginContext';

// export const LoginForm = () => {
//   const { login } = useLogin(); // Use the hook to get the login function

//   const formSchema = Yup.object().shape({
//     username: Yup.string().required('Must enter a username'),
//     password: Yup.string().required('Must enter a password').min(6), // Adjust the minimum length as needed
//   });

//   const formik = Formik({
//     initialValues: {
//       username: '',
//       password: '',
//     },
//     validationSchema: formSchema,
//     onSubmit: (values) => {
//       // Perform login here using the values.username and values.password
//       // You can call a login function or set a login state here based on your authentication logic
//       login(values.username, values.password);
//     },
//   });

//   return (
//     <div>
//       <h2>Login</h2>
//       <Form onSubmit={formik.handleSubmit} style={{ margin: '30px' }} className="form">
//         <div>
//           <label htmlFor="username">Username</label>
//           <Field type="text" id="username" name="username" />
//           <ErrorMessage name="username" component="div" className="error" />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <Field type="password" id="password" name="password" />
//           <ErrorMessage name="password" component="div" className="error" />
//         </div>
//         <button type="submit">Login</button>
//       </Form>
//     </div>
//   );
// };

// export default LoginForm;
