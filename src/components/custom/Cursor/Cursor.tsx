import { useState } from 'react';
import { motion } from 'framer-motion';

export const Cursor: React.FC = () => {
  const [coords, setCoords] = useState<{ 
    clientX: number, 
    clientY: number
  }>({
    clientX: 0,
    clientY: 0,
  });

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;

    setCoords({
      ...coords,
      clientX,
      clientY,
    })
  };/*  */

  return (

  )
};
