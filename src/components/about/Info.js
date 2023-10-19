import Image from "next/image";
import BitCoin from "@assets/images/bitcoin.png";

const Info = () => (
	<div className="mb-[120px] md:mb-16">
		<div className="sm-container">
			<div className="flex items-center gap-[120px] md:flex-col md:gap-6 lg:gap-4">
				<div className="flex-1">
					<h2 className="mb-4 title-lg bg-gradient3 clip">
						Web3 Made Luxury
					</h2>
					<p className="body-xl text-sub-black">
						Inspired by the human desire of communality, through
						connection, ownership, and satisfaction or achievement,
						The Universe Eye would reflect these desires through
						every component of the ecosystem – the BEC Club, The BEC
						Token and our luxury-themed NFTs
					</p>
				</div>
				<div className="lg:max-w-[300px] md:max-w-full max-w-[350px] w-full flex items-center justify-center">
					<Image src={BitCoin} width={350} alt="banner" />
				</div>
			</div>
		</div>
	</div>
);
export default Info;
