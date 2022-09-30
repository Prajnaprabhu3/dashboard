import React from 'react'
import AppliedComponent from '../components/AppliedComponent'
import Header from '../components/Header'
import ProfileComponent from '../components/ProfileComponent'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Sidebar.module.scss'


const Applied = () => {
  return (
   <div>
    <Header/>
   
   <div className='flex'>
    <div className={styles.sidebar}>
    <Sidebar/>
    </div>

    <div className={`flex justify-start ml-56 mt-6 text-xl font-light ${styles.horizontal}`}>
    <AppliedComponent/>
    </div>
   
   </div>
   </div>
  )
}

export default Applied