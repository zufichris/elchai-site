import Layout from "@components/Layout";
import Subscribe from "@components/common/Subscribe";
import Banner from "@components/universe-eye/Banner";
import Faqs from "@components/universe-eye/Faqs";
import Info from "@components/universe-eye/Info";

const UniverseEye = () => {
	return (
		<Layout>
			<Banner />
			<Info />
			<Faqs />
			<Subscribe />
		</Layout>
	);
};

export default UniverseEye;
