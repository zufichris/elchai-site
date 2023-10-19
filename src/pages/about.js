import Layout from "@components/Layout";
import Banner from "@components/about/Banner";
import Info from "@components/about/Info";
import Projects from "@components/about/Projects";
import Supply from "@components/about/Supply";
import Subscribe from "@components/common/Subscribe";

const About = () => {
	return (
		<Layout>
			<Banner />
			<Info />
			<Projects />
			<Supply />
			<Subscribe />
		</Layout>
	);
};

export default About;
