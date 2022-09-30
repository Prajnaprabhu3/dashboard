import React from 'react'
import FAQComponent from '../components/FAQComponent'
import Header from '../components/Header'
import ProfileComponent from '../components/ProfileComponent'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Sidebar.module.scss'


const FAQ = () => {
  return (
   <div>
     <div>
     <Header/>
   
   <div className='flex'>
    <div className={styles.sidebar}>
    <Sidebar/>
    </div>

   
   <div className={`flex flex-col justify-center items-center mt-20 text-xl font-light ${styles.horizontal}`}>
    <p className='font-bold mb-16 text-3xl items-start'>Your <span className='text-blue-500' >questions</span> answered here!</p>
   <FAQComponent/>
    </div>
   
   </div>
   </div>
   </div>
  )
}

export default FAQ