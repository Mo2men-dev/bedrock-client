import { ReactNode, useEffect } from "react";
import TitleAndText from "../../components/layout-components/TitleAndText";

const features = [
	{
		title: "Intuitive Document Editing",
		description:
			"Bedrock uses a WYSIWG editor that makes it super easy and intuitive to write and see what the final result will look like.",
		color: "yellow",
	},
	{
		title: "Links",
		description:
			"Create links between notes. Link between any group of concepts, people, ideas, places, events. To create your on personal Wikipedia.",
		color: "lightgreen",
	},
	{
		title: "Tags",
		description: "Add tags to your notes to better organize and search for them.",
		color: "lightblue",
	},
];

function GlowingCard({
	className,
	glowColor = "#555",
	children,
}: {
	className?: string;
	glowColor?: string;
	children: ReactNode;
}) {
	useEffect(() => {
		const allCards = document.querySelectorAll(".glowing-card");

		window.addEventListener("mousemove", (e) => {
			allCards.forEach((el) => {
				const blob = el.querySelector(".blob");
				const fblob = el.querySelector(".fakeblob");

				const rec = fblob?.getBoundingClientRect();

				if (rec) {
					blob?.animate(
						[
							{
								transform: `translate(${e.clientX - rec.left - rec.width / 2}px,${
									e.clientY - rec.top - rec.height / 2
								}px)`,
							},
						],
						{
							// duration: 300,
							fill: "forwards",
						}
					);
				}
			});
		});
	}, []);

	return (
		<div className="glowing-card relative bg-[rgba(128 128 128 / 0.2)] p-[2px] z-10 rounded-2xl overflow-hidden transition-all">
			<div className={`rounded-2xl h-full ${className}`}>{children}</div>
			<div
				style={{
					backgroundColor: glowColor,
				}}
				className={`blob absolute blur-3xl top-0 left-0 w-full h-full rounded-full -z-10`}></div>
			<div className="fakeblob absolute invisible top-0 left-0 w-full h-full -z-10 rounded-full"></div>
		</div>
	);
}

function Features() {
	return (
		<section className="text-white">
			<h1 className="w-full text-center text-4xl font-bold mb-18">Features</h1>
			<div className="flex flex-wrap gap-4 [&_h2]:text-xl [&_h2]:font-semibold [&_p]:text-[#aaa] [&_div]:flex-1 [&_div]:gap-4 max-lg:flex-col max-md:[&_div]:w-full">
				{features.map((feature, indx) => {
					return (
						<GlowingCard
							key={indx}
							className={"p-4 bg-[#222] flex flex-col"}
							glowColor={feature.color}>
							<TitleAndText header={feature.title} text={feature.description} />
						</GlowingCard>
					);
				})}
			</div>
		</section>
	);
}

export default Features;
