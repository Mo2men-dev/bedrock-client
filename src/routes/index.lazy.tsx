import { ReactNode, useEffect } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import Hero from "../pages/home/Hero";
import Pillars from "../pages/home/Pillars";

export const Route = createLazyFileRoute("/")({
	component: Index,
});

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
							duration: 300,
							fill: "forwards",
						}
					);
				}
			});
		});
	}, []);

	return (
		<div className="glowing-card relative bg-[rgba(128 128 128 / 0.2)] p-[2px] z-10 rounded-2xl overflow-hidden">
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

function Index() {
	return (
		<main className="relative w-full flex flex-col px-32 bg-[#111] font-(family-name:--home-font) overflow-x-hidden">
			<Hero />
			<Pillars />
			<section className="text-white">
				<h1 className="w-full text-center text-4xl font-bold my-18">Features</h1>
				<div className="flex flex-wrap gap-4 [&_h2]:text-xl [&_h2]:font-semibold [&_p]:text-[#aaa] [&_div]:flex-1 [&_div]:gap-4">
					<GlowingCard className={"p-4 bg-[#222] flex flex-col"} glowColor="yellow">
						<h2>Intuitive Document Editing</h2>
						<p>
							Bedrock uses a WYSIWG editor that makes it super easy and intuitive to write and see
							the what will the final result look like.
						</p>
					</GlowingCard>
					<GlowingCard className={"p-4 bg-[#222] flex flex-col"} glowColor="lightgreen">
						<h2>Links</h2>
						<p>
							Create links between notes. Link between any group of concepts, people, ideas, places,
							events. To create your on personal Wikipedia.
						</p>
					</GlowingCard>
					<GlowingCard className={"p-4 bg-[#222] flex flex-col"} glowColor="lightblue">
						<h2>Tags</h2>
						<p>Add tags to your notes to better organize and search for them.</p>
					</GlowingCard>
				</div>
			</section>
		</main>
	);
}

export default Index;
