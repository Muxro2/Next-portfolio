"use client";
import { useScroll, motion, useTransform } from "framer-motion";

import Image from 'next/image';

import Background from '@/components/layout/Background';
import Header from '@/components/layout/Header';
import Hero from '@/components/layout/Hero';

export default function Home() {
  
  const {scrollYProgress} = useScroll()
  const background = useTransform(scrollYProgress,
  [0,1],
  [0, "100vw"]
  )

  return (
    <>

      <Background />

      <Header/>
      <Hero />

      {/* Bio/view based animation */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 3 }}
      >
        <Image 
          src="/avatar.png"
          alt="Me"
          width={100}
          height={200}
        />
        I’m a front-end developer who builds interactive, user-focused web
        experiences using React, Tailwind, and modern animation techniques.
      </motion.div>

      {/* Scroll Animation */}
      <motion.div className="w-10 h-50 bg-white origin-top" 
        style={{
          scaleY: scrollYProgress,
          margin: background
        }}/>
      
      {/* Spacer */}
      <div className="w-full h-[100vh]" />
      
    </>
  );
}
