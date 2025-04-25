import {FaFacebook, FaGithub} from 'react-icons/fa';
import Img2 from "../assets/images/KOOSE.png"

 const Header = () => {
  return (
    <div  className="flex justify-between items-center py-3 px-5 ">
      < img src= {Img2} alt="logo"  className='w-[3rem] h-[3rem]'/>
      
      <div className=" flex items-center gap-5">
        <FaGithub className='w-5 h-5 text-white'/>
        <FaFacebook className='w-5 h-5 text-white'/>
      </div>
    </div>
  )
}

export default Header;
