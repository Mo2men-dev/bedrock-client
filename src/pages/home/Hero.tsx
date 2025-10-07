import { motion, useMotionValue, useTransform } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

const heroHeadersArray = [
	"Study Notes",
	"Todos",
	"Mind Maps",
	"Project Plans",
	"Creative Writing",
	"Spark Notes",
];

export function ChaosBall({ children }: { children?: React.ReactNode }) {
	const chaosRef = useRef<HTMLDivElement>(null);
	const images = ["/chaos1.png", "/chaos2.png", "/chaos3.png", "/chaos4.png", "/empty_head.png"];

	useEffect(() => {
		const interval = setInterval(() => {
			images.forEach((img) => {
				const image = new Image();
				image.src = img;
			});

			const randomImage = images[Math.floor(Math.random() * (images.length - 1))];
			if (chaosRef.current) {
				chaosRef.current.style.backgroundImage = `url(${randomImage})`;
				chaosRef.current.style.backgroundSize = "cover";
				chaosRef.current.style.backgroundPosition = "center";
			}
		}, 400);

		return () => clearInterval(interval); // Cleanup on unmount
	}, []);

	return (
		<motion.div
			ref={chaosRef}
			style={{
				backgroundImage: 'url("/chaos1.png")',
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
			className="relative text-yellow-400 font-semibold h-1/2 select-none aspect-square rounded-full bg-yellow-200 text-shadow-black text-shadow-md flex flex-col items-center justify-center">
			{children}
		</motion.div>
	);
}

function CircleItem({
	indx,
	item,
	setHeroHeader,
}: {
	indx: number;
	item: string;
	setHeroHeader: React.Dispatch<React.SetStateAction<string>>;
}) {
	const angle = useMotionValue(indx * (360 / 10));
	const transform = useTransform(angle, (a) => `rotate(${a}deg) translate(18rem) rotate(-${a}deg)`);

	return (
		<motion.div
			initial={{
				opacity: 0,
				translate: "0 1rem",
			}}
			animate={{
				opacity: 1,
				translate: 0,
				transition: {
					delay: 1 * indx * (2 / (heroHeadersArray.length - 1)),
				},
			}}
			className="absolute font-bold h-10 z-30 flex justify-center"
			style={{ transform }}>
			<motion.span
				animate={{
					rotate: ["-10deg", "10deg", "-10deg"],
					transition: { repeat: Infinity, ease: "linear", duration: 2 },
				}}
				className="absolute p-2 bg-white text-nowrap text-sm"
				onMouseEnter={() => {
					setHeroHeader(item);
				}}
				onMouseLeave={() => {
					setHeroHeader("CHOAS");
				}}>
				{item}
			</motion.span>
		</motion.div>
	);
}

function Hero() {
	const [heroHeader, setHeroHeader] = useState("CHOAS");
	return (
		<section
			id="hero"
			className="relative z-10 w-full h-screen flex flex-col font-(family-name:--hero-font) items-center gap-2 ">
			<motion.div
				initial={{ translateY: 20 }}
				animate={{ translateY: 0, transition: { duration: 1 } }}
				className="absolute h-1/3 flex flex-col justify-center gap-2 text-yellow-200">
				<motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-bold text-5xl">
					Bedrock.
				</motion.h1>
				<h2 className="flex gap-2">
					{["Write.", "Structure.", "Organize."].map((word, i) => (
						<motion.span
							key={word}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1 + i * 0.5 }}>
							{word}
						</motion.span>
					))}
				</h2>
			</motion.div>
			<div className="relative w-full h-full flex justify-center items-center">
				<div className="w-full h-full flex items-center justify-center">
					<ChaosBall>
						<h1 className="text-6xl">ORGANIZE</h1>
						<h4 className="text-2xl italic text-pink-400 underline">Your</h4>
						<h1
							className={`flex items-center transition-all text-3xl ${
								heroHeader !== "CHOAS" ? "text-white" : "text-yellow-400"
							}`}>
							{heroHeader.toUpperCase()}
						</h1>
					</ChaosBall>
				</div>
				<div
					style={{
						backgroundImage: 'url("/empty_head.png")',
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						backgroundSize: "contain",
					}}
					className="absolute w-full h-full top-1/4 left-0"></div>{" "}
				{heroHeadersArray.map((item, indx) => {
					return <CircleItem key={indx} indx={indx} item={item} setHeroHeader={setHeroHeader} />;
				})}
			</div>
		</section>
	);
}

export default Hero;
