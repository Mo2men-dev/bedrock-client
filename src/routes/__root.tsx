import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
	component: RootLayout,
});

function RootLayout() {
	return (
		<div className="bg-dark-bg text-dark-primary font-(family-name:--home-font)">
			<Outlet />
			<TanStackRouterDevtools />
		</div>
	);
}

export default RootLayout;
