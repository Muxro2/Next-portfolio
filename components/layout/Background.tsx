import { motion } from 'framer-motion';

export default function Background() {

	return (
		<>
		  <div className="fixed w-screen h-screen overflow-hidden -z-1">
        <motion.div
          className="absolute w-[200vw] h-[200vh] bg-radial from-[#222] to-[#000]"
          animate={{ y: [0,  "-50%", 0]}}
          transition={{
            y: { repeat: Infinity, duration: 10, ease: "easeOut" },
          }}
        />
        <motion.div
          className="absolute right-0 w-[200vw] h-[200vh] bg-radial from-[#211] to-transparent"
          animate={{ y: ["-50%",  0, "-50%"]}}
          transition={{
            y: { repeat: Infinity, duration: 10, ease: "easeOut" },
          }}
        />
      </div>
		</>
	)
}