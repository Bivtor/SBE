import Header from "./components/Header"
import styles from '../styles/css/Hiring.module.css'

const Hiring = () => {

    const submitForm = () => {

    }


    return (

        <div className={styles.hiring}>
            <Header />
            <h1>Find Top Talent In Your Area</h1>
            <article>Whether you need last minute temporary staffing or you&apos;re looking for a pivotal addition to your company, we are your one stop shop for everything staffing and recruiting</article>
            <br />
            <div className={styles.jobcontainer}>
                <div className={styles.jobtitle}>
                    <h1>Find Jobs</h1>
                </div>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Hiring;