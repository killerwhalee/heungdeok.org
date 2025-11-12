import { Heading, Title } from '@/components/layout/Typography';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ListItem, UnorderedList } from '@/components/layout/List';

export default function ActivePrograms() {
	return (
		<>
			<Title>진행 중인 프로그램</Title>

			<div className="my-4">
				<Heading>주간 돌봄에 이루어지는 프로그램</Heading>

				<div className="my-4 grid grid-cols-4 gap-4">
					<Card className="">
						<CardContent>
							<img
								src="/images/Programs/programs/program-day-basic.jpeg"
								alt=""
							/>
						</CardContent>
						<CardHeader className="content-center">
							<CardTitle>기초학습</CardTitle>
							<CardDescription>
								매일 초등생을 대상으로 돌봄교사,사회복무요원, 실습생 등과 함께
								기초학습 진행
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="">
						<CardContent>
							<img
								src="/images/Programs/programs/program-day-individual.jpeg"
								alt=""
							/>
						</CardContent>
						<CardHeader className="content-center">
							<CardTitle>수준 별 개별학습</CardTitle>
							<CardDescription>
								매일 아동 별 수준에 맞는 일대일 지도 (해당 아동)
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="">
						<CardContent>
							<img
								src="/images/Programs/programs/program-day-reading.jpeg"
								alt=""
							/>
						</CardContent>
						<CardHeader className="content-center">
							<CardTitle>독서 활동</CardTitle>
							<CardDescription>
								매주 월요일은 책 읽는 날!! 책을 읽고, 글을 쓰고 모두가 작가에요.
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="">
						<CardContent>
							<img
								src="/images/Programs/programs/program-day-english.jpeg"
								alt=""
							/>
						</CardContent>
						<CardHeader className="content-center">
							<CardTitle>초등 영어교실</CardTitle>
							<CardDescription>
								아동복지교사 (주 1회), 돌봄교사 (주 3회) 초등 영어수업
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="">
						<CardContent>
							<img
								src="/images/Programs/programs/program-day-art.jpeg"
								alt=""
							/>
						</CardContent>
						<CardHeader className="content-center">
							<CardTitle>신나는 미술교실</CardTitle>
							<CardDescription>
								매주 1회 전문 미술 강사와 함께 그리는 다양한 미술 활동
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="">
						<CardContent>
							<img
								src="/images/Programs/programs/program-day-pingpong.jpeg"
								alt=""
							/>
						</CardContent>
						<CardHeader className="content-center">
							<CardTitle>탁구교실</CardTitle>
							<CardDescription>
								매주 1회 전문 탁구 강사와 함께 진행하는 탁구 강의
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="">
						<CardContent>
							<img
								src="/images/Programs/programs/program-day-piano.jpeg"
								alt=""
							/>
						</CardContent>
						<CardHeader className="content-center">
							<CardTitle>피아노교실</CardTitle>
							<CardDescription>
								매주 1회 전문 피아노 강사와 함께 배우는 피아노 수업 (5명)
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="">
						<CardContent>
							<img
								src="/images/Programs/programs/program-day-ukulele.jpeg"
								alt=""
							/>
						</CardContent>
						<CardHeader className="content-center">
							<CardTitle>우쿨렐레교실</CardTitle>
							<CardDescription>
								매주 1회 전문 강사와 함께 배우는 우쿨렐레 수업 (5명)
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="">
						<CardContent>
							<img
								src="/images/Programs/programs/program-day-play.jpeg"
								alt=""
							/>
						</CardContent>
						<CardHeader className="content-center">
							<CardTitle>연극수업</CardTitle>
							<CardDescription>
								매주 1회 남부지원단 특기강사를 통해 연극수업 (초등학생 대상)
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="">
						<CardContent>
							<img
								src="/images/Programs/programs/program-day-culture.jpeg"
								alt=""
							/>
						</CardContent>
						<CardHeader className="content-center">
							<CardTitle>다양한 문화체험 활동</CardTitle>
							<CardDescription>
								영화관람, 박물관 견학 등 다양한 문화체험 활동
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="">
						<CardContent>
							<img
								src="/images/Programs/programs/program-day-free.jpeg"
								alt=""
							/>
						</CardContent>
						<CardHeader className="content-center">
							<CardTitle>자유놀이 활동</CardTitle>
							<CardDescription>
								보드게임, 퍼즐, 레고 활동 등 자유놀이 활동 진행
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="">
						<CardContent>
							<img
								src="/images/Programs/programs/program-day-camp.jpeg"
								alt=""
							/>
						</CardContent>
						<CardHeader className="content-center">
							<CardTitle>여름 및 겨울 캠프</CardTitle>
							<CardDescription>
								매년 2회 이상 여름 및 겨울 캠프 진행
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="">
						<CardContent>
							<img
								src="/images/Programs/programs/program-day-culturefest.jpeg"
								alt=""
							/>
						</CardContent>
						<CardHeader className="content-center">
							<CardTitle>흥덕 문화제</CardTitle>
							<CardDescription>
								매년 연말 한 해 동안 각자 배운 내용을 가지고 발표회 진행
							</CardDescription>
						</CardHeader>
					</Card>
				</div>
			</div>

			<Separator className="my-4" />

			<div className="my-4">
				<Heading>야간 돌봄에 이루어지는 프로그램</Heading>

				<div className="my-4 grid grid-cols-4 gap-4">
					<Card className="">
						<CardContent>
							<img
								src="/images/Programs/programs/program-night-math.jpeg"
								alt=""
							/>
						</CardContent>
						<CardHeader className="content-center">
							<CardTitle>청소년 수학교실</CardTitle>
							<CardDescription>
								매주 2회 학년 별로 전문 수학강사를 통한 수학 수업 진행
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="">
						<CardContent>
							<img
								src="/images/Programs/programs/program-night-english.jpeg"
								alt=""
							/>
						</CardContent>
						<CardHeader className="content-center">
							<CardTitle>청소년 영어교실</CardTitle>
							<CardDescription>
								매주 1회 학년 별 영어 강사를 통해 배우는 영어 수업
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="">
						<CardContent>
							<img
								src="/images/Programs/programs/program-night-movie.jpeg"
								alt=""
							/>
						</CardContent>
						<CardHeader className="content-center">
							<CardTitle>영화 수업</CardTitle>
							<CardDescription>
								주 1회 초,중,고등 그룹 별로 3명의 전문 영화강사를 통한 영화 수업
								진행
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="">
						<CardContent>
							<img
								src="/images/Programs/programs/program-night-club.jpeg"
								alt=""
							/>
						</CardContent>
						<CardHeader className="content-center">
							<CardTitle>동아리 활동</CardTitle>
							<CardDescription>
								주 1회 청소년 주도의 동아리 활동 진행 (기타, 보드게임 등)
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="">
						<CardContent>
							<img
								src="/images/Programs/programs/program-night-vacation.jpeg"
								alt=""
							/>
						</CardContent>
						<CardHeader className="content-center">
							<CardTitle>청소년 특강</CardTitle>
							<CardDescription>
								방학 중 과학, 사회 등 특강 수업 진행
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="">
						<CardContent>
							<img
								src="/images/Programs/programs/program-night-filmfest.jpeg"
								alt=""
							/>
						</CardContent>
						<CardHeader className="content-center">
							<CardTitle>우리들의 아지트 영화제</CardTitle>
							<CardDescription>
								매년 영화 수업을 통해 제작한 영화로 상영관에서 영화제를 진행
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="">
						<CardContent>
							<img
								src="/images/Programs/programs/program-night-camp.jpeg"
								alt=""
							/>
						</CardContent>
						<CardHeader className="content-center">
							<CardTitle>생태탐방: 몽골 은총의 숲</CardTitle>
							<CardDescription>
								기후위기 시기 생태환경의 환경을 배우고 기후 취약지를 탐방
							</CardDescription>
						</CardHeader>
					</Card>
				</div>
			</div>

			<Separator className="my-4" />

			<div className="my-4">
				<Heading>지역 사회 자원연계</Heading>
				<UnorderedList>
					<ListItem>서울청소년소아과의원: 예방접종 및 건강검진</ListItem>
					<ListItem>스페셜정형외과: 임대료지원, 시설환경개선 등</ListItem>
					<ListItem>삼성전자: 월 1회 어린이안전교육 실시</ListItem>
					<ListItem>영덕1동행복복지센터: 월 1회 물품 지원</ListItem>
					<ListItem>
						우체국그린나래: 연 1~2회 체험 프로그램 및 물품지원
					</ListItem>
					<ListItem>용인환경정의: 프로그램 협업</ListItem>
				</UnorderedList>
			</div>
		</>
	);
}
