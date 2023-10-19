import Layout from "@components/Layout";
import Subscribe from "@components/common/Subscribe";
import Banner from "@components/home/Banner";
import Building from "@components/home/Building";
import Faqs from "@components/home/Faqs";
import Features from "@components/home/Features";
import Info from "@components/home/Info";

const Home = () => {
	return (
		<Layout>
			<Banner />
			<Info />
			<Features />
			<Building />
			<Subscribe />
		</Layout>
	);
};

export default Home;
