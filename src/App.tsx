import { RouterProvider } from 'react-router-dom';
import { router } from '@/router';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useAtom } from 'jotai';
import { step } from '@/store';

import '@/store';

export const App: React.FC = () => {
  const [value, setValue] = useAtom(step);

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
  };
  
  return (
    <div 
      onMouseMove={(e) => handleMouseMove(e as any)} 
      className="max-h-screen max-w-screen overflow-hidden"
    >
      <motion.div
        className={
          value == 0 ? 
            'absolute h-[15px] w-[15px] rounded-full z-[100] bg-black' 
            : 'absolute h-[15px] w-[15px] rounded-full z-[100] bg-white'
        }
        animate={{
          x: coords.clientX,
          y: coords.clientY
        }}
      />
      <RouterProvider router={router} />
    </div>
  )
}
