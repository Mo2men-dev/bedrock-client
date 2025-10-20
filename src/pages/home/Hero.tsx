import { motion } from "motion/react";
import { useEffect, useRef } from "react";

export function ChaosBall() {
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
			className="relative font-semibold h-1/2 select-none aspect-square rounded-full bg-yellow-200 text-shadow-black text-shadow-md flex flex-col items-center justify-center max-md:h-4/6"></motion.div>
	);
}

function Hero() {
	return (
		<section
			id="hero"
			className="relative z-10 w-full h-screen flex font-(family-name:--hero-font) items-center gap-2 max-md:flex-col max-md:justify-center min-md:overflow-hidden ">
			<motion.div className="flex flex-col gap-2 z-20 text-blue-300 flex-1 max-md:items-center">
				<motion.h1
					initial={{ translateY: 20, opacity: 0 }}
					animate={{ translateY: 0, opacity: 1, transition: { duration: 1 } }}
					className="font-bold text-8xl max-md:text-5xl">
					Bedrock
				</motion.h1>
				<h2 className="flex gap-2 font-semibold">
					{["Organize", "Your", "Chaos"].map((word, i) => (
						<motion.span
							key={word}
							className="whitespace-nowrap text-xl text-yellow-200"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1 + i * 0.5 }}>
							{word}
						</motion.span>
					))}
				</h2>
			</motion.div>
			<div className="relative w-full h-full flex justify-center items-center flex-1 max-md:order-first max-md:flex-2">
				<div className="w-full h-full flex items-center justify-center">
					<ChaosBall />
				</div>
				<div
					style={{
						backgroundImage: 'url("/empty_head.png")',
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						backgroundSize: "contain",
					}}
					className="absolute w-full h-full top-1/4 left-0 max-md:hidden"></div>
			</div>
		</section>
	);
}

export default Hero;
