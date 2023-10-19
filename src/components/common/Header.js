import Image from "next/image";
import Link from "next/link";
import Logo from "@assets/images/logo.png";
import Close from "@assets/icons/close.svg";
import Menu from "@assets/icons/menu.svg";
import { useState } from "react";
import { useRouter } from "next/router";

const navMenu = [
	{
		title: "Home",
		link: "/",
	},
	{
		title: "About",
		link: "/about",
	},
	{
		title: "The Universe Eye",
		link: "/universe-eye",
	},
	{
		title: "Contact",
		link: "/contact",
	},
];

const Header = () => {
	const router = useRouter();

	const [mobileMenu, setMobileMenu] = useState(false);

	const openMenu = () => {
		setMobileMenu(true);
		document.body.classList.add("overflow-hidden");
	};

	const closeMenu = () => {
		setMobileMenu(false);
		document.body.classList.remove("overflow-hidden");
	};

	return (
		<header className="py-10 absolute top-0 left-0 w-full z-10">
			<div className="lg-container">
				<div className="flex items-center justify-between">
					<Link
						href={"/"}
						className="max-w-[164px] lg:max-w-[143px] w-full"
					>
						<Image src={Logo} alt="logo" />
					</Link>
					<div className="flex items-center gap-8 lg:hidden">
						{navMenu.map((item, index) => {
							return (
								<Link
									key={index}
									href={item.link}
									className={`relative transition-all py-1 px-3 group before:content-[''] before:w-full before:h-full before:bg-gradient before:opacity-0 hover:before:opacity-100 before:absolute before:transition-all before:top-0 before:left-0 before:rounded-full
									after:content-[''] after:w-[calc(100%-2px)] after:h-[calc(100%-2px)] after:bg-white after:opacity-0 hover:after:opacity-100 after:absolute after:transition-all after:top-px after:rounded-full after:left-px after:z-[1] ${
										router.pathname === item.link
											? "before:opacity-100 after:opacity-100"
											: ""
									}`}
								>
									<span
										className={`bg-white body-lg-bold block group-hover:bg-gradient2 clip relative z-10 transition-all ${
											router.pathname === item.link
												? "bg-gradient2"
												: ""
										}`}
									>
										{item.title}
									</span>
								</Link>
							);
						})}
					</div>

					<Link href={"#"} className="btn-secondary lg:hidden">
						White Paper
					</Link>

					<Image
						src={Menu}
						alt="Close"
						className="w-6 h-6 cursor-pointer hidden lg:block"
						onClick={openMenu}
					/>
				</div>
				<div
					className={`w-full h-screen bg-gradient3 fixed top-0 left-0 z-100 py-10 px-4 lg:flex flex-col gap-16 transition-all duration-500 hidden ${
						mobileMenu
							? "opacity-100 pointer-events-auto"
							: "opacity-0 pointer-events-none"
					}`}
				>
					<div className="flex justify-between items-center">
						<Link href={"/"} className="max-w-[143px] w-full">
							<Image src={Logo} alt="logo" />
						</Link>
						<Image
							src={Close}
							alt="Close"
							className="w-6 h-6 cursor-pointer"
							onClick={closeMenu}
						/>
					</div>
					<div className="flex-1 overflow-auto">
						<div className="flex flex-col items-start gap-9 mb-16">
							{navMenu.map((item, index) => {
								return (
									<Link
										key={index}
										href={item.link}
										onClick={() => closeMenu()}
										className={`relative transition-all py-1 px-3 group before:content-[''] before:w-full before:h-full before:bg-gradient before:opacity-0 hover:before:opacity-100 before:absolute before:transition-all before:top-0 before:left-0 before:rounded-full
									after:content-[''] after:w-[calc(100%-2px)] after:h-[calc(100%-2px)] after:bg-white after:opacity-0 hover:after:opacity-100 after:absolute after:transition-all after:top-px after:rounded-full after:left-px after:z-[1] ${
										router.pathname === item.link
											? "before:opacity-100 after:opacity-100"
											: ""
									}`}
									>
										<span
											className={`bg-white body-lg-bold block group-hover:bg-gradient2 clip relative z-10 transition-all ${
												router.pathname === item.link
													? "bg-gradient2"
													: ""
											}`}
										>
											{item.title}
										</span>
									</Link>
								);
							})}
						</div>
						<Link href={"#"} className="btn-secondary">
							White Paper
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};
export default Header;
