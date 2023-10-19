import Footer from "./common/Footer";
import Header from "./common/Header";

const Layout = ({ children }) => {
	return (
		<>
			<div className="relative">
				<Header />
				{children}
				<Footer />
			</div>
		</>
	);
};
export default Layout;
