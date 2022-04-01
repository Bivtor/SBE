import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../pages/components/Header'
import HomePage from './Home'
// import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SBE</title>
        <meta name="description" content="Solution Based Enterprises" />
        <link rel="icon" href="/favicon.ico" />

          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"/>
          
        
      </Head>

      <Header />
      <HomePage />

      {/* auto gen -> leaving here for easy code examples  */}
      {/* <main className={styles.main}></main> */}
      {/* <footer className={styles.footer}></footer> */}

    </div>
  )
}

export default Home



/** Code pasted from
 *
 * old app.js file
 *
 *
 */


// import React from 'react';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


// import '../src/components/assets/css/default.css';
// import Header from './components/Header.js';
// import Home from './components/pages/Home.js';
// import TalentApply from './components/pages/TalentApply';
// import Contact from './components/Contact.js';
// import JobListings from './components/JobListings';



// class App extends React.Component {
//   render() {
//   return (
//     <Router>
//       <Header/>
//         <Routes>
//           <Route path='/' exact element={<Home/>}></Route>
//           <Route path='/contact' exact element ={<Contact/>}></Route>
//           <Route path='/apply-now' exact element ={<TalentApply/>}></Route>
//           <Route path='/listings' exact element={<JobListings/>}></Route>
//         </Routes>
//     </Router>
//   );
// }
// }

// export default App;
