import Header from "./components/Header"
import styles from '../styles/css/Hiring.module.css'
import React from 'react';
// import * as Yup from 'yup';
// import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';
import { useFormik } from 'formik';

// const SignupForm = () => {
//     // Pass the useFormik() hook initial form values and a submit function that will
//     // be called when the form is submitted
//     const formik = useFormik({
//       initialValues: {
//         email: '',
//       },
//       onSubmit: values => {
//         alert(JSON.stringify(values, null, 2));
//       },
//     });
//     return (
//       <form onSubmit={formik.handleSubmit}>
//         <label htmlFor="email">Email Address</label>
//         <input
//           id="email"
//           name="email"
//           type="email"
//           onChange={formik.handleChange}
//           value={formik.values.email}
//         />
  
//         <button type="submit">Submit</button>
//       </form>
//     );
//   };

// export default SignupForm;


const Hiring = () => {
    return (
        <div className={styles.hiring}>
            <Header/>
            <br/>
            <br/>
            <br/>
            
            Coming soon!
        </div>
    )
}
export default Hiring;
// Use <MyForm /> wherevs

// const Hiring = () => (

//     const formik = useFormik({
//         initialValues: {
//           email: '',
//         },
//         onSubmit: values => {
//           alert(JSON.stringify(values, null, 2));
//         },
//       });

//       return(
//     <div className={styles.hiring}>
//         <Header />
//         <h1>Find Top Talent In Your Area</h1>
//         <article>Whether you need last minute temporary staffing or you&apos;re looking for a pivotal addition to your company, we are your one stop shop for everything staffing and recruiting</article>
//         <br />
//         <div className={styles.jobcontainer}>
//             <div className={styles.jobtitle}>
//                 <h1>Employee Request</h1>
//             </div>
            
//             <form onSubmit={formik.handleSubmit}>
//                 <label htmlFor="email">Email Address</label>
//                 <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     onChange={formik.handleChange}
//                     value={formik.values.email}
//                 />
    
//             <button type="submit">Submit</button>
//             </form>


//         </div>
//     </div>
// );

// export default Hiring;