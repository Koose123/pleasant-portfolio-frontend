

import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero.tsx";
import MySkills from "../components/MySkills.tsx";
import ContactUS from "../components/ContactUS.tsx";
const Home = () => {
  return (
    <div className="max-w-5xl m-auto px-3 ">
      <Header/>
      <Hero/>
      <hr className="bg-gray-900 m-10"/>
      <MySkills/>
      <ContactUS/>
      <hr className="bg-gray-900 m-10"/>
      <Footer/>
    </div>
  )
}

export default Home;
