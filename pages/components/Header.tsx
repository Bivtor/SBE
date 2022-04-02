import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import logo from "../../public/sbt.png";
import styles from "../../styles/css/Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerDiv}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <div className={styles.topheader}>

        <div className={styles.imagebox}>
          <Link href="/">
            <a>
              <Image alt="logo" src={logo} layout="responsive" ></Image>
            </a>
          </Link>
        </div>
      </div>

      <div className={styles.lowerheader}>
        <nav className={styles.nav1}>
          <ul>

            <li>
              <Link href="/life">
                <a>Life And Culture</a>
              </Link>
            </li>

            <li>
              <Link href="/who-we-are" >
                <a>Who We Are</a>
              </Link>
            </li>

            <li id={styles.end}>
              <Link href="/hiring-process">
                <a>Our Hiring Process</a>
              </Link>
            </li>

          </ul>
        </nav>


        {/* <div className={styles.lowerheader}>
        <div>
          <Link href="/seekingtalent" >
            <a>Seeking Talent</a>
          </Link>
        </div>
        
        <div>
          <Link href="/hiringtalent">
            <a>Hiring Talent</a>
          </Link>
        </div>
      </div > */}
      </div >
    </div>
  );
}

export default Header;