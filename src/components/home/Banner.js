import Image from "next/image";
import BannerImg from "@assets/images/banner.png";
import BannerPattern from "@assets/images/banner-design.svg";
import Link from "next/link";

const Banner = () => (
	<div className="md:pt-[137px] lg:pt-[140px] lg:pb-[80px] lg:mb-20 md:mb-16 md:pb-[60px] pt-[150px] pb-[100px] relative z-0 bg-gradient4 mb-[120px]">
		<Image src={BannerPattern} fill alt="banner" />
		<div className="container relative">
			<div className="flex items-center md:flex-col gap-20 md:gap-16 lg:gap-1">
				<div className="flex-1">
					<h1 className="mb-4 title-lg text-white">
						We’re Launching a new Metaverse focused Ecosystem
					</h1>
					<p className="body-xl mb-8 text-gray">
						The Elchai Group is launching a metaverse world where
						reality and digital coincide. It’s an immersive world
						integrating blockchain technologies, NFTs, and
						artificial intelligence.
					</p>
					<Link href="/universe-eye" className="btn">
						<span>The Universe Eye Metaverse</span>
					</Link>
				</div>
				<div className="lg:max-w-[300px] md:max-w-full max-w-[541px] w-full flex items-center justify-center">
					<Image src={BannerImg} width={541} alt="banner" />
				</div>
			</div>
		</div>
	</div>
);
export default Banner;
