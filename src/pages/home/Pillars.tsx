import { motion } from "motion/react";
import TitleAndText from "../../components/layout-components/TitleAndText";
import { useState } from "react";

const pillars = [
	{
		header: "Build Your Knowledge.",
		text: "From quick notes to complex networks, structure your ideas, notes and work in one reliable place.",
		color: "text-orange-300",
		img: "/pillars1.png",
	},
	{
		header: "Solid. Simple. Powerful.",
		text: "Bedrock gives you a simple and solid toolset to organize your thoughts. But powerfull enough to handle the complexity of your ideas.",
		color: "text-green-300",
		img: "/pillars2.png",
	},
	{
		header: "Your thoughts are yours only.",
		text: "Bedrock stores your notes privately, so only you can access them.",
		color: "text-blue-300",
		img: "/pillars3.png",
	},
];

function Pillars() {
	const [pillarHover, setPillarHover] = useState<number | null>(null);

	return (
		<section className="relative py-12 flex flex-col">
			<h1 className="w-full text-center text-4xl font-bold mb-18 text-white">
				Why{" "}
				<span className="text-yellow-200 underline font-(family-name:--hero-font)">Bedrock</span>?
			</h1>
			<div className="flex w-full">
				<div className="flex flex-col flex-1 justify-center">
					{pillars.map((pillar, indx) => {
						const delay = indx * 0.5;
						return (
							<div key={indx}>
								<div
									onMouseEnter={() => {
										setPillarHover(indx);
										console.log(pillars[indx].img);
									}}
									onMouseLeave={() => setPillarHover(null)}
									className="hover:bg-[#222] p-4 transition-all rounded-md cursor-default">
									<TitleAndText
										header={pillar.header}
										text={pillar.text}
										props={{
											className: `${pillar.color}`,
											motionProps: {
												initial: {
													translateY: 10,
													opacity: 0,
												},
												whileInView: {
													translateY: 0,
													opacity: 1,
													transition: {
														duration: 0.5,
														ease: "linear",
														delay,
													},
												},
												viewport: { once: true },
											},
										}}
									/>
								</div>
								{indx !== pillars.length - 1 ? (
									<>
										<br />
										<motion.hr
											initial={{ width: 0 }}
											whileInView={{
												width: "100%",
												transition: {
													duration: 1,
													ease: "easeOut",
												},
											}}
											viewport={{ once: true }}
											className="text-[#333]"
										/>
										<br />
									</>
								) : null}
							</div>
						);
					})}
				</div>
				<div className="relative flex-1 max-lg:hidden flex justify-center items-center text-white p-8">
					<div
						style={{
							backgroundImage: `url(${pillarHover !== null ? pillars[pillarHover].img : ""})`,
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
						}}
						className="w-full h-full flex justify-center items-center overflow-hidden transition-all rounded-xl"></div>
				</div>
			</div>
		</section>
	);
}

export default Pillars;
