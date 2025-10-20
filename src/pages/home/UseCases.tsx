import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";

const heroHeadersArray = [
	["Study Notes", "/study_notes.svg"],
	["Todos", "/todos.svg"],
	["Mind Maps", "/mind_maps.svg"],
	["Project Plans", "/project_plans.svg"],
	["Creative Writing", "/creative_writing.svg"],
	["Spark Notes", "/spark_notes.svg"],
];

function UseCases() {
	const [heroHeaderIndx, setHeroHeaderIndx] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setHeroHeaderIndx((prev) => (prev + 1) % heroHeadersArray.length);
		}, 4000);

		return () => clearInterval(interval);
	}, []);
	return (
		<section className="h-screen flex">
			<div className="flex flex-col flex-1 justify-center text-purple-300 max-sm:items-center max-sm:gap-4">
				<h1 className="font-bold text-8xl max-md:text-6xl">Organize</h1>
				<h3 className="font-bold text-xl italic">Your</h3>
				<motion.div className="flex flex-col perspective-midrange perspective-origin-left text-4xl font-bold">
					<AnimatePresence mode="wait">
						<motion.span
							key={
								heroHeadersArray[
									heroHeaderIndx - 1 < 0 ? heroHeadersArray.length - 1 : heroHeaderIndx - 1
								][0]
							}
							initial={{ translateY: 0, opacity: 0.6, rotateX: 45 }}
							animate={{ opacity: 0, rotateX: 90 }}
							transition={{ duration: 2, ease: "anticipate" }}>
							{
								heroHeadersArray[
									heroHeaderIndx - 1 < 0 ? heroHeadersArray.length - 1 : heroHeaderIndx - 1
								][0]
							}
						</motion.span>
					</AnimatePresence>
					<AnimatePresence mode="wait">
						<motion.span
							key={heroHeadersArray[heroHeaderIndx][0]}
							initial={{ opacity: 1, rotateX: 0 }}
							animate={{ translateY: -40, opacity: 0.6, rotateX: 45 }}
							transition={{ duration: 2, ease: "anticipate" }}>
							{heroHeadersArray[heroHeaderIndx][0]}
						</motion.span>
					</AnimatePresence>
					<AnimatePresence mode="wait">
						<motion.span
							key={heroHeadersArray[(heroHeaderIndx + 1) % heroHeadersArray.length][0]}
							initial={{ opacity: 0.6, rotateX: -45 }}
							animate={{ translateY: -40, opacity: 1, rotateX: 0 }}
							transition={{ duration: 2, ease: "anticipate" }}>
							{heroHeadersArray[(heroHeaderIndx + 1) % heroHeadersArray.length][0]}
						</motion.span>
					</AnimatePresence>
					<AnimatePresence mode="wait">
						<motion.span
							key={heroHeadersArray[(heroHeaderIndx + 2) % heroHeadersArray.length][0]}
							initial={{ opacity: 0, rotateX: -90 }}
							animate={{ translateY: -40, opacity: 0.6, rotateX: -45 }}
							transition={{ duration: 2, ease: "anticipate" }}>
							{heroHeadersArray[(heroHeaderIndx + 2) % heroHeadersArray.length][0]}
						</motion.span>
					</AnimatePresence>
				</motion.div>
			</div>
			<div className="flex-1 flex justify-center items-center relative max-sm:hidden">
				<AnimatePresence mode="wait">
					<motion.img
						key={heroHeadersArray[heroHeaderIndx][1]}
						initial={{ translateY: 40, opacity: 0 }}
						animate={{
							translateY: 0,
							opacity: 1,
							transition: { duration: 1.5, ease: "anticipate" },
						}}
						exit={{
							translateY: -40,
							opacity: 0,
							transition: { duration: 0.5, ease: "anticipate" },
						}}
						className="w-1/3 max-lg:w-1/2"
						src={heroHeadersArray[(heroHeaderIndx + 1) % heroHeadersArray.length][1]}
						alt=""
					/>
				</AnimatePresence>
			</div>
		</section>
	);
}

export default UseCases;
