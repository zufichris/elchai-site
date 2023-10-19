import Image from "next/image";
import InfoBanner from "@assets/images/info-banner.png";

const Info = () => (
	<div className="mb-[102px] md:mb-16">
		<div className="container">
			<div className="flex items-center gap-20 md:flex-col md:gap-6 lg:gap-4">
				<div className="flex-1">
					<h2 className="mb-4 title-lg bg-gradient3 clip">
						Luxury Reimagined And Decentralized
					</h2>
					<p className="body-xl text-sub-black">
						Inspired by the human desire of communality, through
						connection, ownership, and satisfaction or achievement,
						The Universe Eye would reflect these desires through
						every component of the ecosystem – the BEC Club, The BEC
						Token and our luxury-themed NFTs
					</p>
				</div>
				<div className="lg:max-w-[300px] md:max-w-full max-w-[492px] w-full flex items-center justify-center">
					<Image src={InfoBanner} width={492} alt="banner" />
				</div>
			</div>
		</div>
	</div>
);
export default Info;
