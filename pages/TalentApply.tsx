//import Contact from '../Contact.js'
import JobListings from './components/JobListings';
import styles from '../styles/css/Talentapply.module.css';


 const TalentApply = () => {
        return(
            <div className={styles.TalentApply}>
                <h2>The First Step To a Fulfilling Career Starts Here</h2>
                <div>
                    <JobListings/>
                </div>
            </div>
        );
    }

export default TalentApply;