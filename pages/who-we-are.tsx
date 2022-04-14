

import styles from '../styles/css/Whoweare.module.css'
import Image from 'next/image';
import Header from './components/Header';
import busimg from '../public/g_port.jpeg';

import useMediaQuery from "./components/useMediaQuery";

const Contact = () => {

  const isDesktop = useMediaQuery('(max-width: 1000px)');

  return (
    <div className={styles.all}>
      <Header />
      <div className={styles.contact}>
        {isDesktop ? <Image
          className={styles.image}
          src={busimg}
          width={400}
          alt='Photograph'
        />
          :
          <Image
            className={styles.image}
            src={busimg}

            alt='Photograph'
          />}

        <div className={styles.articles}>
          <h4>
            We started our mom and pop recruiting and staffing shop when the pandemic hit and we started taking temp work to make ends meet.  Soon, our clients were asking us if we knew anyone who could...(you fill in the blank).
          </h4>
          <br />
          <h4>
            Next thing we knew, we hired our first employee and were helping to fill temp needs for clients around southern California, which quickly became Texas, Florida, Tenessee, Hawaii and on. From there, we moved into recruitment needs as well, helping to find great permanent talent.
          </h4>

          <h4>Contact us at:</h4>

        </div>
      </div >
    </div>
  )
}
export default Contact;
