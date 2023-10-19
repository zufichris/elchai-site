import Image from "next/image";
import CarBanner from "@assets/images/car-banner.png";

const Features = () => (
	<div className="mb-[118px] md:mb-[42px] relative overflow-hidden">
		<div className="max-w-[955px] md:max-w-[400px] w-full md:h-16 h-[200px] bg-gradient rotate-[-20deg] absolute md:top-auto sm:bottom-10 md:bottom-20 top-1/2 md:-right-[82px] -right-[382px]" />
		<div className="max-w-[955px] md:max-w-[400px] w-full md:h-16 h-[200px] bg-gradient rotate-[20deg] absolute md:top-auto sm:bottom-10 md:bottom-20 top-1/2 md:-left-[82px] -left-[382px]" />
		<div className="container">
			<div className="text-center">
				<div className="max-w-[831px] w-full mx-auto mb-16 md:mb-10">
					<h2 className="mb-4 title-lg bg-gradient3 clip">
						Real Luxury Embraces Quality, Convenience, and
						Innovation
					</h2>
					<p className="body-xl text-sub-black">
						Elchai Group is bringing luxury cars and a real-world
						lifestyle in the metaverse
					</p>
				</div>
				<div className="w-full flex items-center justify-center rounded-2xl overflow-hidden relative">
					<div className="w-full h-full bg-black/20 absolute top-0 left-0" />
					<Image src={CarBanner} width={1235} alt="banner" />
				</div>
			</div>
		</div>
	</div>
);
export default Features;
