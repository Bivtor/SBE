
import Image from "next/image";
import styles from '../styles/css/Aboutus.module.css'
import portrait from '../public/gabe_portrait.jpeg'

const AboutUs = () => {
  return (
    <div id={styles.AboutUs}>
      <h1>About Us</h1>

      <div className={styles.aboutusgrid}>
        <div className={styles.container1}>
          <Image alt="Gabriel Berkovich" src={portrait}></Image>
        </div>

        <div className={styles.container2}>
          <article>
            We started our mom and pop recruiting and staffing shop when the pandemic hit and we started taking temp work to make ends meet.  Soon, our clients were asking us if we knew anyone who could...(you fill in the blank). Next thing we knew, we hired our first employee and were helping to fill temp needs for clients around southern California, which quickly became Texas, Florida, Tenessee, Hawaii and on. From there, we moved into recruitment needs as well, helping to find great permanent talent.
          </article>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
