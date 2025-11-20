import { motion, useAnimationControls } from 'framer-motion';

export default function TextWheel({ texts }: {texts: string[]}) {
	const wheelController = useAnimationControls();

  const wheelVariants = {
		"initial": { y: 0 },
		"down": { y: `-${100/texts.length}%`, transition: { duration: 5 } }
	}
	
	return (
		<div className="h-[37px] flex flex-col overflow-hidden">
			<motion.div
				variants={wheelVariants}
				initial="initial"
				animate="down"
			>
			{texts.map((text, i) => (
			<h1 key={i}>{text}</h1>
			))}
			</motion.div>
		</div>
	)
}