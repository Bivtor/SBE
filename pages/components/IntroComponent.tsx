
import Link from 'next/link';
import styles from '../../styles/css/Introcomp.module.css'


const IntroComponent = () => {

    return (
        <div className={styles.IntroComponent}>
            <div className={styles.bgImage}></div>
            <div className={styles.contentDiv}>

                <h1 className={styles.s_title}>Solution Based Enterprises</h1>

                <div className={styles.i_contactBox}>
                    <div className={styles.gridItem}>
                        <h1>Find Your Dream Job</h1>
                        <Link href='job-search'>
                            <a>Job Search</a>
                        </Link>
                        <h4>We have the connections to local firms that can take your career to the next level</h4>
                    </div>

                    <div className={styles.gridItem}>
                        <h1>Hire Professionals</h1>
                        <Link href='hiring'>
                            <a>Find Employees</a>
                        </Link>
                        <h4>We have made it our mission to find qualified professionals who bring value to your team</h4>
                    </div>
                </div>

                <div className={styles.s_title2}>
                    <h1>We&apos;re small but mighty</h1>
                    <h2>Our lean staff means that we can keep our prices lower than our competitors</h2>
                </div>
            </div>
        </div>
    );
}
export default IntroComponent;