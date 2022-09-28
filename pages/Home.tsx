import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import styles from '../styles/Sidebar.module.scss'

const Home = () => {
  return (
    <div >
      <Header />

      <div className="">
        <div className=""> 
          <Sidebar />
        </div>

        <div className={`${styles.horizontal}`}>Find your dream job here</div>
      </div>
     </div>
  );
};

export default Home;
