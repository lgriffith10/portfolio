import { RouterProvider } from 'react-router-dom';
import { router } from '@/router';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const App: React.FC = () => {
  const [coords, setCoords] = useState<{ 
    clientX: number, 
    clientY: number
  }>({
    clientX: 0,
    clientY: 0,
  });
  const [launch, setLaunch] = useState<boolean>(false);

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
        className="h-[15px] w-[15px] rounded-full bg-black"
        animate={{
          x: coords.clientX,
          y: coords.clientY
        }}
      />
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  )
}
