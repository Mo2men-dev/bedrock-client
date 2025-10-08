import { motion } from "motion/react";
import TitleAndText from "../../components/layout-components/TitleAndText";

const pillars = [
	{
		header: "Build Your Knowledge.",
		text: "From quick notes to complex networks, structure your ideas, notes and work in one reliable place.",
		color: "text-orange-300",
	},
	{
		header: "Solid. Simple. Powerful.",
		text: "Bedrock gives you a simple and solid toolset to organize your thoughts. But powerfull enough to handle the complexity of your ideas.",
		color: "text-green-300",
	},
	{
		header: "Your thoughts are yours only.",
		text: "Bedrock stores your notes privately, so only you can access them.",
		color: "text-blue-300",
	},
];

function Pillars() {
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
				<div className="relative flex-1 h-full w-full max-lg:hidden flex justify-center items-center text-white"></div>
			</div>
		</section>
	);
}

export default Pillars;
