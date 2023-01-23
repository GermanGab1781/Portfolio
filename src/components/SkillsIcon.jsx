import React from 'react';

const SkillsIcon = ({name, img}) => {
  return (
      <div className="relative m-auto group mb-8">
        <img className="2xl:h-24 2xl:w-24 xl:h-20 xl:w-20 h-10 w-10 group-hover:scale-110 transition-all " src={img} alt="React Icon"/>
        <span className="absolute opacity-0 group-hover:opacity-100 transition-all delay-100 text-2xl -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-white">{name}</span>
      </div>
  );
}

export default SkillsIcon;
