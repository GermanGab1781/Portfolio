import React, { createContext, useContext, useEffect, useState } from 'react';

const translations = {
  en: {
    role: "Web developer",
    skills: "Skills",
    titleAbout: "About",
    titleStack: "My Stack",
    titleContact: "Contact",
    btnAbout: "About me",
    btnStack: "My stack",
    btnContact: "Contact/Resume",
    aboutText: [
      "I like to work in a team based enviorment learning from everything and everyone.",
      "Competitive in a healthy manner pushing to improve myself.",
      "Independent, but ready to help others and ask for help if needed."
    ],
    stackText: [
      "Capable understanding of programming techniques and common logics.",
      "Advanced english, writing, speaking, etc.",
      "Clever usage of languages and libraries documentations."
    ],
    contactGithub: "Github",
    contactResume: "Resume",
    contactEmail: "Email",
    contactLinkedin: "Linkedin",
    goBack: "Go back",
    myProjects: "My projects",
    view: "View",
  },
  es: {
    role: "Desarrollador Web",
    skills: "Habilidades",
    titleAbout: "Sobre mí",
    titleStack: "Mi Stack",
    titleContact: "Contacto",
    btnAbout: "Sobre mí",
    btnStack: "Mi stack",
    btnContact: "Contacto/CV",
    aboutText: [
      "Me gusta trabajar en equipo aprendiendo de todo y de todos.",
      "Competitivo de forma sana, siempre buscando mejorar.",
      "Independiente, pero dispuesto a ayudar y a pedir ayuda si es necesario."
    ],
    stackText: [
      "Buen manejo de técnicas de programación y lógica general.",
      "Inglés avanzado, escrito, hablado, etc.",
      "Uso inteligente de documentación de lenguajes y librerías."
    ],
    contactGithub: "Github",
    contactResume: "CV",
    contactEmail: "Email",
    contactLinkedin: "Linkedin",
    goBack: "Volver",
    myProjects: "Mis proyectos",
    view: "Ver",
  }
};

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('en');
  const [galleryOpen, setGalleryOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  const toggleLang = () => setLang(prev => (prev === 'en' ? 'es' : 'en'));
  const t = (key) => translations[lang][key];

  return (
    <AppContext.Provider value={{ theme, toggleTheme, lang, toggleLang, t, galleryOpen, setGalleryOpen }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
