import { Heading, Paragraph, Title } from '@/components/layout/Typography';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';

export default function Facilities() {
	return (
		<>
			<Title>내부 시설 안내</Title>

			<div className="my-4">
				<Heading>실내 아이뜰 정원</Heading>

				<Carousel
					opts={{
						align: 'start',
						loop: true,
					}}
					className="my-4"
				>
					<CarouselContent>
						<CarouselItem>
							<img
								src="/images/Center/facilities/facility-hall-1.jpeg"
								alt="아이뜰 정원 이미지 1"
							/>
						</CarouselItem>
						<CarouselItem>
							<img
								src="/images/Center/facilities/facility-hall-2.jpeg"
								alt="아이뜰 정원 이미지 2"
							/>
						</CarouselItem>
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>

				<Paragraph>
					모든 아이들이 자유롭게 이용할 수 있는 다목적 공간으로 독서, 보드게임,
					탁구, 자유놀이 등이 이루어집니다.
				</Paragraph>
			</div>

			<Separator className="my-4" />

			<div className="my-4">
				<Heading>나눔터 - 주 프로그램이 이루어지는 공간</Heading>

				<Carousel
					opts={{
						align: 'start',
						loop: true,
					}}
					className="my-4"
				>
					<CarouselContent>
						<CarouselItem>
							<img
								src="/images/Center/facilities/facility-yellow-1.jpeg"
								alt="나눔터 이미지 1"
							/>
						</CarouselItem>
						<CarouselItem>
							<img
								src="/images/Center/facilities/facility-yellow-2.jpeg"
								alt="나눔터 이미지 2"
							/>
						</CarouselItem>
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>

				<Paragraph>
					아이들이 주로 이용하는 곳으로 학습과 다양한 프로그램이 이루어지고
					있습니다.
				</Paragraph>
			</div>

			<Separator className="my-4" />

			<div className="my-4">
				<Heading>웃음터 - 힐링할 수 있는 곳</Heading>

				<Carousel
					opts={{
						align: 'start',
						loop: true,
					}}
					className="my-4"
				>
					<CarouselContent>
						<CarouselItem>
							<img
								src="/images/Center/facilities/facility-mint.jpeg"
								alt="웃음터 이미지 1"
							/>
						</CarouselItem>
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>

				<Paragraph>
					아이들이 가장 좋아하는 공간으로, 빈백 누워 편하게 쉬기도 하고,
					보드게임 및 다양한 놀이 도구를 통해서 관계성을 쌓아 가는 곳입니다.
				</Paragraph>
			</div>

			<Separator className="my-4" />

			<div className="my-4">
				<Heading>자람터 - 소그룹 수업 및 특별 프로그램실</Heading>

				<Carousel
					opts={{
						align: 'start',
						loop: true,
					}}
					className="my-4"
				>
					<CarouselContent>
						<CarouselItem>
							<img
								src="/images/Center/facilities/facility-brown.jpeg"
								alt="자람터 이미지 1"
							/>
						</CarouselItem>
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>

				<Paragraph>
					이곳에서는 피아노와 우쿨렐라를 배우기도 하고, 동아리활동과 소그룹
					학습실로 이용하고 있는 공간입니다. 아이들이 집중하기에 좋습니다.
				</Paragraph>
			</div>
		</>
	);
}
