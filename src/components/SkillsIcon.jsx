import React from 'react';

const SkillsIcon = ({name, img}) => {
  return (
      <div className="relative m-auto group mb-8">
        <img className="h-24 w-24 group-hover:scale-110 transition-all duration-300 " src={img} alt="React Icon"/>
        <span className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 text-2xl -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">{name}</span>
      </div>
  );
}

export default SkillsIcon;
