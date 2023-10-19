import Image from "next/image";
import {
	ControlledAccordion,
	useAccordionProvider,
	AccordionItem,
} from "@szhsin/react-accordion";

const faqs = [
	{
		header: "What is IMGBOT?",
		content:
			"IMGBOT is a revolutionary AI powered text to image generation platform available to over 500 Million Telegram Users worldwide",
	},
	{
		header: "What is the utility of the $IMGBOT Token?",
		content:
			"Holders of 1000 or more $IMGBOT tokens are able to access revenue share. The $IMGBOT token unlocks access to premium features, first access to new features, and expanding benefits as the ecosystem matures",
	},
	{
		header: "What is the cost to use IMGBOT?",
		content: (
			<>
				IMGBOT is Free to use with a limited set of features <br />
				IMGBOT PRO is available with all features at a rate of $39
				monthly or $399 for a 1 year subscription payable in $ETH or
				$IMGBOT tokens <br />
				<b>IMGBOT is 6x faster</b> than Midjourny at a more competitive
				cost
			</>
		),
	},
	{
		header: "What is the Tax on the IMGBOT token?",
		content: "5% buy 5% Sell",
	},
	{
		header: "What is IMGBOT’s Revenue Share and Burn model?",
		content:
			"50% of the subscriptions and advertising revenue collected as well as 1% of DEX trading volume is paid to holders of 1000 or more IMGBOT tokens as Ethereum equivalent to 80% of the rev share collected, with 20% of that total collected being permanently  burned.",
	},
	{
		header: "What is the total supply of $IMGBOT tokens?",
		content: (
			<>
				The total supply of $IMGBOT is 1,000,000 Tokens <br />
				The supply only decreases overtime with the burn
			</>
		),
	},
	{
		header: "What is the initial circulating supply of IMGBOT Tokens?",
		content: (
			<>
				All 1,000,000 IMGBOT Tokens are in circulation with: <br />
				80% initially in the LP <br />
				10% for the builders <br />
				10% reserved for CEX listings
			</>
		),
	},
	{
		header: "Where can I buy the $IMGBOT token?",
		content: (
			<>
				$IMGBOT is available for purchase on{" "}
				<a
					href="https://app.uniswap.org/#/swap?outputCurrency=0x03ee7ef60fcabaff08beb3f0c0257575e9402514"
					className="text-primary"
				>
					Uniswap
				</a>
			</>
		),
	},
];

const Faqs = () => {
	const providerValue = useAccordionProvider({
		allowMultiple: true,
		transition: true,
		transitionTimeout: 250,
	});

	return (
		<div className="bg-secondary py-16 sm:py-12">
			<div className="container">
				<div className="flex items-center justify-center gap-8 sm:flex-col sm:items-start">
					<div className="flex items-center">
						<h2 className="h2 text-white">FAQ</h2>
					</div>
					<div className="max-w-[600px] w-full">
						<ControlledAccordion providerValue={providerValue}>
							{faqs.map(({ header, content }, i) => (
								<AccordionItem header={header} key={i}>
									{content}
								</AccordionItem>
							))}
						</ControlledAccordion>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Faqs;
