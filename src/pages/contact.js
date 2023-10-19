import Layout from "@components/Layout";
import Subscribe from "@components/common/Subscribe";
import Banner from "@components/contact/Banner";
import GetInTouch from "@components/contact/GetInTouch";
import Info from "@components/contact/Info";

const UniverseEye = () => {
	return (
		<Layout>
			<Banner />
			<Info />
			<GetInTouch />
			<Subscribe />
		</Layout>
	);
};

export default UniverseEye;
