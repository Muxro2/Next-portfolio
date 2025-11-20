"use client"
import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image';

import TextWheel from '@/components/ui/TextWheel'

export default function Hero() {
  const controls = useAnimationControls();
  
  function handleClick() {
    controls.start("hide");
  }

  useEffect(() => {
    controls.start("fadeIn");
  }, []);

	return (
		<> 
      <div className="w-full p-5 flex flex-col">
      <div className="flex items-center gap-4">
      <div className="h-[42px] aspect-1/4 bg-red-500 rounded-[6_0_0_6]" />
        
        <motion.h2
          className="text-[48px] text-bold text-red-500"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Mo
        </motion.h2>
      </div>
        <motion.div
          className="h-[34px] text-[24px] flex gap-2"
          animate={{ opacity: [0, 0, 1] }}
          transition={{ duration: 0 }}
        >
          <h1 className="pb-4">I'm a </h1>
        <TextWheel texts={["Frontend Developer", "UI/UX Engineer", "Friend :)"]}/>
        </motion.div>

        {/* Floating Icons */}
        <div className="w-full mt-16 flex justify-evenly">
          <motion.div
            className="relative w-[20%] aspect-1/1 "
            animate={{ opacity: [0, 0, 0, 1], y: [0, 6, 0] }}
            transition={{
              opacity: { duration: 4 },
              y: { repeat: Infinity, ease: "easeInOut", duration: 4 },
            }}
          >
            <Image src="/framer.svg" alt="M" fill />
          </motion.div>

          <motion.div
            className="relative w-[20%] aspect-1/1 "
            animate={{ opacity: [0, 0, 0, 1], y: [10, 4, 10] }}
            transition={{
              opacity: { duration: 4 },
              y: { repeat: Infinity, ease: "easeInOut", duration: 4 },
            }}
          >
            <Image src="/tailwind.svg" alt="M" fill />
          </motion.div>

          <motion.div
            className="relative w-[20%] aspect-1/1"
            animate={{ opacity: [0, 0, 0, 1], y: [0, 6, 0] }}
            transition={{
              opacity: { duration: 4 },
              y: { repeat: Infinity, ease: "easeInOut", duration: 4 },
            }}
          >
            <Image src="/react.svg" alt="M" fill />
          </motion.div>
        </div>

        {/* Button */}
        <motion.button
          className="mt-16 px-8 py-4 text-[18px] border-1 border-white/10 shadow-xl rounded-full"
          onClick={() => handleClick()}
          variants={{
            initial: {
              opacity: 0,
            },
            fadeIn: {
              opacity: [0, 0, 0, 0, 1],
              transition: { duration: 5 },
            },
            hide: {
              opacity: 0,
            },
          }}
          initial="initial"
          animate={controls}
        >
          See My Work
        </motion.button>
      </div>
		</>
	)
}