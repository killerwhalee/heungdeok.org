import { Heading, Paragraph, Title } from '@/components/layout/Typography';

export default function Home() {
	return (
		<>
			<Title>흥덕지역아동센터 공식 홈페이지</Title>
			<img
				src="/images/Home/banner.jpeg"
				alt="배너 이미지"
				className="my-8"
			/>
			<Heading>
				흥덕지역아동센터 공식 홈페이지에 방문하신 것을 환영합니다!
			</Heading>
			<Paragraph>
				흥덕지역아동센터는 방과후 돌봄이 필요한 지역사회 아동의 건강한 성장을
				위하여 <br />
				보호, 교육 및 다양한 문화 활동과 보호자와 지역사회의 연계 활동 등
				종합적인 복지서비스를 제공합니다.
			</Paragraph>
		</>
	);
}
