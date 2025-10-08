import { HTMLMotionProps, motion } from "motion/react";

function TitleAndText({
	header,
	text,
	props,
}: {
	header: string;
	text: string;
	props?: { className?: string; motionProps?: HTMLMotionProps<"div"> };
}) {
	return (
		<motion.div className={`${props?.className}`} {...props?.motionProps}>
			<h2 className="text-3xl font-bold max-sm:text-2xl">{header}</h2>
			<p className="text-lg max-sm:text-md">{text}</p>
		</motion.div>
	);
}

export default TitleAndText;
