import React from 'react';

const ContactIcon = ({img,link,name}) => {
  return (
    <a href={link} className="relative m-auto group mb-8" target="_blank" rel="noreferrer">
      <img className="h-16 w-16 group-hover:scale-110 transition-all" src={img} alt="React Icon"/>
      <span className="absolute text-md -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-white">{name}</span>
    </a>
  );
}

export default ContactIcon;
