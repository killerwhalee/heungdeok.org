import { ListItem, OrderedList } from '@/components/layout/List';
import { Heading, Title } from '@/components/layout/Typography';
import { Separator } from '@/components/ui/separator';

export default function ApplicationGuide() {
	return (
		<>
			<Title>서비스 신청 안내</Title>

			<div className="my-4">
				<Heading>이용 조건</Heading>
				<OrderedList>
					<ListItem>
						연령기준
						<OrderedList>
							<ListItem>
								18세 미만의 아동으로서 초등학교 및 중학교에 재학중인 아동
							</ListItem>
							<ListItem>
								18세 미만의 아동으로서 다음에 경우에 해당하는 아동
								<OrderedList>
									<ListItem>
										지역아동센터 이용 중 아동이 고등학교로 진학하는 경우의
										고등학생
									</ListItem>
									<ListItem>
										18세 이상이나 계속해서 지역아동센터를 이용하는 고등학생
									</ListItem>
									<ListItem>
										지역아동센터를 이용하는 아동의 형제자매로 그 형제자매가
										미취학아동이거나 고등학생인 경우와
										<br /> 형제자매가 지역아동센터를 모두 이용하려는 경우로{' '}
										<br /> 그 중 1명이 초등학생 또는 중학생이고 다른 1명은
										미취학아동 또는 고등학생인 경우
									</ListItem>
									<ListItem>
										학교밖 청소년지원에 관한 법에 따른 18세 미만의 아동인 경우{' '}
									</ListItem>
									<ListItem>
										지역적 특성 등으로 어린이집 유치원 등을 이용할 수 없는
										미취학 아동
									</ListItem>
									<ListItem>
										기타 지역특성이나 가구특성 등에 따라 지역아동센터에서 돌봄이
										필요하다고 시장이 인정하는 경우
									</ListItem>
								</OrderedList>
							</ListItem>
						</OrderedList>
					</ListItem>
					<ListItem>
						우선돌봄 및 일반아동
						<OrderedList>
							<ListItem>
								우선돌봄아동: 증명서, 확인서 등을 통해 다음에 해당하는
								대상자임이 확인되는 아동 또는 돌봄 특례에 해당하는 아동
								<OrderedList>
									<ListItem>
										국민기초생활보장법에 따른 생계 의료 주거 교육급여 수급자
									</ListItem>
									<ListItem>
										차상위자활대상자, 차상위본인보담 경감 대상 등 차상위계층
										가구의 아동
									</ListItem>
									<ListItem>의료급여법에 따른 의료급여 수급권자</ListItem>
									<ListItem>
										장애인복지법에 따른 등록장애인이 있는 가구의 아동 또는
										등록장애인인 아동
									</ListItem>
									<ListItem>다문화가족지원법에 따른 다문화가족의 아동</ListItem>
									<ListItem>
										한부모가족지원법에 따른 모자가족 또는 부자가족의 아동
									</ListItem>
									<ListItem>
										조부모와 손자녀로만 이루어진 조손가구의 아동
									</ListItem>
									<ListItem>초등고 교육비지원 대상자인 아동</ListItem>
									<ListItem>자녀가 2명 이상인 가구의 아동</ListItem>
								</OrderedList>
							</ListItem>
							<ListItem>일반아동: 우선돌봄아동에 해당하지 않는 아동</ListItem>
							<ListItem>
								돌봄특례: 일반아동에 해당되나 시장이 돌봄이 필요하다고 인정하는
								다음의 경우 우선돌봄아동으로 선정 가능
								<OrderedList>
									<ListItem>
										주민등록상 부모 등이 등재되어 있으나 가출, 행방불명, 별거
										등으로 <br />
										사실상 한부모가족이거나 조손가족인 아동으로 가정 내 돌봄이
										어려워 돌봄이 필요한 아동
									</ListItem>
									<ListItem>
										보호자의 질병(중증만성질환, 암 등)으로 가정 내 돌봄이 어려워
										돌봄이 필요한 아동
									</ListItem>
									<ListItem>
										보호자의 실직으로 가정 내 돌봄이 열악하여 돌봄이 필요한 아동
									</ListItem>
									<ListItem>
										귀가 후 장시간 홀로 남겨지거나 열악한 지역여건으로
										사회복지관 등 다른기관의 이용이 어려운 아동
									</ListItem>
									<ListItem>
										3명 이상 다자녀가족의 아동 또는 맞벌이 가정의 아동으로써
										다함께돌봄센터 등 다른 기관의 이용이 어려워 돌봄이 필요한
										아동
									</ListItem>
									<ListItem>
										기타 가구 특성이나 생활실태로 보아 가정 내 돌봄이 어려워
										돌봄이 필요한 아동
									</ListItem>
								</OrderedList>
							</ListItem>
						</OrderedList>
					</ListItem>

					<ListItem>
						이용아동등록: 시설별 신고정원의 50%이상은 우선돌봄아동이어야 하며,
						일반아동은 50% 범위 내에서 등록가능
					</ListItem>
				</OrderedList>
			</div>

			<Separator className="my-4" />

			<div className="my-4">
				<Heading>돌봄신청</Heading>
				<OrderedList>
					<ListItem>
						돌봄을 희망하는 경우 '돌봄서비스제공신청서'를 작성하여 시청에
						제출하여야 함
					</ListItem>
					<ListItem>
						시청에서 제출한 서류 확인 후 '돌봄서비스결정통지서' 발부(처리기한
						7일)
					</ListItem>
					<ListItem>이후 이용가능</ListItem>
				</OrderedList>
			</div>

			<Separator className="my-4" />

			<div className="my-4">
				<Heading>제출해야 할 서류</Heading>
				<OrderedList>
					<ListItem>돌봄서비스 제공 신청서 </ListItem>
					<ListItem>우선돌봄아동에 해당하는 경우 그 증명서 및 확인서</ListItem>
					<ListItem>
						재직증명서 등 취업확인서류(돌봄특례 및 맞벌이가정 아동인 경우)
					</ListItem>
					<ListItem>응급처리동의서</ListItem>
					<ListItem>이용서약서 등</ListItem>
				</OrderedList>
			</div>
		</>
	);
}
