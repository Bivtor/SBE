import styles from '../styles/css/Contact_gen.module.css';

import {
    Formik,
    Form,
    Field,
    ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

const Contact_gen = () => {
    return (
        <div className={styles.C}>
            <h1>Contact Us</h1>
            <div className={styles.CG}>


                <div className={styles.box}>
                    <h2>Gabe@solutionbasedtherapeutics.com</h2>
                </div>

                <div className={styles.box2}>
                    <h2>or</h2>
                </div>

                <div className={styles.contactBox}>
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            location: '',
                            email: '',
                            message: '',
                        }}
                        validationSchema={Yup.object({
                            firstName: Yup.string()
                                .max(15, 'Must be 15 characters or less')
                                .required('Required'),
                            lastName: Yup.string()
                                .max(20, 'Must be 20 characters or less')
                                .required('Required'),
                            email: Yup.string()
                                .email('Invalid email address')
                                .required('Required'),
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                emailjs.send('service_bsmslie', 'contact_FE', values, 'user_gH6Nj2fDTtj0WOngwHUHL')
                                    .then((result) => {
                                        console.log(result.text);
                                    }, (error) => {
                                        console.log(error.text);
                                    });

                                setSubmitting(false);

                            }, 400);
                        }}
                    >
                        <Form className={styles.contactForm}>
                            <label htmlFor="firstName">First Name</label>
                            <Field id="firstName" name="firstName" placeholder="First Name" className={styles.field} />
                            <ErrorMessage name="firstName" render={msg => <div className={styles.err}>{msg}</div>} />

                            <label htmlFor="lastName">Last Name</label >
                            <Field id="lastName" name="lastName" placeholder="Last Name" className={styles.field} />
                            <ErrorMessage name="lastName" render={msg => <div className={styles.err}>{msg}</div>} />

                            <label htmlFor="email">Email</label>
                            <Field id="email" name="email" placeholder="Email" className={styles.field} />
                            <ErrorMessage name="email" render={msg => <div className={styles.err}>{msg}</div>} />

                            <label htmlFor="location">Location</label>
                            <Field id="location" name="location" placeholder="Location" className={styles.field} />

                            <label htmlFor="message">Message</label>
                            <Field id="message" name="message" placeholder="Message" className={styles.field} />

                            <button type="submit">Submit</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )

}

export default Contact_gen;