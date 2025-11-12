import type React from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

export function Title({
	children,
	className,
	...props
}: React.ComponentProps<'h1'>) {
	return (
		<>
			<h1
				className={cn(
					'space-y-4 mb-4 scroll-m-20 text-4xl font-extrabold tracking-tight text-balance',
					className
				)}
				{...props}
			>
				{children}
			</h1>
			<Separator className="my-4" />
		</>
	);
}

export function SubTitle({
	children,
	className,
	...props
}: React.ComponentProps<'h2'>) {
	return (
		<h2
			className={cn(
				'mb-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
				className
			)}
			{...props}
		>
			{children}
		</h2>
	);
}

export function Heading({
	children,
	className,
	...props
}: React.ComponentProps<'h3'>) {
	return (
		<h3
			className={cn(
				'mt-4 mb-2 scroll-m-20 text-2xl font-semibold tracking-tight',
				className
			)}
			{...props}
		>
			{children}
		</h3>
	);
}

export function Paragraph({
	children,
	className,
	...props
}: React.ComponentProps<'p'>) {
	return (
		<p
			className={cn('leading-8', className)}
			{...props}
		>
			{children}
		</p>
	);
}

export function BlockQuote({
	children,
	className,
	...props
}: React.ComponentProps<'blockquote'>) {
	return (
		<blockquote
			className={cn(
				'my-8 border-l-6 pl-6 text-lg font-semibold italic',
				className
			)}
			{...props}
		>
			{children}
		</blockquote>
	);
}
