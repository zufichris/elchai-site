import Image from "next/image";
import TotalSupply from "@assets/images/total-supply.png";

const supplyList = [
	{
		title: "12.5% Team",
		description: "Will Received",
		amount: "125,000,000.00",
		color: "#6096A3",
	},
	{
		title: "5.5% Advisor",
		description: "Will Received",
		amount: "55,000,000.00",
		color: "#67D849",
	},
	{
		title: "2.4% Seed Sale",
		description: "Will Received",
		amount: "24,000,000.00",
		color: "#C2A645",
	},
	{
		title: "13.04% Private Sale",
		description: "Will Received",
		amount: "130,434,782.61",
		color: "#D757DD",
	},
	{
		title: "25% Fondation",
		description: "Will Received",
		amount: "250,000,000.00",
		color: "#EEDF13",
	},
	{
		title: "13.56% The Reserve",
		description: "Will Received",
		amount: "135,565,217.39",
		color: "#D66E61",
	},
	{
		title: "6% Community Sale",
		description: "Will Received",
		amount: "60,000,000.00",
		color: "#7F4EE0",
	},
	{
		title: "22% Listing & Liquidity",
		description: "Will Received",
		amount: "220,000,000.00",
		color: "#E2B349",
	},
];

const Supply = () => (
	<div className="mb-[120px] md:mb-16">
		<div className="container">
			<div className="flex items-center gap-[120px] md:flex-col-reverse md:gap-6 lg:gap-4">
				<div className="max-w-[484px] w-full flex flex-col gap-4">
					{supplyList.map((item, index) => {
						return (
							<div
								key={index}
								className="border border-stroke-dark flex items-end justify-between rounded-radius-sm p-3"
							>
								<div className="flex gap-3">
									<div
										className="w-2 rounded-full"
										style={{ backgroundColor: item.color }}
									/>
									<div>
										<h4
											className="title-body mb-1"
											style={{ color: item.color }}
										>
											{item.title}
										</h4>
										<p className="body-default text-sub-black">
											{item.description}
										</p>
									</div>
								</div>
								<div className="body-default text-sub-black">
									{item.amount}
								</div>
							</div>
						);
					})}
				</div>
				<div className="lg:max-w-[300px] md:max-w-full max-w-[504px] w-full flex items-center justify-center">
					<Image src={TotalSupply} width={504} alt="Supply" />
				</div>
			</div>
		</div>
	</div>
);
export default Supply;
