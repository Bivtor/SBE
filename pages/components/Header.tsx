import Link from "next/link";
import Image from "next/image";
import logo from "../../public/sbeimg.png";
import styles from "../../styles/css/Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerDiv}>
      <div className={styles.topheader}>
        <div className={styles.imagebox}>
          <Link href="/" >
            <a >
              {/* <Image alt="logo" src={logo} layout="responsive" ></Image> */}
              <h2>SBE</h2>
            </a>
          </Link>
        </div>
        <h1 className={styles.title}>Solution Based Enterprises</h1>

      </div>

      {/* <div className={styles.lowerheader}>
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
      </div > */}
    </div>
  );
}

export default Header;


