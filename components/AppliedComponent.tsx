import { applied } from './applied';
import Image from 'next/image'
import styles from '../styles/Applied.module.scss'

const AppliedComponent: React.FC = () => {
  return (
    <div>
      <p className="font-bold text-4xl">Applications</p>

      <div className={` ${styles.appliedWrapper}`}>
          {applied.map((company, index) => {
            return <div className='border rounded-lg mt-8 py-1 px-4'>
                <div className='flex flex-col justify-between items-start '>
            {/* company  */}
            <div className='flex justify-between items-center mb-4'>
            <div className='flex border rounded-sm border-gray-300 mr-3'>
            <Image
              src={company.logo}
              height="50px"
              width="50px"/>
            </div>
              
              <div className='m-3'>
                <p className='font-semibold text-xl'>{company.company}</p>
                <p className='text-sm  text-gray-800'>{company.role}</p>
               <div className='flex justify-between items-center'>
               <p className='text-sm font-semibold text-gray-500 mr-2'>{company.status}</p>
               <p className='text-sm font text-gray-500'>{company.day}</p>
               </div>
              </div>
            
            </div>
            {/* company ends  */}
            </div>
            </div>;
          })}
        </div>
    </div>
  );
};

export default AppliedComponent;
