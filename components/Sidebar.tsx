import { sidebarLinks } from "./dashboard";
import Link from 'next/link'
import styles from '../styles/Sidebar.module.scss'

const Sidebar = () => {
  return (
    <div className={`flex flex-col cursor-pointer items-center pt-2 pb-6 sticky top-2 h-full ${styles.sidebarWrapper} `}>
    {sidebarLinks.map((link, index) => {
        return (   
          <div className={`mt-10 hover:text-blue-500 ${styles.Links}`}>
              <Link href={link.src}>
            <div className="flex flex-col items-center max-w-0 ">
            <div key={index} className="text-2xl" > {link.icon}</div>
            <p>{link.title}</p>
            </div>

            </Link>  
          </div>
        );
      })}

    </div> 

  )
}

export default Sidebar


