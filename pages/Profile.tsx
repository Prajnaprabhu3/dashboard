import React from 'react'
import Header from '../components/Header'
import ProfileComponent from '../components/ProfileComponent'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Sidebar.module.scss'


const Profile = () => {
  return (
   <div>
    <Header/>
   
   <div className='flex'>
    <div className={styles.sidebar}>
    <Sidebar/>
    </div>

    <div className={`flex justify-center items-center mt-40 text-xl font-light ${styles.horizontal}`}>
     <ProfileComponent/>
    </div>
   
   </div>
   </div>
  )
}

export default Profile