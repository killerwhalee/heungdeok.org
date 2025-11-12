import { Heading, Paragraph, Title } from '@/components/layout/Typography';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { ListItem, UnorderedList } from '@/components/layout/List';

export default function Location() {
	return (
		<>
			<Title>오시는 길</Title>
			<img
				src="/images/Center/location.png"
				alt="location image"
				className="my-4"
			/>
			<div className="container mx-auto flex h-14 items-center justify-between">
				<Paragraph className="text-xl font-bold">
					(16954) 경기도 용인시 기흥구 흥덕2로65번길 1-12, 1층
				</Paragraph>
				<div className="flex items-center space-x-4">
					<Link
						to="https://naver.me/G4GlJ2k5"
						target="_blank"
					>
						<Button
							size="sm"
							className="bg-green-600"
						>
							네이버 지도
							<ArrowUpRight />
						</Button>
					</Link>
					<Link
						to="https://place.map.kakao.com/14499068"
						target="_blank"
					>
						<Button
							size="sm"
							className="bg-yellow-500"
						>
							카카오 지도
							<ArrowUpRight />
						</Button>
					</Link>
				</div>
			</div>

			<Separator className="my-4" />

			<div className="my-4">
				<Heading>주변 버스정류소 정보</Heading>
				<UnorderedList>
					<ListItem>흥덕마을4단지(56319): 마을버스 28-2, 28-3, 58-1</ListItem>
					<ListItem>흥덕마을4단지(56320): 마을버스 28-2, 58-1</ListItem>
					<ListItem>흥덕마을3단지(56317): 마을버스 28-2, 28-3, 58-1</ListItem>
					<ListItem>흥덕마을3단지(56318): 마을버스 28-2, 58-1</ListItem>
					<ListItem>흥덕초등학교(56322): 마을버스 28-2, 28-3, 58-1</ListItem>
					<ListItem>흥덕초등학교(56321): 마을버스 28-2, 58-1</ListItem>
					<ListItem>
						흥덕3단지.흥덕이마트후문(47867): 마을버스 28-1, 28-2, 28-3, 58-1
					</ListItem>
				</UnorderedList>
			</div>

			<Separator className="my-4" />

			<div className="my-4">
				<Heading>연락처</Heading>
				<UnorderedList>
					<ListItem>전화번호: 031-213-7773</ListItem>
					<ListItem>이메일: heungdeok1004@hanmail.net</ListItem>
				</UnorderedList>
			</div>
		</>
	);
}
