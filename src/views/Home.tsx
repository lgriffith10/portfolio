import { Page } from '@/components/layouts';
import { useAtom } from 'jotai';
import { step } from '@/store';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heading } from '@/components/typography/Heading/Heading';

export const Home: React.FC = () => {
  const [value, setValue] = useAtom(step);

  useEffect(() => {
    setValue(1);
  }, [setValue])

  const typo = 'Developer';

  useEffect(() => {
    typo.split('').forEach((t: string) => console.log(t));
  }, []);

  return (
    <Page background="black">
      <div className="w-full h-full flex items-center">
        <div className="flex justify-between w-full">
          {typo.split('').map((letter: string, index: number) => 
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              key={index}
            >
              <Heading variant="description">
                {letter}
              </Heading>
            </motion.div>
          )}
        </div>
      </div>
    </Page>
  )
}