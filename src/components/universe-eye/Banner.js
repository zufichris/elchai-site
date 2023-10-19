import Image from "next/image";
import BannerPattern from "@assets/images/banner-design.svg";
import UniverseEye from "@assets/images/universe-eye.svg";
import MacBookBanner from "@assets/images/macbook-banner.png";

const Banner = () => (
	<div className="md:pt-[158px] lg:mb-[160px] md:mb-[120px] pt-[209px] relative z-0 bg-gradient4 mb-[290px] flex">
		<Image src={BannerPattern} fill alt="banner" className="object-cover" />
		<div className="container relative">
			<div className="max-w-[651px] w-full mx-auto text-center mb-6">
				<Image
					src={UniverseEye}
					alt="Universe eye"
					width={105}
					className="mx-auto mb-8"
				/>
				<h1 className="title-lg text-white">The Universe Eye</h1>
			</div>
			<Image
				src={MacBookBanner}
				alt="Banner"
				width={908}
				className="mx-auto -mb-[240px] lg:-mb-[140px] md:-mb-[100px]"
			/>
		</div>
	</div>
);
export default Banner;
