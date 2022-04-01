

import AboutUs from "./AboutUs";
// import Contact from "./components/Contact";
import IntroComponent from "./components/IntroComponent";
import SBE_Description from "./components/SBE_Description";

import styles from '../styles/css/Home.module.css'
const Home = () => {
  return (
    <div className={styles.home}>
      <IntroComponent />
      <SBE_Description/>
      {/* <FacilitatorComp /> */}
      {/* <AboutUs /> */}
      {/* <Contact /> */}
    </div>
  );
}


export default Home;