import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/__auth/__auth_layout")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="h-screen flex flex-col items-center justify-center">
			<Outlet />
		</div>
	);
}
