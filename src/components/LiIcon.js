import React from 'react';
import { motion, useScroll } from 'framer-motion';

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["start end", "start center"],
  });

  return (
    <figure className="absolute left-0 stroke-dark">
      <svg width="75" height="75" viewBox="0 0 100 100" className='-rotate-90'>
        <circle cx="50" cy="50" r="20" className="stroke-blue-500 stroke-1 fill-none" />
        
        <motion.circle
          cx="50"
          cy="50"
          r="20"
          className="stroke-dark stroke-[5px] fill-light"
          style={{
            pathLength: scrollYProgress, 
          }}
        />
        
        <circle cx="50" cy="50" r="10" className="stroke-1 fill-blue-500 animate-pulse" />
      </svg>
    </figure>
  );
};

export default LiIcon;
