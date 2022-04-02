

import styles from '../styles/css/Contact.module.css'
import Image from 'next/image';
import Header from './components/Header';
import busimg from '../public/g_port.jpeg'

const Contact = () => {
  return (
    <>
      <Header />
      <div className={styles.contact}>
        <Image
          className={styles.image}
          src={busimg}
          alt='Photograph'
        >
        </Image>
        <div className={styles.articles}>
          <article>
            We started our mom and pop recruiting and staffing shop when the pandemic hit and we started taking temp work to make ends meet.  Soon, our clients were asking us if we knew anyone who could...(you fill in the blank).
          </article>
          <br/>
          <article>
            Next thing we knew, we hired our first employee and were helping to fill temp needs for clients around southern California, which quickly became Texas, Florida, Tenessee, Hawaii and on. From there, we moved into recruitment needs as well, helping to find great permanent talent.
          </article>
        </div>
      </div >
    </>
  )
}
export default Contact;
