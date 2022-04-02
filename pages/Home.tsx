

import IntroComponent from "./components/IntroComponent";
import SBE_Description from "./components/SBE_Description";

import styles from '../styles/css/Home.module.css'
const Home = () => {
  return (
    <div className={styles.home}>
      <IntroComponent />
      <SBE_Description/>
    </div>
  );
}


export default Home;