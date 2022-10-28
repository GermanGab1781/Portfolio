import { motion } from "framer-motion";
import SliderMenu from "./components/SliderMenu";
import Perfil from "./media/Perfil.png"
import Firebase from "./media/Firebase.png"
import ReactIcon from "./media/ReactIcon.png"
import Tailwind from "./media/Tailwind.png"
import Nodejs from "./media/NodeJs.png"
import Github from "./media/Github.png"
import Email from "./media/Email.png"
import GithubContact from "./media/GithubContact.png"
import Linkedin from "./media/Linkedin.png"
import Resume from "./media/Resume.png"
import Bootstrap from "./media/Bootstrap.png"
import { useState } from "react";
import SkillsIcon from "./components/SkillsIcon";
import ContactIcon from "./components/ContactIcon";

function App() {
  const [menu, setMenu] = useState(false)
  const [about,setAbout] = useState(0)

  const variants = {
    nameInitial: {x:50,y:50,scale:1.5},
    nameAnimate: {x:0,y:0, scale:1},
    elseInitial: {opacity:0},
    elseAnimate: {opacity:1}
  };

  return (
    <motion.div className="grid grid-cols-2 grid-rows-2 bg-black text-white w-screen h-screen pb-36">
 
      {/* Title */}
      <motion.div initial={"nameInitial"} animate={"nameAnimate"} transition={{delay:1,duration:3}} variants={variants} className=" col-start-1 ml-16 mt-16">
          <div className="place-content-evenly flex flex-col">
            <span className="m-auto xl:text-7xl">German Gabriel</span>
            <span className="m-auto xl:text-5xl">Fullstack developer</span>
          </div>
        </motion.div>
     
        {/* Picture */}
        <motion.div initial={"elseInitial"} animate={"elseAnimate"} variants={variants} transition={{delay:3.5, duration:0.3}} className="h-full col-start-2 row-start-1 row-end-3 m-auto mt-10">

          <img className=" bg-blue-700 py-1 h-full shadow-lg shadow-blue-700 rounded-md" src={Perfil} alt="German Gabriel"/>

          
        </motion.div>

      {/* About me */}
      <motion.div initial={"elseInitial"} animate={"elseAnimate"} variants={variants} transition={{delay:3.5, duration:0.3}} className=" row-start-2 col-start-1 grid grid-cols-2 text-center ml-16">

        {/* Skills */}
        <motion.div className="">
          <span className="sm:bg-red-800 md:bg-amber-400 lg:bg-lime-500 xl:bg-sky-500 2xl:bg-violet-700 p-5"></span>
          <span className="text-3xl font-semibold">Skills</span>
          <div className="flex flex-row flex-wrap">
            <SkillsIcon name="React" img={ReactIcon}/>
            <SkillsIcon name="Tailwind Css" img={Tailwind}/>
            <SkillsIcon name="Bootstrap" img={Bootstrap}/>
            <SkillsIcon name="Firebase" img={Firebase}/>
            <SkillsIcon name="NodeJs" img={Nodejs}/>           
            <SkillsIcon name="Git" img={Github}/>           
          </div>
        </motion.div>

        {/* Me */}
        <motion.div className="h-full w-full  px-5">
          <span className="text-3xl font-semibold">{about === 0 && "About"}{about === 1 && "My stack"}{about === 2 && "Contact"}</span>
          <div className={about === 0 ?"relative  m-auto xl:h-48 xl":"opacity-0 absolute invisible"}>
            <div className="flex flex-col text-start">
              <span>I like to work in a team based enviorment learning from everything and everyone.</span>
              <span>Competitive in a healthy manner pushing to improve myself.</span>
              <span>Independent, but ready to help others and ask for help if needed.</span>
            </div>            
          </div>
          
          <div className={about === 1 ?"relative  m-auto xl:h-48 xl ":"opacity-0 absolute invisible"}>           
            <div className="flex flex-col text-start">
              <span>Capable understanding of programming techniques and common logics.</span>
              <span>Advanced english, writing, speaking, etc.</span>
              <span>Clever usage of languages and libraries documentations.</span>
            </div>
          </div>

          <div className={about === 2 ?"relative  m-auto xl:h-48 xl ":"opacity-0 absolute invisible"}>
            <div className="flex flex-col text-start m-auto">
              <div className="flex flex-row flex-wrap">
                <ContactIcon name="Github" img={GithubContact} />
                <ContactIcon name="Resume" img={Resume} />
                <ContactIcon name="Email" img={Email} />
                <ContactIcon name="Linkedin" img={Linkedin} />
              </div>       
              <span>fill out form</span>      
            </div>
          </div>

          <div className="flex">
            <button className={about === 0 ?"border pointer-events-none border-blue-700 rounded-md p-1 w-fit m-auto mt-2 text-slate-500":"border border-blue-400 rounded-md p-1 transition-all hover:border-blue-500 hover:text-slate-300 w-fit m-auto mt-2"} onClick={()=>setAbout(0)}>About me</button>
            <button className={about === 1 ?"border pointer-events-none border-blue-700 rounded-md p-1 w-fit m-auto mt-2 text-slate-500":"border border-blue-400 rounded-md p-1 transition-all hover:border-blue-500 hover:text-slate-300 w-fit m-auto mt-2"} onClick={()=>setAbout(1)}>My stack</button>
            <button className={about === 2 ?"border pointer-events-none border-blue-700 rounded-md p-1 w-fit m-auto mt-2 text-slate-500":"border border-blue-400 rounded-md p-1 transition-all hover:border-blue-500 hover:text-slate-300 w-fit m-auto mt-2"} onClick={()=>setAbout(2)}>Contact me</button>
          </div>
        </motion.div> 

      </motion.div>

      {/* Menu Component */}
      <SliderMenu handleClose={()=>setMenu(!menu)} state={menu}/>
    </motion.div>
  );
}

export default App;
