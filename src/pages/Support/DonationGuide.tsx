import { ListItem, UnorderedList } from '@/components/layout/List';
import { Heading, Paragraph, Title } from '@/components/layout/Typography';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowDownToLine, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DonationGuide() {
	return (
		<>
			<Title>후원 안내</Title>

			<div className="my-4">
				<Heading>CMS를 통한 정기 후원</Heading>
				<Paragraph>
					CMS 출금신청서를 작성하여 제출하시면 매월 정기적으로 출금됩니다.{' '}
					<br />
					아래의 구글 폼 링크로 접속하여 후원 신청서를 작성하실 수 있습니다.
				</Paragraph>
				<Link
					to="https://docs.google.com/forms/d/e/1FAIpQLSfuBUXWg9kf5bWBFHaLPKQZEEppniZiTCPjDryp3TvrjEv_kA/viewform"
					target="_blank"
				>
					<Button className="w-full my-2 h-16 text-xl bg-indigo-800">
						후원 신청서 작성하기 (구글 폼) <ArrowUpRight className="size-6" />
					</Button>
				</Link>
				<Paragraph>
					또는 아래의 양식을 수기로 작성하여 팩스나 이메일로 제출할 수 있습니다.
				</Paragraph>

				<div className="grid grid-cols-2 gap-4">
					<div className="">
						<img
							src="/images/Support/donation-form.jpeg"
							alt="donation form image"
						/>
					</div>
					<div className="p-4">
						<Heading className="text-lg">정기후원 방법</Heading>
						<Paragraph>
							좌측의 CMS 출금이체 신청(동의)서를 다운받아 수기로 작성하여 <br />
							팩스나 이메일로 제출합니다.
						</Paragraph>

						<a
							href="/images/Support/donation-form.jpeg"
							download="[흥덕지역아동센터] CMS 출금이체 신청(동의)서.jpeg"
						>
							<Button className="w-full my-6 h-12 text-lg">
								CMS 출금이체 신청(동의)서 다운로드{' '}
								<ArrowDownToLine className="size-5" />
							</Button>
						</a>

						<Separator className="my-4" />

						<Heading className="text-lg">연락처</Heading>
						<UnorderedList>
							<ListItem>전화번호: 031-213-7773</ListItem>
							<ListItem>팩스: 031-213-7772</ListItem>
							<ListItem>이메일: heungdeok1004@hanmail.net</ListItem>
						</UnorderedList>
					</div>
				</div>
			</div>

			<Separator className="my-4" />

			<div className="my-4">
				<Heading>자동이체를 통한 후원</Heading>
				<Paragraph>
					후원 계좌 중 하나를 선정해 자동이체를 신청하여 후원할 수 있습니다.
				</Paragraph>
				<UnorderedList>
					<ListItem>비지정후원: 농협 355-0089-4611-93</ListItem>
					<ListItem>지정후원(프로그램): 농협 355-0089-4609-33</ListItem>
					<ListItem>지정후원(시설): 농협 355-0089-4606-23</ListItem>
				</UnorderedList>
				<Paragraph>
					후원자가 직접 은행에서 자동이체를 신청하는 것이며, 모든 계좌명은
					흥덕지역아동센터입니다. <br />
					위의 후원 계좌 중 하나를 선정해 신청해 주시고, 연결 후 반드시 센터로
					연락해 주시기 바랍니다.
				</Paragraph>
			</div>
		</>
	);
}
