import { Link, NavLink } from 'react-router-dom';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuContent,
	NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
			<div className="container mx-auto flex h-14 items-center justify-between">
				<div className="flex items-center space-x-16">
					{/* Logo */}
					<Link
						to="/"
						className="text-xl font-semibold tracking-tight"
					>
						흥덕지역아동센터
					</Link>

					{/* Navigation Menu */}
					<NavigationMenu viewport={false}>
						<NavigationMenuList className="flex-wrap">
							{/* 홈 */}
							<NavigationMenuItem>
								<NavLink
									to="/"
									className={({ isActive }) =>
										cn(
											'px-3 py-2 text-sm font-medium hover:text-primary transition-colors',
											isActive ? 'text-primary' : 'text-muted-foreground'
										)
									}
								>
									홈
								</NavLink>
							</NavigationMenuItem>

							{/* 센터소개 Dropdown */}
							<NavigationMenuItem>
								<NavigationMenuTrigger>센터 소개</NavigationMenuTrigger>
								<NavigationMenuContent>
									<div className="grid gap-2 p-2 w-[200px]">
										<MenuLink
											to="/center/facilities"
											label="내부 시설 안내"
										/>
										<MenuLink
											to="/center/history"
											label="센터 연혁"
										/>
										<MenuLink
											to="/center/staff"
											label="종사자 소개"
										/>
										<MenuLink
											to="/center/location"
											label="오시는 길"
										/>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>

							{/* 운영 안내 */}
							<NavigationMenuItem>
								<NavLink
									to="/guide/operation"
									className={({ isActive }) =>
										cn(
											'px-3 py-2 text-sm font-medium hover:text-primary transition-colors',
											isActive ? 'text-primary' : 'text-muted-foreground'
										)
									}
								>
									운영 안내
								</NavLink>
							</NavigationMenuItem>

							{/* 프로그램 안내 Dropdown */}
							<NavigationMenuItem>
								<NavigationMenuTrigger>프로그램 안내</NavigationMenuTrigger>
								<NavigationMenuContent>
									<div className="grid gap-2 p-2 w-[200px]">
										<MenuLink
											to="/programs/overview"
											label="프로그램 개요"
										/>
										<MenuLink
											to="/programs/active"
											label="진행 중인 프로그램"
										/>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>

							{/* 서비스 신청 안내 */}
							<NavigationMenuItem>
								<NavLink
									to="/services/application"
									className={({ isActive }) =>
										cn(
											'px-3 py-2 text-sm font-medium hover:text-primary transition-colors',
											isActive ? 'text-primary' : 'text-muted-foreground'
										)
									}
								>
									서비스 신청 안내
								</NavLink>
							</NavigationMenuItem>

							{/* 후원 안내 */}
							<NavigationMenuItem>
								<NavLink
									to="/support/donation"
									className={({ isActive }) =>
										cn(
											'px-3 py-2 text-sm font-medium hover:text-primary transition-colors',
											isActive ? 'text-primary' : 'text-muted-foreground'
										)
									}
								>
									후원 안내
								</NavLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>

				{/* Contact Button */}
				<Button
					variant="outline"
					size="sm"
				>
					수상한 버튼
				</Button>
			</div>
		</header>
	);
}

/* Helper component for dropdown items */
function MenuLink({ to, label }: { to: string; label: string }) {
	return (
		<NavigationMenuLink asChild>
			<Link
				to={to}
				className="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
			>
				{label}
			</Link>
		</NavigationMenuLink>
	);
}
