import Image from "next/image";
import BannerPattern from "@assets/images/banner-design.svg";

const Banner = () => (
	<div className="pt-[211px] md:pt-[140px] lg:pt-[180px] pb-[154px] md:pb-[120px] lg:pb-[100px] mb-[77px] relative z-0 bg-gradient4">
		<Image src={BannerPattern} fill alt="banner" className="object-cover" />
		<div className="container relative">
			<div className="max-w-[651px] w-full mx-auto text-center mb-6">
				<h1 className="title-lg text-white">Let’s Talk</h1>
				<p className="body-xl mb-8 text-gray">
					We’re excited to share more about our project! Let’s talk
					about partnerships, possibilities, and potential
					collaborations.
				</p>
			</div>
		</div>
	</div>
);
export default Banner;
