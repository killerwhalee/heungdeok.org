import { Heading, Paragraph, Title } from '@/components/layout/Typography';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ListItem, UnorderedList } from '@/components/layout/List';

export default function Staff() {
	return (
		<>
			<Title>종사자 소개</Title>

			<img
				src="/images/Center/staff-everyone.jpeg"
				alt="종사자 단체사진"
			/>

			<Separator className="my-4" />

			<div className="my-4">
				<Heading>사회복지사 및 돌봄교사</Heading>

				<div className="my-8 grid gap-4">
					<Card className="w-full flex-row gap-0">
						<CardContent className="w-80">
							<img
								src="/images/Center/staffs/staff-seongran.jpeg"
								alt="전성란 시설장"
							/>
						</CardContent>
						<CardHeader className="w-full items-center">
							<CardTitle className="text-2xl">전성란 시설장</CardTitle>
							<CardDescription className="space-y-4 text-lg">
								<Paragraph>
									"최종적 판단을 세상이 아니라 하나님께서 하시는 것이다.
									<br />
									옳고 그름을 판단할 때 사람들의 생각이 아닌 하나님의 말씀으로
									하라."
									<br />- 브리스 버튼.
								</Paragraph>
								<Paragraph>
									많은 아이들과 함게 보낸 시간들이 행복했고 즐거웠노라 말하고
									싶은 시설장입니다.
									<br />
									브리스 버튼의 말처럼 앞으로도 그렇게 아이들과 함께 하고
									싶습니다.
								</Paragraph>
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="w-full flex-row gap-0">
						<CardContent className="w-80">
							<img
								src="/images/Center/staffs/staff-seungmin.jpeg"
								alt="김승민 생활복지사"
							/>
						</CardContent>
						<CardHeader className="w-full items-center">
							<CardTitle className="text-2xl">김승민 생활복지사</CardTitle>
							<CardDescription className="space-y-4 text-lg">
								<Paragraph>
									한 아이를 위해 온 마을이 필요하다는 인디안의 속담처럼,
									<br />
									다음 세대 주인공인 아동 청소년의 건강한 성장을 위해서는
									<br />
									모두의 관심과 사랑이 필요합니다.
								</Paragraph>
								<Paragraph>
									'어른 김장하'처럼, 복지사로서 아이들의 필요를 잘 파악하고,
									<br />그 필요에 반응하는 어른이 되겠습니다.
								</Paragraph>
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="w-full flex-row gap-0">
						<CardContent className="w-80">
							<img
								src="/images/Center/staffs/staff-jeongsik.jpeg"
								alt="박정식 생활복지사"
							/>
						</CardContent>
						<CardHeader className="w-full items-center">
							<CardTitle className="text-2xl">박정식 생활복지사</CardTitle>
							<CardDescription className="space-y-4 text-lg">
								<Paragraph>
									안녕하세요, 흥덕지역아동센터에서 때로는 엄마처럼 때로는
									친구처럼
									<br />
									아이들의 든든한 지원군이 되어 주고 싶은 박정식
									생활복지사입니다.
									<br />제 꿈은 아이들이 성장하여 성인이 되어서도 연락하며
									지내는 것입니다.
								</Paragraph>
								<Paragraph>
									앞으로 흥덕지역아동센터에서 제 꿈을 이룰 수 있도록 노력하는
									<br />
									복지사가 되겠습니다.
								</Paragraph>
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="w-full flex-row gap-0">
						<CardContent className="w-80">
							<img
								src="/images/Center/staffs/staff-jieun.jpg"
								alt="최지은 생활복지사"
							/>
						</CardContent>
						<CardHeader className="w-full items-center">
							<CardTitle className="text-2xl">최지은 생활복지사</CardTitle>
							<CardDescription className="space-y-4 text-lg">
								<Paragraph>
									지역아동센터는 단순히 아이들이 머무는 공간이 아닌,
									<br />
									마음을 나누고 꿈을 키워가는 '또 하나의 집'이라고 생각합니다.
								</Paragraph>
								<Paragraph>
									아이들이 안전하고 행복하게 지낼 수 있는 환경을 만들기 위해
									항상 귀 기울이고,
									<br />
									따뜻한 손길로 함께하며, 아이들의 오늘이 더 밝은 내일로 이어질
									수 있도록
									<br />늘 최선을 다하겠습니다.
								</Paragraph>
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="w-full flex-row gap-0">
						<CardContent className="w-80">
							<img
								src="/images/Center/staffs/staff-hyeseon.jpg"
								alt="천혜선 돌봄교사"
							/>
						</CardContent>
						<CardHeader className="w-full items-center">
							<CardTitle className="text-2xl">천혜선 돌봄교사</CardTitle>
							<CardDescription className="space-y-4 text-lg">
								<Paragraph></Paragraph>
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="w-full flex-row gap-0">
						<CardContent className="w-80">
							<img
								src="/images/Center/staffs/staff-sookha.jpeg"
								alt="유숙하 조리사"
							/>
						</CardContent>
						<CardHeader className="w-full items-center">
							<CardTitle className="text-2xl">유숙하 조리사</CardTitle>
							<CardDescription className="space-y-4 text-lg">
								<Paragraph>
									안녕하세요, 저는 흥덕지역아동센터에서 조리를 담당하고 있는
									유숙하입니다.
								</Paragraph>
								<Paragraph>
									먼저 대표님과 센터장님께서 한 사람 한 사람 사랑과 훈계로 잘
									양육하는 모습에
									<br />
									참으로 감동을 받았고, 또 선생님들의 헌신과 열정적으로 애쓰는
									모습을 보면서,
									<br />저 또한 최대한 맛있는 요리로 아이들에게 보답을
									해야겠다고 결심하였습니다.
								</Paragraph>
								<Paragraph>
									제가 지금은 제 자식들이 다 커서 결혼적령기가 되었지만,
									<br />
									우리 아이들이 어렸을 때 흥덕지역아동센터같은 곳을 만났다면
									얼마나 좋았을까
									<br />
									하는 아쉬움이 들 때가 많습니다.
								</Paragraph>
								<Paragraph>
									건강이 허락하기까지 흥덕지역아동센터가 존재하는 한 다소 미흡한
									부분들이
									<br />
									있을 수도 있지만, 최선을 다해 아이들의 건강과 맛난 음식으로
									웃음을 줄 수 있는
									<br />
									사람이 되도록 노력하겠습니다.
								</Paragraph>
							</CardDescription>
						</CardHeader>
					</Card>
				</div>
			</div>

			<Separator className="my-4" />

			<div className="my-4">
				<Heading>사회복무요원</Heading>

				<div className="my-8 grid gap-4">
					<Card className="w-full flex-row gap-0">
						<CardContent className="w-80">
							<img
								src="/images/Center/staffs/staff-kwanwoo.jpg"
								alt="박관우 사회복무요원"
							/>
						</CardContent>
						<CardHeader className="w-full items-center">
							<CardTitle className="text-2xl">박관우 사회복무요원</CardTitle>
							<CardDescription className="space-y-4 text-lg">
								<Paragraph>안녕하세요, 사회복무요원 박관우입니다.</Paragraph>
								<Paragraph>
									짧다면 짧고 길다면 긴 시간이지만 조금이나마 아이들이 건강하고
									행복하게
									<br />잘 자라날 수 있도록 힘이 되었으면 좋겠습니다.
								</Paragraph>
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="w-full flex-row gap-0">
						<CardContent className="w-80">
							<img
								src="/images/Center/staffs/staff-chaemin.jpg"
								alt="임채민 사회복무요원"
							/>
						</CardContent>
						<CardHeader className="w-full items-center">
							<CardTitle className="text-2xl">임채민 사회복무요원</CardTitle>
							<CardDescription className="space-y-4 text-lg">
								<Paragraph>
									안녕하세요, 흥덕지역아동센터에서 사회복무요원으로 근무하고
									있는 임채민입니다.
								</Paragraph>
								<Paragraph>
									아이들과 함께할 수 있어 즐겁고 행복합니다.
									<br />
									아이들과 한걸음 한걸음 맞추어 나가며 도움이 되고 싶습니다! 🥰
								</Paragraph>
							</CardDescription>
						</CardHeader>
					</Card>
				</div>
			</div>

			<Separator className="my-4" />

			<div className="my-4">
				<Heading>강사</Heading>

				<div className="my-8 grid gap-4">
					<Card className="w-full flex-row gap-0">
						<CardContent className="w-80">
							<img
								src="/images/Center/staffs/staff-sooyang.jpeg"
								alt="강수양 청소년 수학강사"
							/>
						</CardContent>
						<CardHeader className="w-full items-center">
							<CardTitle className="text-2xl">강수양 수학강사</CardTitle>
							<CardDescription className="space-y-4 text-lg">
								<Paragraph>중등수학 강사 강수양입니다.</Paragraph>
								<Paragraph>
									참 오랜 시간 센터 친구들과 함께했네요.
									<br />
									그 시간동안 수학을 가르치며 항상 생각했던 것은, 적어도 소위
									'수포자'는 되게
									<br />
									하지 말자는 것이었습니다.
									<br />
									수학에 재미를 느끼지는 못하더라도 학교 수업 과정에서 학원에
									다니는
									<br />
									다른 친구들과 비교되지 않으며 당당히 수학에 맞설 수 있기를
									바랍니다.
								</Paragraph>
								<Paragraph>
									그 목표를 위해 오늘도 아이들과 고군분투 해보려 합니다~^^
								</Paragraph>
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="w-full flex-row gap-0">
						<CardContent className="w-80">
							<img
								src="/images/Center/staffs/staff-jaesook.jpeg"
								alt="이재숙 청소년 영어강사"
							/>
						</CardContent>
						<CardHeader className="w-full items-center">
							<CardTitle className="text-2xl">이재숙 영어강사</CardTitle>
							<CardDescription className="space-y-4 text-lg">
								<Paragraph>고등 영어를 지도하고 있는 이재숙입니다.</Paragraph>
								<Paragraph>
									아이들이 성장하는 영어 수업이 되도록 수업하겠습니다.
								</Paragraph>
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="w-full flex-row gap-0">
						<CardContent className="w-80">
							<img
								src="/images/Center/staffs/staff-miran.jpeg"
								alt="김미란 미술강사"
							/>
						</CardContent>
						<CardHeader className="w-full items-center">
							<CardTitle className="text-2xl">김미란 미술강사</CardTitle>
							<CardDescription className="space-y-4 text-lg">
								<Paragraph>
									안녕하세요!
									<br />
									흥덕지역아동센터에서 미술 프로그램을 담당하고 있는 강사
									김미란입니다.
								</Paragraph>
								<Paragraph>
									우리 친구들이 자신의 생각이나 느낌을 자유롭게 표현하고
									창의력을 기르며
									<br />
									즐거운 작업을 할 수 있도록 하겠습니다.
								</Paragraph>
								<Paragraph>
									소중한 친구들이 사랑과 정성 가득한 보살핌 속에서
									<br />
									밝고 건강하게 성장하는 모습을 함께할 수 있어 늘 감사하게
									생각합니다.
								</Paragraph>
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="w-full flex-row gap-0">
						<CardContent className="w-80">
							<img
								src="/images/Center/staffs/staff-yeonkyeong.jpeg"
								alt="남연경 음악강사"
							/>
						</CardContent>
						<CardHeader className="w-full items-center">
							<CardTitle className="text-2xl">남연경 음악강사</CardTitle>
							<CardDescription className="space-y-4 text-lg">
								<Paragraph>안녕하세요, 피아노교실 남연경입니다.</Paragraph>
								<Paragraph>
									반복되는 연습으로 자신의 성장을 경험한 아이들은
									<br />
									자기를 컨트롤할 수 있는 능력을 키우며 올바른 자존감을 세워
									갑니다.
								</Paragraph>
								<Paragraph>
									다양한 분야의 음악을 이해하는 기초가 되는 피아노를 통해,
									<br />
									폭넓은 예술적 감수성과 창의력을 함양하여 다채로운 꿈을
									펼쳐가는
									<br />
									아이들이 될 수 있도록 사랑으로 지도하겠습니다.
								</Paragraph>
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="w-full flex-row gap-0">
						<CardContent className="w-80">
							<img
								src="/images/Center/staffs/staff-aeran.jpg"
								alt="김애란 아동복지교사"
							/>
						</CardContent>
						<CardHeader className="w-full items-center">
							<CardTitle className="text-2xl">김애란 아동복지교사</CardTitle>
							<CardDescription className="space-y-4 text-lg">
								<Paragraph>
									안녕하세요, 아동복지교사 김애란입니다. 아이들 수학 담당입니다.
								</Paragraph>
								<Paragraph>
									일주일에 한 번 만나서 아쉬움이 있지만, 그래도 아이들이 착해서
									잘 따라주고 열심히 해 주어서 감사하고 보람도 느낄 수 있는 것
									같습니다. 아이들이 참 많이 이뻐요.
								</Paragraph>
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="w-full flex-row gap-0">
						<CardContent className="w-80">
							<img
								src="/images/Center/staffs/staff-hyeyeong.webp"
								alt="박해영 연극 특기강사"
							/>
						</CardContent>
						<CardHeader className="w-full items-center">
							<CardTitle className="text-2xl">박해영 연극 특기강사</CardTitle>
							<CardDescription className="space-y-4 text-lg">
								<Paragraph>무대는 작아도, 상상은 무한대!</Paragraph>
								<Paragraph>
									아이들과 웃고 떠들며 연극으로 놀아요.
									<br />
									책상이 무대가 되고, 아이들이 주인공이 되는 시간!
								</Paragraph>
								<Paragraph>
									창의력 쑥쑥, 자신감 번쩍! 연극 수업, 제가 책임집니다!
								</Paragraph>
							</CardDescription>
						</CardHeader>
					</Card>
				</div>
			</div>

			<Separator className="my-4" />

			<div className="my-4">
				<Heading>그 외 SDGs 강사진</Heading>

				<UnorderedList className="my-4">
					<ListItem>사람과 평화</ListItem>
					<ListItem>용인 YMCA</ListItem>
					<ListItem>용인교육포럼</ListItem>
					<ListItem>용인시난개발조사위원회</ListItem>
				</UnorderedList>
			</div>
		</>
	);
}
