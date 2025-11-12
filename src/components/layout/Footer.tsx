import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<footer className="border-t bg-stone-800 py-8">
			<div className="container mx-auto text-sm text-muted-foreground space-y-2">
				<h3 className="text-xl font-semibold">흥덕지역아동센터</h3>
				<p>
					경기도 용인시 기흥구 흥덕2로65번길 1-12, 1층 | 031-213-7773 |
					heungdeok1004@hanmail.net
				</p>
				<p>
					이 웹사이트는 PC 버전 Firefox 및 Chrome 브라우저에 최적화되어
					있습니다.
				</p>
				<p className="flex gap-4">
					© {new Date().getFullYear()} Chaemin Lim. All rights reserved.{' '}
					<Link
						to="https://github.com/killerwhalee"
						target="_blank"
						className="flex"
					>
						GitHub <ArrowUpRight className="size-5" />
					</Link>
				</p>
			</div>
		</footer>
	);
}
