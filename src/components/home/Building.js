import Image from "next/image";
import UniEye from "@assets/images/universe-eye.png";
import BecNft from "@assets/images/bec-nft.png";
import BecToken from "@assets/images/bec-token.png";

const buildList = [
	{
		title: "The Universe Eye",
		description:
			"The Universe Eye is a real-world based metaverse world. It’s a virtual venue where users can create, connect, and own. Imagine a world that allows deep personalization. Initially, The Universe Eye wil replicate the architectural haven of Dubai. It will be the digital home of the BEC Club where events big and small can be hosted",
		img: UniEye,
		alt: "Universe eye",
	},
	{
		title: "BEC Club NFTs",
		description:
			"Four-tier limited edition NFTs will serve as keys to access the BEC Club. Drive rare supercars and stay in luxury rooms within the BEC Club to be built at Bluewaters, Dubai.",
		img: BecNft,
		alt: "BEC Nft",
	},
	{
		title: "BEC Token",
		description:
			"BEC token will be the main token used within The Universe Eye Ecosystem. BEC will have other utilities as the project evolves.",
		img: BecToken,
		alt: "BEC Token",
	},
];

const Building = () => (
	<div className="mb-[112px] md:mb-[34px]">
		<div className="container">
			<h2 className="mb-[75px] title-lg text-center bg-gradient3 clip">
				What We Are Building
			</h2>
			<div className="flex flex-col gap-24 md:gap-11 relative">
				<div className="md:hidden w-0.5 h-[calc(100%-150px)] bg-gradient3 absolute left-1/2 top-[50px]">
					<span className="w-[22px] h-[22px] p-[3px] rounded-full bg-[#82ADF2] absolute top-0 -left-2.5">
						<span className="w-full h-full p-[3px] rounded-full bg-gradient3 block">
							<span className="w-full h-full rounded-full bg-white block"></span>
						</span>
					</span>
					<span className="w-[22px] h-[22px] p-[3px] rounded-full bg-[#82ADF2] absolute top-1/2 -left-2.5">
						<span className="w-full h-full p-[3px] rounded-full bg-gradient3 block">
							<span className="w-full h-full rounded-full bg-white block"></span>
						</span>
					</span>
					<span className="w-[22px] h-[22px] p-[3px] rounded-full bg-[#82ADF2] absolute bottom-0 -left-2.5">
						<span className="w-full h-full p-[3px] rounded-full bg-gradient3 block">
							<span className="w-full h-full rounded-full bg-white block"></span>
						</span>
					</span>
				</div>
				{buildList.map((item, index) => {
					return (
						<div
							key={index}
							className="flex items-center md:flex-col-reverse md:gap-6"
						>
							<div className="md:w-full w-1/2 pr-20 md:pr-0">
								<h3 className="title-screen text-black mb-4">
									{item.title}
								</h3>
								<p className="body-xl text-sub-black">
									{item.description}
								</p>
							</div>
							<div className="md:w-full lg:pl-11 md:pl-0 w-1/2 md:justify-center flex items-center justify-end">
								<Image
									src={item.img}
									width={442}
									alt={item.alt}
								/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	</div>
);
export default Building;
