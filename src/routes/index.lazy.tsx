import { createLazyFileRoute } from "@tanstack/react-router";
import Hero from "../pages/home/Hero";
import Pillars from "../pages/home/Pillars";
import Features from "../pages/home/Features";
import UseCases from "../pages/home/UseCases";

export const Route = createLazyFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<main className="relative w-full flex flex-col px-32 bg-[#111] font-(family-name:--home-font) max-lg:p-8">
			<Hero />
			<UseCases />
			<Pillars />
			<Features />
		</main>
	);
}

export default Index;
