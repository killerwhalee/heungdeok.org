import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageContainer from '@/components/layout/PageContainer';

// Pages
import Home from '@/pages/Home';
import History from '@/pages/Center/History';
import Staff from '@/pages/Center/Staff';
import Location from '@/pages/Center/Location';
import OperationGuide from '@/pages/Operation/OperationGuide';
import ActivePrograms from '@/pages/Programs/ActivePrograms';
import ApplicationGuide from '@/pages/Services/ApplicationGuide';
import DonationGuide from '@/pages/Support/DonationGuide';
import Overview from '@/pages/Programs/Overview';
import Facilities from '@/pages/Center/Facilities';

export default function App() {
	return (
		<div className="flex min-h-screen flex-col">
			<Navbar />
			<PageContainer className="flex-1">
				<Routes>
					{/* 홈 */}
					<Route
						path="/"
						element={<Home />}
					/>

					{/* 센터소개 */}
					<Route
						path="/center/facilities"
						element={<Facilities />}
					/>
					<Route
						path="/center/history"
						element={<History />}
					/>
					<Route
						path="/center/staff"
						element={<Staff />}
					/>
					<Route
						path="/center/location"
						element={<Location />}
					/>

					{/* 운영 안내 */}
					<Route
						path="/guide/operation"
						element={<OperationGuide />}
					/>

					{/* 프로그램 안내 */}
					<Route
						path="/programs/overview"
						element={<Overview />}
					/>
					<Route
						path="/programs/active"
						element={<ActivePrograms />}
					/>

					{/* 서비스 신청 안내 */}
					<Route
						path="/services/application"
						element={<ApplicationGuide />}
					/>

					{/* 후원 안내 */}
					<Route
						path="/support/donation"
						element={<DonationGuide />}
					/>
				</Routes>
			</PageContainer>
			<Footer />
		</div>
	);
}
