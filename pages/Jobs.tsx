import React from 'react'
import Header from '../components/Header'
import JobsComponent from '../components/JobsComponent'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Sidebar.module.scss'


const Jobs = () => {
  return (
    <div>
      <Header/>

      <div className='flex'>
    <div className={styles.sidebar}>
    <Sidebar/>
    </div>

    <div className={`flex justify-center items-center text-xl font-light ${styles.horizontal}`}>
      <JobsComponent/>
    </div>

    </div>
    </div>
  )
}

export default Jobs