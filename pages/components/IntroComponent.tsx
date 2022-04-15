
import Link from 'next/link';
import styles from '../../styles/css/Introcomp.module.css'
import Image from 'next/image';
import shake from '../../public/smile_team.webp'
import img from '../../public/filler2.jpeg'

const IntroComponent = () => {

    return (
        <div className={styles.IntroComponent}>
            <div className={styles.contentDiv}>

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

                <div className={styles.imgBox}>
                    <Image
                        className={styles.imgFill}
                        src={img}
                        alt={"photo"}
                        layout={'intrinsic'}
                    >
                    </Image>
                </div>
            </div>

            <br />
            <br />
            <div className={styles.s_title2}>
                <h1>Solution Based Enterprises is a boutique staffing and recruitment agency</h1>
                <h2>We offer nation-wide staffing and recruitment services for a range of industries</h2>
            </div>
            <br />
            <br />
            <div className={styles.descSect}>
                <Image
                    className={styles.s_image}
                    src={shake}
                    alt='image'
                >
                </Image>
                <div className={styles.desc_box}>
                    <h3>Whether you need last minute temporary staffing or you&apos;re looking for a pivotal addition to your company, we are your one stop shop for everything staffing and recruiting.</h3>
                    <h3>We have made it our mission to find qualified professionals who bring value to your team.</h3>
                    <h3>We take the hassle out of finding reliable staff. We break the stereotype; good employees are hard to find. We made it easy!</h3>
                </div>
            </div>
            <br />
            <br />
        </div>
    );
}
export default IntroComponent;