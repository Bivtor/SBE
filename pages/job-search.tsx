import Header from "./components/Header";
import styles from "../styles/css/Jsearch.module.css";
import ContactJS from "./components/Contact_js";

const JobSearch = () => {
  return (
    <div className={styles.jsearch}>
      <Header />
      <ContactJS />
    </div>
  );
};

export default JobSearch;
