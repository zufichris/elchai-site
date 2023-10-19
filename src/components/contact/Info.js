import Image from "next/image";
import ChatRound from "@assets/images/chat-round.png";
import Users from "@assets/images/users.png";
import PinAtMap from "@assets/images/pin-at-map.png";

const infoList = [
	{
		title: "Headquarters",
		description: "Silicon Oasis, Dubai, UAE",
		img: PinAtMap,
	},
	{
		title: "Email Us",
		link: "info@elchaigroup.com",
		img: ChatRound,
	},
	{
		title: "Partnership",
		link: "maria@elchaigroup.com",
		img: Users,
	},
];

const Info = () => (
	<div className="max-w-[1136px] px-5 w-full mx-auto md:mb-[64px] mb-[100px]">
		<div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-20 lg:gap-8">
			{infoList.map((info, index) => {
				return (
					<div key={index} className="pt-[50px] relative">
						<div className="bg-gradient2 p-px rounded-radius-sm">
							<div className="bg-white rounded-radius-sm flex items-center flex-col pt-[124px] px-5 pb-7">
								<Image
									src={info.img}
									width={164}
									alt={info.title}
									className="absolute top-0 mx-auto"
								/>
								<h3 className="title-screen bg-gradient3 clip mb-4">
									{info.title}
								</h3>
								{info.description && (
									<p className="text-sub-black body-lg">
										{info.description}
									</p>
								)}
								{info.link && (
									<a
										href={`mailto:${info.link}`}
										className="text-sub-black body-lg transition-all hover:text-black"
									>
										{info.link}
									</a>
								)}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	</div>
);
export default Info;
