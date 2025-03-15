import Image from "next/image";
import Link from "next/link";
import Logo from "@assets/images/logo.png";
import AppStore from "@assets/icons/app-store.svg";
import GooglePlay from "@assets/icons/google-play.svg";
import Oculus from "@assets/icons/oculus.svg";

const navMenu = [
	{
		title: "About",
		link: "",
	},
	{
		title: "Elchai Guides",
		link: "",
	},
	{
		title: "Privacy",
		link: "",
	},
	{
		title: "Support",
		link: "",
	},
	{
		title: "Community Rules",
		link: "",
	},
	{
		title: "Build an Avatar",
		link: "",
	},
	{
		title: "Terms",
		link: "",
	},
	{
		title: "FAQ",
		link: "",
	},
];

const apps = [
	{
		icon: AppStore,
		link: "#",
		alt: "AppStore",
	},
	{
		icon: GooglePlay,
		link: "#",
		alt: "GooglePlay",
	},
	{
		icon: Oculus,
		link: "#",
		alt: "Oculus",
	},
];

const Footer = () => (
	<footer className="py-16 md:py-8 bg-[#020202]">
		<div className="lg-container">
			<div className="mb-6">
				<Link
						href={"/"}
						className="max-w-[150px] w-full mb-6 inline-block"
					>
						<Image src={Logo} alt="logo" width={100} height={100} />
					</Link>
				<div className="grid grid-cols-4 md:grid-cols-2 gap-y-4 gap-x-8 max-w-[580px] mb-6">
					{navMenu.map((nav, index) => {
						return (
							<Link
								key={index}
								href={nav.link}
								className="body-default text-white transition-all hover:text-stroke-gray"
							>
								{nav.title}
							</Link>
						);
					})}
				</div>
			</div>
			<div className="flex items-center md:flex-col md:gap-4 md:items-start justify-between">
				<p className="body-default text-white">
					© 2023 Elchai Group, Inc. All Rights Reserved.
				</p>
				<div className="flex items-center gap-2">
					{apps.map((app, index) => {
						return (
							<Link key={index} href={app.link} target="_blank">
								<Image src={app.icon} alt={app.alt} />
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	</footer>
);
export default Footer;
