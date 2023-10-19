import Image from "next/image";
import BannerPattern from "@assets/images/banner-design.svg";

const Banner = () => (
	<div className="md:pt-[158px] lg:pb-[141px] lg:mb-20 md:mb-16 md:pb-[60px] pt-[209px] pb-[152px] relative z-0 bg-gradient4 mb-[95px]">
		<Image src={BannerPattern} fill alt="banner" className="object-cover" />
		<div className="container relative">
			<div className="max-w-[651px] w-full mx-auto text-center">
				<div className="text-base tracking-[0.32em] text-white uppercase mb-6">
					ABOUT ELCHAI GROUP
				</div>
				<h1 className="title-lg text-white">
					Our Mission is to Bring Luxury Experiences to Web3
				</h1>
			</div>
		</div>
	</div>
);
export default Banner;
