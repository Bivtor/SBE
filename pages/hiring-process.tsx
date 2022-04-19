
import Header from "../components/Header";
import styles from '../styles/css/Hiringp.module.css';
import Image from "next/image";
import hphoto from '../public/smwp.jpeg';

const HiringProcess = () => {
    return (
        <div className={styles.process}>
            <Header />
            {/* <br />
            <br />
            <div className={styles.horizbox}>
                <div className={styles.imgbox}>
                    <Image
                        className={styles.img}
                        src={hphoto}
                        alt='Santa Monica Work'
                        layout="intrinsic"
                    />
                </div>
                <div className={styles.textbox}>
                    <h3>Let Our Hiring Methods do the Hard Work For You!</h3>
                    <br />
                    <div className={styles.smalltext}>
                        <article>Local Professionals</article>
                        <article>Skilled Individuals</article>
                        <article>Trusted Community Members</article>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default HiringProcess;