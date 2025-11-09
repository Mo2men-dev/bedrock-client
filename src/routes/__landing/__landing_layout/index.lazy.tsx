import { createLazyFileRoute } from "@tanstack/react-router";
import Hero from "../../../pages/home/Hero";
import Pillars from "../../../pages/home/Pillars";
import Features from "../../../pages/home/Features";
import UseCases from "../../../pages/home/UseCases";

export const Route = createLazyFileRoute("/__landing/__landing_layout/")({
	component: Index,
});

function Index() {
	return (
		<main className="relative w-full flex flex-col">
			<Hero />
			<UseCases />
			<Pillars />
			<Features />
		</main>
	);
}

export default Index;
