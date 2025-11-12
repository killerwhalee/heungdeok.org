import { ListItem, UnorderedList } from '@/components/layout/List';
import { Heading, Paragraph, Title } from '@/components/layout/Typography';
import { Separator } from '@/components/ui/separator';

export default function OperationGuide() {
	return (
		<>
			<Title>운영 안내</Title>

			<div className="my-6">
				<Heading>목적</Heading>
				<Paragraph>
					흥덕지역아동센터는 돌봄이 필요한 지역의 아동 청소년들이 올바른 성장을
					할 수 있도록 교육, 문화적 제반 활동을 지원함을 목적으로 합니다.
				</Paragraph>
				<Paragraph>
					가능한 학교, 가정과 긴밀한 연대를 통해 건강한 가정과 지역사회 건설에
					보탬이 되는 바람직한 지역사회 교육 문화 공동체가 되도록 합니다.
				</Paragraph>
			</div>

			<Separator className="my-4" />

			<div className="my-6">
				<Heading>운영 시간</Heading>
				<UnorderedList>
					<ListItem>기본운영: 평일 10시부터 19시까지</ListItem>
					<ListItem>야간운영: 평일 19시부터 22시까지</ListItem>
				</UnorderedList>
				<Paragraph className="text-muted-foreground">
					(주로 초등학생의 경우 기본 운영 시간을 이용하며, 청소년의 경우 야간
					운영 시간을 이용합니다.)
				</Paragraph>
			</div>

			<Separator className="my-4" />

			<div className="my-6">
				<Heading>운영시간표</Heading>
				<Paragraph className="text-muted-foreground">
					(프로그램 진행에 따라 시간이 달라질 수 있습니다.)
				</Paragraph>
				<img
					src="/images/Operation/operation-table.png"
					alt="operationTable"
				/>
			</div>

			<Separator className="my-4" />

			<div className="my-6">
				<Heading>센터에서 지원 할 일</Heading>
				<UnorderedList>
					<ListItem>
						지역사회아동이 건강하게 성장할 수 있도록 지원합니다.
					</ListItem>
					<ListItem>아동의 일상생활 및 학교생활 적응을 지원합니다.</ListItem>
					<ListItem>
						아동의 심리, 정서적 안정 및 건강한 신체발달을 지원합니다.
					</ListItem>
					<ListItem>아동의 권리를 보장하고 안전하게 보호합니다.</ListItem>
					<ListItem>지역사회 안에서 가족기능이 강화되도록 지원합니다.</ListItem>
				</UnorderedList>
			</div>

			<Separator className="my-4" />

			<div className="my-6">
				<Heading>아동이 지켜야 할 일</Heading>
				<UnorderedList>
					<ListItem>
						센터는 매일 시간에 맞춰 등원하며 진행하는 프로그램에는 성실하게
						참여합니다.
					</ListItem>
					<ListItem>
						무단결석, 지각을 하지 않습니다.(못 올 경우 반드시 사전연락)
					</ListItem>
					<ListItem>
						타인을 놀리거나 싫어하는 행동을 하지 않습니다.(스킨십 따돌림, 욕설
						등)
					</ListItem>
					<ListItem>음주, 흡연을 하지 않습니다.</ListItem>
					<ListItem>
						시설물을 아껴 쓰고 파손하지 않습니다.(파손 시 변상)
					</ListItem>
					<ListItem>
						어떠한 이유에서든지 상대방에게 언어, 신체적 정서적 폭력을 하지
						않습니다.
					</ListItem>
					<ListItem>
						나와 다른 사람에 대해서 존중하고 인격적으로 대하며 공격을 당했을
						때는 소통함과 지도교사를 통해서 해결합니다.{' '}
					</ListItem>
					<ListItem>공동체 프로그램에 적극 참여합니다.</ListItem>
				</UnorderedList>
			</div>

			<Separator className="my-4" />

			<div className="my-6">
				<Heading>보호자의 협조</Heading>
				<UnorderedList>
					<ListItem>
						보호자는 흥덕지역아동센터의 모든 프로그램과 서비스 지원에 아동이
						성실히 참여할 수 있도록 격려하며 <br />
						센터에서 진행하는 교육 및 세미나 등에 적극 참여합니다.
					</ListItem>
					<ListItem>
						한 달에 4회 이상 무단 결석과 잦은 지각 등은 센터의 필요성이 낮은
						것으로 판단되어 더 필요한 아동이 있을 시 양보합니다.
					</ListItem>
				</UnorderedList>
			</div>
		</>
	);
}
