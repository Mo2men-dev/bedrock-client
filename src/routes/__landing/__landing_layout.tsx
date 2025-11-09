import { Outlet, createFileRoute } from "@tanstack/react-router";
import NavBar from "../../components/ui-components/LandingNavBar";

export const Route = createFileRoute("/__landing/__landing_layout")({
	component: LandingLayout,
});

function LandingLayout() {
	return (
		<div className="relative w-full flex flex-col px-32 bg-[#111] font-(family-name:--home-font) max-lg:p-8">
			<NavBar />
			<Outlet />
		</div>
	);
}

export default LandingLayout;
