import { FaChevronRight } from 'react-icons/fa';
import Img1 from '../assets/images/pleasant.jpg'
const Hero = () => {
    return (
        <div className=" px-10 md:px-5 py-10 h-auto w-full bg-[#212123]  text-white shadow-sm">
            <div className='flex flex-col md:flex-row items-center justify-between gap-10'>
                <div className="hero_left">
                   <div className=' font-semibold'>
                   <h1 className='text-4xl md:text-5xl'>Nice to meet you!  </h1>
                   <p className=' my-5 text-[2rem] md:text-5xl'>i am <span className='border-b-emerald-400 border-b-4'>Pleasant Kwembe</span></p>
                   </div>
                    <p className='py-3 text-gray-300/90 md:w-[70%]'>Based in Nigeria i am a passionate web developer that builds interactive and intuitive websites</p>
                    <a href='https://wa.me/+2348144511541' className='bg-emerald-400 py-2 px-3 rounded-md shadow-sm my-5 inline-flex items-center gap-3'>Contact Me <FaChevronRight className='w-5 h-5 text-white'/></a>
                </div>
                <div className="hero_right">
                    <img src={Img1} alt="image of pleasant"  className='w-[20rem] h-[20rem] rounded-full object-cover'/>
                </div>
            </div>
        </div>
    )
}

export default Hero;
