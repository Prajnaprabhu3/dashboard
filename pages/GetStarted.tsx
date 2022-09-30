import Link from 'next/link'
import Logo from '../components/Logo'
import {BsArrowRight} from 'react-icons/bs';
import styles from '../styles/GetStarted.module.scss'


const GetStarted = () => {
  return (
   <div className={`flex flex-col justify-between items-center text-4xl mt-60 ${styles.wrapper}`}>
    <Logo />
    <p className='text-5xl'>Get your drean job now!</p>

    <Link href="/Home">
        <div className='flex items-center cursor-pointer hover:bg-gray-50 p-2.5 rounded-md'>
            <p className='text-3xl'>Enter</p>
            <BsArrowRight className='text-xl font-light ml-2 mt-1'/>
        </div>
    </Link>

   </div>
  )
}

export default GetStarted