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
  return (
    <motion.div className="flex flex-col gap-y-5 py-5">
 
      {/* Title */}
      <motion.div className="flex flex-col p-2 text-center border border-red-700 w-1/2 m-auto">
        <span className="border text-7xl">German Gabriel</span>
        <span className="border text-5xl">Fullstack developer</span>
      </motion.div>

      {/* Triple section */}
      <motion.div className="grid grid-cols-3 border border-green-700 text-center">

        {/* Skills */}
        <motion.div className="border m-auto">
          <span className="text-3xl font-semibold">SKILLS</span>
          <div className="flex flex-row flex-wrap w-80">
            <SkillsIcon name="React" img={ReactIcon}/>
            <SkillsIcon name="Tailwind Css" img={Tailwind}/>
            <SkillsIcon name="Firebase" img={Firebase}/>
            <SkillsIcon name="NodeJs" img={Nodejs}/>           
            <SkillsIcon name="Git" img={Github}/>           
          </div>
        </motion.div>

        {/* Picture */}
        <motion.div className="border m-auto">
          <div className="bg-blue-500 rounded-md p-7">
            <img className="w-96 h-96 rounded-md" src={Perfil} alt="German Gabriel"/>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div className="border m-auto flex flex-col">
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
