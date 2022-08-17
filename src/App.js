import Navbar from './components/NavBar/Navbar';
import PageContainer from './components/PageContainer/PageContainer.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import ReportsPage from './pages/ReportsPage/ReportsPage.jsx';

function App() {
	return (
		<>
			<Navbar />
			<PageContainer>
				<ReportsPage />
			</PageContainer>
		</>
	);
}

export default App;
