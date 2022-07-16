

import IntroComponent from "../components/IntroComponent";
import SBE_Description from "../components/SBE_Description";
import Contact_gen from "../components/Contact_gen";

import styles from '../styles/css/Home.module.css'
const Home = () => {
  return (
    <div className={styles.home}>
      <IntroComponent />
      <SBE_Description />
      <Contact_gen />

    </div>
  );
}


export default Home;