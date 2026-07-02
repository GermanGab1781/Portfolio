import { motion } from "framer-motion";
import SliderMenu from "./components/SliderMenu";
import Perfil from "./media/Perfil2.png"
import Firebase from "./media/skills/Firebase.png"
import ReactIcon from "./media/skills/ReactIcon.png"
import Tailwind from "./media/skills/Tailwind.png"
import Nodejs from "./media/skills/NodeJs.png"
import Github from "./media/skills/Github.png"
import Email from "./media/Email.png"
import GithubContact from "./media/GithubContact.png"
import Linkedin from "./media/Linkedin.png"
import Resume from "./media/Resume.png"
import ThreeJs from "./media/skills/ThreeJs.png"
import SkillsIcon from "./components/SkillsIcon";
import ContactIcon from "./components/ContactIcon";
import { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import { useAppContext } from "./context/AppContext";

function App() {
  const [menu, setMenu] = useState(false)
  const [about, setAbout] = useState(0)
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  const { theme, toggleTheme, lang, toggleLang, t, galleryOpen } = useAppContext();
  const titles = [t("titleAbout"), t("titleStack"), t("titleContact")];

  const tabBase = "border rounded-md p-1 w-fit m-auto mt-2 transition-all";
  const tabActive = "border-blue-700 bg-blue-700 text-white pointer-events-none";
  const tabInactive = "border-blue-400 bg-blue-200 dark:bg-slate-800 hover:bg-blue-700 hover:text-white hover:border-blue-700";
  const tabClass = (i) => `${tabBase} ${about === i ? tabActive : tabInactive}`;


  return (
    <motion.div className="xl:grid xl:grid-rows-2 xl:grid-cols-2 flex flex-col xl:gap-y-10 bg-white dark:bg-black text-black dark:text-white max-w-screen h-screen pb-36 font-Montserrat transition-colors duration-300">
      {/* Theme / Language toggles */}
      {!galleryOpen && (
        <div className="fixed top-3 right-3 z-10 flex flex-row gap-x-2">
          <button onClick={toggleTheme} className="border border-blue-700 rounded-md px-2 py-1 text-sm hover:border-blue-500 transition-all">
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button onClick={toggleLang} className="border border-blue-700 rounded-md px-2 py-1 text-sm hover:border-blue-500 transition-all">
            {lang === "en" ? "ES" : "EN"}
          </button>
        </div>
      )}

      {/* Title */}
      <motion.div initial={isMobile ? { y: "30vw", scale: 1.5 } : { x: "22vw", y: "30%", scale: 1.5 }} animate={isMobile ? { y: 0, scale: 1 } : { x: 0, y: 0, scale: 1 }} transition={{ delay: 1, duration: 3 }} className="mx-auto xl:col-start-1 flex flex-col xl:h-full h-1/2 2xl:ml-20 2xl:mt-20 xl:ml-16 xl:mt-16 place-content-center text-center">
        <span className="2xl:text-8xl xl:text-7xl text-2xl font-bold text-blue-700">Germán Gabriel</span>
        <span className="2xl:text-6xl xl:text-5xl text-xl ">{t("role")}</span>
      </motion.div>

      {/* Picture */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5, duration: 0.3 }} className=" xl:h-full xl:w-10/12 h-64 xl:row-start-1 xl:row-end-3 xl:m-auto xl:mt-10">
        <img className="h-full w-full object-contain m-auto drop-shadow-xl" src={Perfil} alt="German Gabriel" />
      </motion.div>

      {/* About me */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5, duration: 0.3 }} className=" xl:row-start-2 xl:col-start-1 xl:grid xl:grid-cols-2 h-full w-full text-center xl:mx-auto m-auto xl:ml-16 mt-5 xl:gap-x-2 place-content-center">

        {/* Skills */}
        <motion.div className="">
          {/* <span className="bg-slate-300 sm:bg-red-800 md:bg-amber-400 lg:bg-lime-500 xl:bg-sky-500 2xl:bg-violet-700 p-5"></span> */}
          <span className="2xl:text-3xl text-2xl font-semibold text-blue-700">{t("skills")}</span>
          <div className="flex flex-row flex-wrap">
            <SkillsIcon name="React" img={ReactIcon} />
            <SkillsIcon name="Tailwind Css" img={Tailwind} />
            <SkillsIcon name="ThreeJs" img={ThreeJs} />
            <SkillsIcon name="Firebase" img={Firebase} />
            <SkillsIcon name="NodeJs" img={Nodejs} />
            <SkillsIcon name="Git" img={Github} />
          </div>
        </motion.div>

        {/* Me */}
        <motion.div className="h-full w-full px-5">
          <span className="2xl:text-3xl text-2xl font-semibold text-blue-700">
            {titles[about]}
          </span>
          <div className={about === 0 ? "relative m-auto xl:h-48" : "opacity-0 absolute invisible"}>
            <div className="flex flex-col text-start">
              {t("aboutText").map((line, index) => (
                <span key={index}>{line}</span>
              ))}
            </div>
          </div>

          <div className={about === 1 ? "relative m-auto xl:h-48" : "opacity-0 absolute invisible"}>
            <div className="flex flex-col text-start">
              {t("stackText").map((line, index) => (
                <span key={index}>{line}</span>
              ))}
            </div>
          </div>

          <div className={about === 2 ? "relative m-auto xl:h-48 visible" : "opacity-0 absolute invisible"}>
            <div className="flex flex-col text-start my-auto">
              <div className="flex flex-row mt-10 gap-x-3">
                <ContactIcon link={"https://github.com/GermanGab1781"} name={t("contactGithub")} img={GithubContact} />
                <ContactIcon link={"https://drive.google.com/drive/folders/1mYA43BqnqKkW0BNrH9wuLwdnhcs66qZ3?usp=sharing"} name={t("contactResume")} img={Resume} />
                <ContactIcon link={"mailto:germangabriel1998@gmail.com"} name={t("contactEmail")} img={Email} />
                <ContactIcon link={"https://www.linkedin.com/in/germ%C3%A1n-gabriel-9b3b1a160/"} name={t("contactLinkedin")} img={Linkedin} />
              </div>
            </div>
          </div>

          <div className="flex place-content-center whitespace-nowrap gap-x-2">
            <button className={tabClass(0)} onClick={() => setAbout(0)}>{t("btnAbout")}</button>
            <button className={tabClass(1)} onClick={() => setAbout(1)}>{t("btnStack")}</button>
            <button className={tabClass(2)} onClick={() => setAbout(2)}>{t("btnContact")}</button>
          </div>
        </motion.div>

      </motion.div>

      {/* Menu Component */}
      <SliderMenu handleClose={() => setMenu(!menu)} state={menu} />
    </motion.div>
  );
}

export default App;
