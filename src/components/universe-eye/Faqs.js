import {
	ControlledAccordion,
	useAccordionProvider,
	AccordionItem,
} from "@szhsin/react-accordion";

const faqs = [
	{
		header: "What is the utility of the BEC Token?",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		header: "How can I buy the BEC Token?",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		header: "Where can l use BEC token?",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
];

const Faqs = () => {
	const providerValue = useAccordionProvider({
		allowMultiple: true,
		transition: true,
		transitionTimeout: 250,
	});

	return (
		<div className="mb-[120px] md:mb-16">
			<div className="sm-container">
				<div className="grid grid-cols-2 gap-[120px] md:grid-cols-1 md:gap-6 lg:gap-4">
					<div className="flex-1">
						<h2 className="mb-4 title-lg bg-gradient3 clip">
							Frequently Asked Questions
						</h2>
						<p className="body-xl text-sub-black">
							Can’t find answers to your questions here? Join our
							community channels. Our community managers will
							gladly respond to your questions.
						</p>
					</div>
					<div className="flex items-center justify-center">
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
