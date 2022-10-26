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
import { useState } from "react";
import SkillsIcon from "./components/SkillsIcon";

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
            <span className="m-auto text-7xl">German Gabriel</span>
            <span className="m-auto text-5xl">Fullstack developer</span>
          </div>
        </motion.div>
     
        {/* Picture */}
        <motion.div initial={"elseInitial"} animate={"elseAnimate"} variants={variants} transition={{delay:3.5, duration:0.3}} className=" h-full col-start-2 row-start-1 row-end-3 m-auto mt-10">
          <img className="bg-red-700 p-5 h-full rounded-md" src={Perfil} alt="German Gabriel"/>
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
            <SkillsIcon name="Firebase" img={Firebase}/>
            <SkillsIcon name="NodeJs" img={Nodejs}/>           
            <SkillsIcon name="Git" img={Github}/>           
          </div>
        </motion.div>

        {/* Me */}
        <motion.div className="overflow-hidden h-fit w-fit m-auto flex flex-row p-5">
          <div className={about === 0 ?"relative border m-auto w-96 h-96":"opacity-0 absolute"}>
            <span className="text-3xl font-semibold">About Me</span>
            <div className="flex flex-col text-start">
              <span>&nbsp;I like to work in a team based enviorment learning from everything and everyone.</span>
              <span>&nbsp;Competitive in a healthy manner pushing to improve myself.</span>
              <span>&nbsp;Independent, but ready to help others and ask for help if needed.</span>
              <button className="border w-fit m-auto mt-2" onClick={()=>setAbout(1)}>A look into my stack</button>
              <button className="border w-fit m-auto mt-2" onClick={()=>setAbout(2)}>Contact me</button>
            </div>
          </div>
          
          <div className={about === 1 ?"relative border m-auto w-96 h-96":"opacity-0 absolute invisible"}>
            <span className="text-3xl font-semibold">My Stack</span>
            <div className="flex flex-col text-start">
              <span>&nbsp;Capable understanding of programming techniques and common logics.</span>
              <span>&nbsp;Advanced english, writing, speaking, etc.</span>
              <span>&nbsp;Clever usage of languages and libraries documentations.</span>
              <button className="border w-fit m-auto mt-2" onClick={()=>setAbout(0)}>About me</button>
              <button className="border w-fit m-auto mt-2" onClick={()=>setAbout(2)}>Contact me</button>
            </div>
          </div>

          <div className={about === 2 ?"relative border m-auto w-96 h-96":"opacity-0 absolute invisible"}>
            <span className="text-3xl font-semibold">Contact</span>
            <div className="flex flex-col text-start">
              <div className="flex flex-row flex-wrap">
                <SkillsIcon name="Github" img={GithubContact} />
                <SkillsIcon name="Resume" img={Resume} />
                <SkillsIcon name="Email" img={Email} />
                <SkillsIcon name="Linkedin" img={Linkedin} />
              </div>
              
              <button className="border w-fit m-auto mt-2" onClick={()=>setAbout(0)}>About me</button>
              <button className="border w-fit m-auto mt-2" onClick={()=>setAbout(1)}>A look into my stack</button>
            </div>
          </div>
          
          
        </motion.div> 

      </motion.div>

      {/* Menu Component */}
      <SliderMenu handleClose={()=>setMenu(!menu)} state={menu}/>
    </motion.div>
  );
}

export default App;
