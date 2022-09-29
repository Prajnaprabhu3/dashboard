import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import styles from '../styles/Sidebar.module.scss'

const Home = () => {
  return (
    <div >
      <Header />

      <div className="flex">
        <div className={styles.sidebar}> 
          <Sidebar />
        </div>

        <div className={`flex justify-center items-center text-5xl font-semibold ${styles.horizontal}`}>Find your dream job here <span className="text-blue-500">!</span> </div>
      </div>
     </div>
  );
};

export default Home;
