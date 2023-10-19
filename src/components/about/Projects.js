import Image from "next/image";
import Luxury from "@assets/images/luxury.png";
import Design from "@assets/images/design.png";
import Familiarity from "@assets/images/familiarity.png";
import Access from "@assets/images/access.png";
import BlockChain from "@assets/images/blockchain.png";
import AddToCart from "@assets/images/add-to-cart.png";
import UniEye from "@assets/images/uni-eye.png";

const projectList = [
	{
		title: "Familiarity",
		description:
			"We are going to create content that is inspired by what is real and familiar to people.",
		icon: Familiarity,
	},
	{
		title: "Access & composability",
		description:
			"Users can freely enter, leave, and contribute to help shape the future of our open metaverse.",
		icon: Access,
	},
	{
		title: "Our Design",
		lists: [
			"Facilitates deep personalization",
			"Allows composability on top of the base layer",
			"Interoperable network",
			"Enables ownership",
			"Powers P2P interaction",
		],
		icon: Design,
	},
	{
		title: "Luxury",
		description:
			"Users through their avatars would access all the virtual luxury experience The Universe Eye has to offer. Plus, they can even create their own luxurious space.",
		icon: Luxury,
	},
];

const Projects = () => (
	<div className="mb-[120px] md:mb-16">
		<div className="sm-container">
			<div className="max-w-[831px] w-full mx-auto text-center mb-16 md:mb-10">
				<h2 className="mb-4 title-lg bg-gradient3 clip">
					Our Projects
				</h2>
				<p className="body-xl text-sub-black">
					We envision a world where luxury experiences are made
					on-chain
				</p>
			</div>

			<div className="flex items-center gap-[52px] md:flex-col md:gap-10 lg:gap-4 mb-24 md:mb-10">
				<div className="lg:max-w-[450px] md:max-w-full max-w-[612px] w-full flex items-center justify-center">
					<Image src={UniEye} width={612} alt="banner" />
				</div>
				<div className="flex-1">
					<h3 className="mb-4 title-screen text-black">
						The Universe Eye
					</h3>
					<p className="body-xl text-sub-black">
						At Elchai, we define the metaverse differently. To us,
						the metaverse is a virtual community where the human
						desires of connection, ownership, and satisfaction are
						achieved on another level.
					</p>
				</div>
			</div>

			<div className="grid grid-cols-2 sm:grid-cols-1 gap-6 mb-[120px] md:mb-16">
				{projectList.map((item, index) => {
					return (
						<div key={index} className="pt-[82px] relative">
							<Image
								src={item.icon}
								alt={item.title}
								width={164}
								className="absolute right-5 top-[0]"
							/>
							<div className="bg-gradient4 pt-[61px] px-5 pb-9 rounded-radius-sm h-full">
								<h4 className="title-screen text-white mb-4">
									{item.title}
								</h4>
								{item.description && (
									<p className="body-xl text-white">
										{item.description}
									</p>
								)}
								{item.lists && item.lists.length > 0 && (
									<ul className="flex flex-col pl-5">
										{item.lists.map((list, index) => {
											return (
												<li
													key={index}
													className="body-xl text-white list-disc pl-2"
												>
													{list}
												</li>
											);
										})}
									</ul>
								)}
							</div>
						</div>
					);
				})}
			</div>

			<div className="flex items-center gap-[120px] md:flex-col-reverse md:gap-6 lg:gap-4 mb-[120px] md:mb-16">
				<div className="flex-1">
					<h2 className="mb-4 title-lg bg-gradient3 clip">
						BEC Club NFTs
					</h2>
					<p className="body-xl text-sub-black">
						We offer luxury consumers a tailored experience for
						supercar and space rental. Community members can rent
						any of our car club’s supercar collection or luxury
						capsules to attain luxury experience in real life. The
						BEC Club is a brick-and-mortar venue accessible in the
						metaverse and in real life. We will host various events
						from product launching to concerts.The BEC Club will
						feature:
					</p>
					<ul className="body-xl text-sub-black flex flex-col pl-5 list-disc mb-4">
						<li>1 Lounge</li>
						<li>1 Disco Club</li>
						<li>20 VIP Capsules (150 sqm)</li>
						<li>15 Luxury Capsules (200 sqm)</li>
						<li>4 Grand Penthouses (600 sqm)</li>
						<li>
							1 Exclusive Restaurant with a Private-Screened Room
						</li>
					</ul>
					<div className="title-sub-section clip bg-gradient3">
						Access will be gated by the 4-tier Elchai NFTs
					</div>
				</div>
				<div className="lg:max-w-[300px] md:max-w-full max-w-[350px] w-full flex items-center justify-center">
					<Image src={BlockChain} width={350} alt="Blockchain" />
				</div>
			</div>

			<div className="flex items-center gap-[120px] md:flex-col md:gap-6 lg:gap-4 mb-[120px] md:mb-16">
				<div className="lg:max-w-[300px] md:max-w-full max-w-[350px] w-full flex items-center justify-center">
					<Image src={AddToCart} width={350} alt="Add to cart" />
				</div>
				<div className="flex-1">
					<h2 className="mb-4 title-lg bg-gradient3 clip">
						BEC Token
					</h2>
					<p className="body-xl text-sub-black">
						The $BEC token is the single, exclusive currency in The
						Elchai ecosystem. The token’s utility comes from the
						utility of $BEC to: Buy and sell NFTs in our marketplace
						<br />
						Have access to the Elchai Car Club in the metaverse and
						the real world Purchase passes to events and any
						facilities offered by the BEC Clubs Purchase the rights
						to ownership of real estates in the metaverse and real
						life. <br />
						There is a deep symbiosis in this design which
						facilitates sustained user growth while maintaining easy
						access to the game.$BEC is an ERC-20 token with a
						maximum supply of 1 BILLION tokens (1,000,000,000).
					</p>
				</div>
			</div>
		</div>
	</div>
);
export default Projects;
