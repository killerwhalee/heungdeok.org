import type { ReactNode } from 'react';

interface PageContainerProps {
	children: ReactNode;
	className?: string;
}

export default function PageContainer({
	children,
	className,
}: PageContainerProps) {
	return (
		<main
			className={`container mx-auto max-w-5xl px-4 py-12 ${className ?? ''}`}
		>
			{children}
		</main>
	);
}
