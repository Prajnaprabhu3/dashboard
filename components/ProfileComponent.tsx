import Image from "next/image";
import profile from "../pages/assets/profile.jpeg";
import styles from "../styles/Profile.module.scss";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Button from "./Button";
import { skills } from "./skills"

const ProfileComponent = () => {
  return (
    <div className={`flex flex-col border rounded-sm align-middle justify-around ${styles.profileWrapper}`}>
     <div className="m-6">
      {/* Top-section  */}
      <div className={`flex  mb-4 justify-between`}>
        <div className={`flex justify-between  ${styles.photoName}`}>
          <Image
            src={profile}
            alt="Profile picture"
            width={50}
            height={50}
            className="rounded-3xl"
          />

          <div>
            <p className="text-md font-semibold">John Doe</p>
            <p className="text-sm">1 year of exp. Remote only</p>
          </div>
        </div>

        {/* social-links  */}
        <div className={`flex items-center justify-between  text-sm ${styles.social}`}>
          <BsGithub  />
          <BsLinkedin />
          <Button buttonText="Resume" />
        </div>
        {/* social-links ends  */}
      </div>
      {/* Top-section ends  */}

      {/* Description  */}
      <div className="mb-4">
<p className="font-semibold text-sm">About me</p>
<p className="text-xs font-regular ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quam iure unde! Sed laboriosam necessitatibus facilis at quis ipsam ratione animi aliquid, neque, labore perspiciatis cupiditate. Vel facere dolores qui! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum magni saepe officia rem ea laudantium neque sunt sequi eum assumenda.</p>
      </div>
      {/* Description ends  */}

    {/* Education  */}
      <div className="mb-4">
<p className="font-semibold text-sm">Education</p>
<p className="font-medium text-xs text-gray-600">BEng, Data Science engineering</p>
<p className="text-xs font-regular">Engineering Institute of Technology</p>
      </div>
      {/* Education ends  */}

    {/* skills  */}
    <div>
        <p className="font-semibold text-sm">Skills</p>
      <div className=" flex text-xs space-x-4  font-medium">
      {skills.map((link, index) => {
        return (   
         <div className="items-center bg-gray-200 p-1 rounded-md">
            <p>{link.title}</p>
            </div>
        );
      })}
      </div>
      </div>
    {/* skills ends */}


      </div>

    </div>
  );
};

export default ProfileComponent;
