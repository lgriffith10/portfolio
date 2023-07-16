import { Button } from '@/components/buttons/Button/Button';
import { Page } from '@/components/layouts';
import { Heading } from '@/components/typography/Heading/Heading';
import { Text } from'@/components/typography/Text/Text';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { step } from '@/store';

export const Intro: React.FC = () => {
  const [launch, setLaunch] = useState<boolean>(false);
  const navigate = useNavigate();
  const [value, setValue] = useAtom(step)

  useEffect(() => {
    setValue(0);
  }, [setValue])

  useEffect(() => {
    if (launch){
      setTimeout(() => {
        navigate('/home');
      }, 2000)
    }
  }, [launch, navigate])

  return (
    <Page>
      <motion.div
        className='fixed bg-black'
        initial={{ height: '100%', width: '100%', top: 0 }}
        animate={{ height: '0%', top: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      />

      {launch && 
        <motion.div
          className='fixed bg-black z-[20]'
          initial={{ height: '0%', width: '100%', top: 0 }}
          animate={{ height: '100%', top: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        />
      }

      <motion.div 
        className="flex flex-col justify-center items-center h-full"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1}}
          transition={{ duration: 0.3, delay: 1.5 }}
        >
          <Heading as="h2" variant="primary">
            Luciano GRIFFITH
          </Heading>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.8 }}
        >
          <Text variant="primary">
            French front-end developer
          </Text>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 2.1 }}
          className='mt-[2rem]'
        >
          <Button background="white" onClick={() => setLaunch(true)}>
            Discover
          </Button>
        </motion.div>
      </motion.div>
    </Page>
  )
}
