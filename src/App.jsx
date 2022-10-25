import { motion } from "framer-motion";
import SliderMenu from "./components/SliderMenu";
import Perfil from "./media/Perfil.png"
import Firebase from "./media/Firebase.png"
import ReactIcon from "./media/ReactIcon.png"
import Tailwind from "./media/Tailwind.png"
import Nodejs from "./media/NodeJs.png"
import Github from "./media/Github.png"
import { useState } from "react";
import SkillsIcon from "./components/SkillsIcon";

function App() {
  const [menu, setMenu] = useState(false);
  const variants = {
    nameInitial: {x:50,y:50,scale:2},
    nameAnimate: {x:0,y:0, scale:1},
    elseInitial: {opacity:0},
    elseAnimate: {opacity:1}
  };
  return (
    <motion.div className="grid grid-rows-1 bg-black text-white w-screen h-screen pb-36">
 
      {/* Title */}
      <motion.div initial={"nameInitial"} animate={"nameAnimate"} transition={{delay:1,duration:3}} variants={variants} className="col-start-1 row-start-1 row-span-1 m-auto">
          <div className="place-content-evenly flex flex-col">
            <span className="m-auto text-7xl">German Gabriel</span>
            <span className="m-auto text-5xl">Fullstack developer</span>
          </div>
        </motion.div>
     
        {/* Picture */}
        <motion.div initial={"elseInitial"} animate={"elseAnimate"} variants={variants} transition={{delay:3.5, duration:1.5}} className="col-start-2 row-start-1 row-end-2 m-auto max-w-fit max-h-fit">
          <div className="bg-blue-500 rounded-md p-7">
            <img className="w-fit h-fit rounded-md" src={Perfil} alt="German Gabriel"/>
          </div>
        </motion.div>

      {/* Section2 */}
      <motion.div initial={"elseInitial"} animate={"elseAnimate"} variants={variants} transition={{delay:3.5, duration:1.5}} className="row-start-2 col-start-1 grid grid-cols-2 m-auto text-center">

        {/* Skills */}
        <motion.div className="">
          <span className="text-3xl font-semibold">SKILLS</span>
          <div className="flex flex-row flex-wrap">
            <SkillsIcon name="React" img={ReactIcon}/>
            <SkillsIcon name="Tailwind Css" img={Tailwind}/>
            <SkillsIcon name="Firebase" img={Firebase}/>
            <SkillsIcon name="NodeJs" img={Nodejs}/>           
            <SkillsIcon name="Git" img={Github}/>           
          </div>
        </motion.div>

        

        {/* Contact */}
        <motion.div className="flex flex-col">
          <span>Let's talk about your proyect</span>
          <span>CONTACT ME</span>
        </motion.div>

      </motion.div>

      {/* Menu Component */}
      <SliderMenu handleClose={()=>setMenu(!menu)} state={menu}/>
    </motion.div>
  );
}

export default App;
