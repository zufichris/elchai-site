import Image from "next/image";
import Envelope from "@assets/icons/envelope.svg";
import BannerPattern from "@assets/images/banner-design.svg";
import Twitter from "@assets/icons/twitter.svg";
import LinkedIn from "@assets/icons/linkedin.svg";
import Instagram from "@assets/icons/instagram.svg";
import Tiktok from "@assets/icons/tiktok.svg";
import Telegram from "@assets/icons/telegram.svg";
import Link from "next/link";

const socials = [
	{
		icon: Twitter,
		link: "https://twitter.com/elchaigroup?s=21&t=z4wxoVnbaES9Yu0_wOQksw",
		alt: "Twitter",
	},
	{
		icon: LinkedIn,
		link: "https://www.linkedin.com/company/elchai-group/",
		alt: "LinkedIn",
	},
	{
		icon: Instagram,
		link: "https://www.instagram.com/elchaigroup/?igshid=MzRlODBiNWFlZA%3D%3D",
		alt: "Instagram",
	},
	{
		icon: Tiktok,
		link: "https://www.tiktok.com/@elchaigroup",
		alt: "Tiktok",
	},
	{
		icon: Telegram,
		link: "https://t.me/elchaigroup",
		alt: "Telegram",
	},
];

const Subscribe = () => (
	<div className="pt-[97px] pb-[71px] md:py-10 relative z-0 bg-gradient3">
		<Image src={BannerPattern} fill alt="banner" />
		<div className="container relative">
			<div className="max-w-[651px] w-full mx-auto text-center">
				<h2 className="title-lg text-white mb-4">
					Subscribe to Newsletter
				</h2>
				<p className="body-xl mb-8 text-gray">
					Get most interesting information on crypto every week
				</p>
				<form className="mb-16">
					<div className="flex gap-2 sm:flex-col">
						<div className="relative flex-1">
							<input
								type="email"
								className="border relative border-white placeholder:text-white outline-none rounded-radius-sm w-full bg-white/20 pl-4 py-[15px] pr-10 text-white body-lg"
								placeholder="Enter Your Email"
							/>
							<Image
								src={Envelope}
								alt="Envelope"
								className="w-4 h-4 absolute top-5 right-4"
							/>
						</div>
						<button className="btn" type="submit">
							<span>Subscribe</span>
						</button>
					</div>
				</form>
				<div>
					<h4 className="title-sub-section text-white mb-4">
						Join the Growing Elchai Group Community
					</h4>
					<ul className="flex items-center justify-center gap-5">
						{socials.map((social, index) => {
							return (
								<li key={index}>
									<Link
										href={social.link}
										target="_blank"
										className="block transition-all opacity-100 hover:opacity-90"
									>
										<Image
											src={social.icon}
											alt={social.alt}
											height={40}
										/>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	</div>
);
export default Subscribe;
