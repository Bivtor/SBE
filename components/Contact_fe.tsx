import styles from '../styles/css/Contact.module.css';
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

const Contact = () => {
    return (
        <>
            <h4 className={styles.title}>Page Under Construction{<br />}Contact Us </h4>
            <div className={styles.contactBox}>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        jobTitle: '',
                        location: '',
                        salary_range: '',
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
                        <Field id="firstName" name="firstName" placeholder="First Name" />
                        <ErrorMessage name="firstName" className={styles.err} />

                        <label htmlFor="lastName">Last Name</label >
                        <Field id="lastName" name="lastName" placeholder="Last Name" />
                        <ErrorMessage name="lastName" className={styles.err} />

                        <label htmlFor="email">Email</label>
                        <Field id="email" name="email" placeholder="Email" />
                        <ErrorMessage name="email" className={styles.err} />

                        <label htmlFor="jobTitle">Position(s) Hiring For</label>
                        <Field id="jobTitle" name="jobTitle" placeholder="Job Title" />

                        <label htmlFor="location">Location</label>
                        <Field id="location" name="location" placeholder="Location" />

                        <label htmlFor="salary">Salary Range</label>
                        <Field id="salary" name="salary" placeholder="Salary Range" />

                        <label htmlFor="message">Comments</label>
                        <Field id="message" name="message" placeholder="Comments" />

                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
        </>
    );
};

export default Contact;