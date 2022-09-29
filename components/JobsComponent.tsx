import styles from '../styles/Job.module.scss'
import Image from 'next/image'
import meta from '../pages/assets/company/meta.png'

const JobsComponent = () => {
  return (
   <div className='flex flex-col'>

{/* company  */}
<div>
<Image
  src={meta}
  height="40px"
  width="40px"/>
</div>
{/* company ends  */}


{/* status  */}
<div>
    
</div>
{/* status-ends  */}


{/* role  */}
<div>

</div>
{/* role-ends  */}

   </div>
  )
}

export default JobsComponent