import React, { createContext, useContext, useState } from 'react';

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
      "Solid foundation in programming logic and design patterns, which lets me understand, validate, and quickly adapt any code — including AI-generated code.",
      "I use tools like Claude Code, ChatGPT, and Gemini critically, not as a black box, thanks to that technical grounding.",
      "Advanced English (reading, writing, and speaking).",
      "Strong ability to navigate technical and library documentation to solve problems independently."
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
      "Base sólida en lógica de programación y patrones de diseño, que me permite entender, validar y adaptar rápido cualquier código — incluido el generado con IA.",
      "Uso herramientas como Claude Code, ChatGPT y Gemini de forma crítica, no como caja negra, gracias a esa base técnica.",
      "Inglés avanzado (lectura, escritura y conversación).",
      "Buen manejo de documentación técnica y de librerías para resolver problemas de forma autónoma."
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
  const [lang, setLang] = useState('en');
  const [galleryOpen, setGalleryOpen] = useState(false);

  const toggleLang = () => setLang(prev => (prev === 'en' ? 'es' : 'en'));
  const t = (key) => translations[lang][key];

  return (
    <AppContext.Provider value={{ lang, toggleLang, t, galleryOpen, setGalleryOpen }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
