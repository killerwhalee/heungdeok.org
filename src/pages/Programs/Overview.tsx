import {
	BlockQuote,
	Heading,
	Paragraph,
	Title,
} from '@/components/layout/Typography';
import { Separator } from '@/components/ui/separator';

export default function Overview() {
	return (
		<>
			<Title>프로그램 개요</Title>

			<div className="my-4">
				<Heading>주요 프로그램</Heading>

				<img
					src="/images/Programs/programs-main.png"
					alt="주요 프로그램 이미지"
					className="my-8 w-full"
				/>

				<BlockQuote>안전한 돌봄과 전인 성장을 이루도록!</BlockQuote>

				<Heading className="text-lg">돌봄 서비스</Heading>
				<Paragraph>
					매일 건강한 먹거리를 통한 급간식 제공, 생활안전교육, 건강관리 등
					아이들의 건강한 돌봄을 이룹니다.
				</Paragraph>

				<Heading className="text-lg">학습 지도</Heading>
				<Paragraph>
					수준별 학습지도가 이루어지며, 영어 수학 미술 음악 체육활동 등을 통해
					<br />
					아이들의 학습 향상과 다양한 예체능 활동을 경험하여 성취감과 자신감을
					기릅니다.
				</Paragraph>

				<Heading className="text-lg">문화 활동</Heading>
				<Paragraph>
					여름, 겨울 캠프와 다양한 문화체험 활동을 통해 <br />
					아이들의 문화적 감수성을 향상시키고, 또래와의 건전한 놀이 활동을 통한
					사회성 향상을 이룹니다.
				</Paragraph>

				<Heading className="text-lg">정서 개발</Heading>
				<Paragraph>
					상담을 통해 아동을 이해하고 일상생활을 관찰하며 따뜻한 내면을 지닐 수
					있도록 지도하고, <br />
					보호자의 양육기술 향상을 통해 밝고 활기찬 아이들이 되도록 합니다.
				</Paragraph>
			</div>

			<Separator className="my-4" />

			<div className="my-4">
				<Heading>특별 활동</Heading>

				<img
					src="/images/Programs/programs-special.png"
					alt="특별 활동 이미지"
					className="my-8 w-full"
				/>

				<BlockQuote>단순 돌봄을 넘어 삶의 주인공이 되도록!</BlockQuote>

				<Heading className="text-lg">야간 및 토요 운영</Heading>
				<Paragraph>
					야간 돌봄이 필요한 아동 청소년에게 다음 세대 리더로 성장하도록 필요한
					프로그램을 제공하고, 토요 운영을 통해 신나는 주말을 보냅니다.
				</Paragraph>

				<Heading className="text-lg">지역과 함께</Heading>
				<Paragraph>
					지역 사회 기업체 및 시민사화단체 등과 유대 관계를 맺어 아동에게 필요한
					지원을 연계하고 지원함으로 폭넑은 아동복지를 이룹니다.
				</Paragraph>

				<Heading className="text-lg">미래를 향해</Heading>
				<Paragraph>
					기후 위기를 비롯한 시시각 변하는 미래 사회 및 자연 환경을 이해하고
					실천함으로 미래 세대의 주인공이 되도록 합니다.
				</Paragraph>
			</div>
		</>
	);
}
