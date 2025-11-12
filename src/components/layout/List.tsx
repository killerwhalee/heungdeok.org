import { cn } from '@/lib/utils';
import type React from 'react';

export function UnorderedList({
	children,
	className,
	...props
}: React.ComponentProps<'ul'>) {
	return (
		<ul
			className={cn('my-4 ml-6 list-disc', className)}
			{...props}
		>
			{children}
		</ul>
	);
}

export function OrderedList({
	children,
	className,
	...props
}: React.ComponentProps<'ol'>) {
	return (
		<ol
			className={cn('my-4 ml-6 list-decimal', className)}
			{...props}
		>
			{children}
		</ol>
	);
}

export function ListItem({
	children,
	className,
	...props
}: React.ComponentProps<'li'>) {
	return (
		<li
			className={cn('', className)}
			{...props}
		>
			{children}
		</li>
	);
}
