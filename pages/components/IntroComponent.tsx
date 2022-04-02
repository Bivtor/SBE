
import styles from '../../styles/css/Introcomp.module.css'


const IntroComponent = () => {

    return (
        <div className={styles.IntroComponent}>
            <div className={styles.bgImage}></div>
            <div className={styles.contentDiv}>

                <h1 className={styles.s_title}>Solution Based Enterprises</h1>

                <div className={styles.i_contactBox}>
                    <div className={styles.gridItem}>  </div>
                    <div className={styles.gridItem}>  </div>
                </div>

                <div className={styles.s_title2}>
                    <h1>We&apos;re small but mighty.</h1>
                    <h2>Our lean staff means that we can keep our prices lower than our competitors.</h2>
                </div>
            </div>
        </div>
    );
}
export default IntroComponent;