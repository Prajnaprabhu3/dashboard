import {GrHomeRounded} from 'react-icons/gr'
import {FaRegUser} from 'react-icons/fa'
import {MdWorkOutline} from 'react-icons/md'
import {AiOutlineFileDone} from 'react-icons/ai'
import {BsQuestionCircle} from 'react-icons/bs'
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

export const sidebarLinks = [
  {
    icon: <GrHomeRounded />,
    src: "/Home",
    title:"Home"
  },
  {
    icon: <FaRegUser />,
    src: "/Profile",
    title:"Profile"
  },
  {
    icon: <MdWorkOutline />,
    src: "/Jobs",
    title:"Jobs"
  },
  {
    icon: <AiOutlineFileDone />,
    src: "/Applied",
    title:"Applied"
  },
  {
    icon: <BsQuestionCircle />,
    src: "/FAQ",
    title:"FAQ"
  },
];
