"use client"
import Image from "next/image";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <>
    <div className="fixed w-screen h-screen overflow-hidden -z-1">
    <motion.div className="w-[200vw] h-[200vh] bg-radial from-[#311] to-[#0a0a0a]"
      animate={{y: [0,"-50%",0]}}
      transition={{ y: { repeat: Infinity, duration: 20, ease: "easeInOut" } }}
      />
    </div>

    <h1 className="pl-4 pt-4 pb-6 text-[42px]  text-red-500">M<span className="text-white">R<span className="text-[75%]">OSHID</span></span></h1>
    <div className="w-[90%] py-16 mx-auto flex flex-col justify-center items-center bg-white/1 border-1 border-white/10 shadow-xl rounded-4xl">
      <motion.h2 className="w-[50%] text-[24px] text-center text-bold"
        animate={{ opacity: [0,1] }}
        transition={{ duration: 1 }}
        >Hi, I'm Mo -</motion.h2>
      <motion.h2 className="w-[75%] text-[18px] text-center"
        animate={{ opacity: [0,0,1] }}
        transition={{ duration: 3 }}>I Build Interactive Web Experiences</motion.h2>


      <div className="w-full mt-16 flex justify-evenly">
      <motion.div className="relative w-[20%] aspect-1/1 "
        animate={{ opacity: [0,0,0,1], y: [0,6,0] }}
        transition={{ opacity: { duration: 4 },y: { repeat: Infinity, ease: "easeInOut", duration: 4 } }}>
      <Image
        src="/framer.svg"
        alt="M"
        fill
        />
      </motion.div>

      <motion.div className="relative w-[20%] aspect-1/1 "
        animate={{ opacity: [0,0,0,1], y: [10,4,10] }}
        transition={{ opacity: { duration: 4 },y: { repeat: Infinity, ease: "easeInOut", duration: 4 } }}>
      <Image
        src="/tailwind.svg"
        alt="M"
        fill
        />
      </motion.div>

      <motion.div className="relative w-[20%] aspect-1/1"
        animate={{ opacity: [0,0,0,1], y: [0,6,0] }}
        transition={{ opacity: { duration: 4 },y: { repeat: Infinity, ease: "easeInOut", duration: 4 } }}>
      <Image
        src="/react.svg"
        alt="M"
        fill
        />
      </motion.div>
      </div>
        
      
      <motion.button className="mt-16 px-8 py-4 text-[18px] border-1 border-white/10 shadow-xl rounded-full"
        animate={{ opacity: [0,0,0,0,1] }}
        transition={{ duration: 5 }}
        >See My Work</motion.button>
    </div>
    </>
  );
}
