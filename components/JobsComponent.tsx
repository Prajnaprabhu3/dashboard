import styles from '../styles/Job.module.scss'
import Image from 'next/image'
import meta from '../pages/assets/company/meta.png'
import Button from './Button'
import ApplyButton from './ApplyButton'


import { jobs } from './jobs'

const JobsComponent = () => {
  return (
    <div>
{jobs.map((company, index) => {
        return (   
            <div className={`flex flex-col justify-between items-start border border-gray-300 rounded-lg m-6 bg-white drop-shadow ${styles.companyWrapper}`}>
            <div className='flex flex-col justify-between items-start m-4'>
            {/* company  */}
            <div className='flex justify-between items-center mb-4'>
            <div className='flex border rounded-sm border-gray-300'>
            <Image
              src={company.logo}
              height="50px"
              width="50px"/>
            </div>
              
              <div className='m-3'>
                <p className='font-semibold text-xl'>{company.company}</p>
                <p className='text-sm'>{company.companyWork}</p>
              </div>
            
            </div>
            {/* company ends  */}


            {/* status  */}
            <div className='flex justify-between items-center mb-5' >
                <p className='text-xs font-medium bg-green-100 rounded-lg py-1 px-2 text-green-900' >{company.hiringStatus}</p>
                <p className='text-xs font-medium bg-violet-200 rounded-lg py-1 px-2 text-violet-900 ml-5'>{company.growthStatus}</p>
            </div>
            {/* status-ends  */}


            {/* role  */}
                <div className={`flex justify-between align-middle border py-2 px-5 items-start ${styles.roleWrapper} `}>
                {/* role name  */}
                <p className='text-base font-semibold mr-30'>{company.role}</p>
                <div className='flex justify-between items-center'>
                    {/* location   */}
                <p className='text-sm font-normal text-gray-500'>{company.location}</p>
                <p className='flex items-center '> &nbsp; - &nbsp; </p>

                {/* salary  */}
                <p className='text-sm font-normal text-gray-500'>{company.salary}</p>
                </div>

                {/* <div className='bg-black text-white'> */}
                   {company.apply}
                {/* </div> */}

                </div>
                {/* role-ends  */}





              </div>
              </div>       

        );
      })} 
</div>


  )






// jobs.map((link, index) => {
//         return (   
//           <div className={``}>
//           </div>
//         );
//       })} 
  
//   )


}

export default JobsComponent






// <div className={`flex flex-col justify-between items-start border border-gray-300 rounded-lg ${styles.companyWrapper}`}>
// <div className='flex flex-col justify-between items-start m-4'>
// {/* company  */}
//             <div className='flex justify-between items-center mb-4'>
//             <div className='flex border rounded-sm border-gray-300'></div>

//             <Image
//             src={link.logo}
//             height="45px"
//             width="45px"/>
//             </div>

//      <div className='m-3'>
//         <p className='font-semibold text-xl'>Meta</p>
//          <p className='text-sm'>Sass based company</p>
//      </div>

//     </div>
// {/* company ends   */}


//     </div>
