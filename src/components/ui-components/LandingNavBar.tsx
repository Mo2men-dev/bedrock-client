import { Link } from "@tanstack/react-router";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

function NavBar() {
	const { scrollY } = useScroll();
	const [scrolled, setScrolled] = useState(false);

	useMotionValueEvent(scrollY, "change", (latest) => {
		setScrolled(latest > 0);
	});
	return (
		<nav className="fixed left-0 w-full z-40 p-2 flex items-center justify-center font-(family-name:--hero-font)">
			<div
				className={`relative w-1/4 h-full py-2 px-4 rounded-2xl flex items-center transition-all ${scrolled ? "backdrop-blur-lg" : ""} [&>*]:flex-1 max-sm:w-full max-lg:w-1/2`}>
				<ul className="flex gap-2">
					<li>Preview</li>
				</ul>
				<Link to="/">
					<img src="/logo.png" alt="Bedrock Logo" className="w-1/4 m-auto" />
				</Link>
				<Link className="text-end" to="/login">
					Account
				</Link>
			</div>
		</nav>
	);
}

export default NavBar;
