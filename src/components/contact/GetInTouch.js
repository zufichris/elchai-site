import Envelope from "@assets/icons/envelope-black.svg";
import User from "@assets/icons/user.svg";
import Image from "next/image";

const GetInTouch = () => (
	<div className="mb-32 max-w-[1136px] px-5 w-full mx-auto md:mb-[64px]">
		<div className="w-full mx-auto text-center mb-6">
			<h2 className="title-lg bg-gradient3 clip mb-8">Get In Touch</h2>
			<form className="w-full">
				<div className="grid grid-cols-2 gap-4 mb-4">
					<div className="text-left">
						<label
							htmlFor="name"
							className="body-default text-black mb-2 block"
						>
							Name
						</label>
						<div className="relative flex-1">
							<input
								id="name"
								type="text"
								className="input"
								placeholder="Name"
							/>
							<Image
								src={User}
								alt="user"
								className="w-4 h-4 absolute top-5 right-4"
							/>
						</div>
					</div>
					<div className="text-left">
						<label
							htmlFor="email"
							className="body-default text-black mb-2 block"
						>
							Email
						</label>
						<div className="relative flex-1">
							<input
								id="email"
								type="email"
								className="input"
								placeholder="Name"
							/>
							<Image
								src={Envelope}
								alt="Envelope"
								className="w-4 h-4 absolute top-5 right-4"
							/>
						</div>
					</div>
				</div>
				<div className="text-left mb-8">
					<label
						htmlFor="message"
						className="body-default text-black mb-2 block"
					>
						Message
					</label>
					<textarea
						id="message"
						className="input h-[259px]"
						placeholder="Input your message here"
					/>
				</div>
				<div className="flex">
					<button
						className="bg-gradient3 rounded-radius-sm p-4 max-w-[516px] w-full text-center title-body text-white transition-all hover:opacity-90 opacity-100"
						type="submit"
					>
						<span>Submit</span>
					</button>
				</div>
			</form>
		</div>
	</div>
);
export default GetInTouch;
