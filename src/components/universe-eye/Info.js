import Image from "next/image";
import BitCoin from "@assets/images/bitcoin-planet.png";
import Community from "@assets/images/community.png";
import AppStore from "@assets/images/app-store.svg";
import GooglePlay from "@assets/images/google-play.svg";
import VisitWebsite from "@assets/images/visit-website.svg";
import MobileApp from "@assets/images/mobile-app.png";

const Info = () => (
	<div className="sm-container">
		<div className="flex items-center gap-[120px] md:flex-col md:gap-6 lg:gap-4 mb-[120px] md:mb-16">
			<div className="flex-1">
				<div className="mb-4 title-sub-section bg-gradient3 clip">
					Metaverse
				</div>
				<h2 className="mb-4 title-lg bg-gradient3 clip">
					Own it Digitally. Use it in a Parallel Universe.
				</h2>
				<p className="body-xl text-sub-black">
					BEC will the main digital currency that will fuel the
					Elchai’s digital and tangible projects. Mainly, it would be
					used to buy and sell properties in the metaverse.
				</p>
			</div>
			<div className="lg:max-w-[300px] md:max-w-full max-w-[350px] w-full flex items-center justify-center">
				<Image src={BitCoin} width={350} alt="Bitcoin" />
			</div>
		</div>
		<div className="flex items-center gap-[120px] md:flex-col-reverse md:gap-6 lg:gap-4 mb-[120px] md:mb-16">
			<div className="lg:max-w-[300px] md:max-w-full max-w-[350px] w-full flex items-center justify-center">
				<Image src={Community} width={350} alt="Community" />
			</div>
			<div className="flex-1">
				<div className="mb-4 title-sub-section bg-gradient3 clip">
					The Elchai Car Club Collection
				</div>
				<h2 className="mb-4 title-lg bg-gradient3 clip">
					The Community WAGMI!
				</h2>
				<p className="body-xl text-sub-black">
					BEC will the main digital currency that will fuel the
					Elchai’s digital and tangible projects. Mainly, it would be
					used to buy and sell properties in the metaverse.
				</p>
			</div>
		</div>
		<div className="flex items-center gap-[120px] md:flex-col md:gap-6 lg:gap-4 mb-[120px] md:mb-16">
			<div className="flex-1">
				<div className="mb-4 title-sub-section bg-gradient3 clip">
					Try The Universe Eye Now!
				</div>
				<h2 className="mb-4 title-lg bg-gradient3 clip">
					Download the App on Your Device or Open the The Universe Eye
					Website
				</h2>
				<p className="body-xl text-sub-black mb-8">
					Let’s eXperience Metaverse journey with The Universe Eye.
					The metaverse opens you to a new reality of freedom. Nothing
					you’ve ever seen on earth.
				</p>
				<div className="flex gap-3 flex-wrap">
					<Image src={AppStore} width={160} alt="Bitcoin" />
					<Image src={GooglePlay} width={160} alt="Bitcoin" />
					<Image src={VisitWebsite} width={160} alt="Bitcoin" />
				</div>
			</div>
			<div className="lg:max-w-[300px] md:max-w-full max-w-[350px] w-full flex items-center justify-center">
				<Image src={MobileApp} width={302} alt="Bitcoin" />
			</div>
		</div>
	</div>
);
export default Info;
