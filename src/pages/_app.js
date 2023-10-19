import Head from "next/head";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" sizes="52x46" />
				<title>The Universe Eye</title>

				<meta prefix="og: http://ogp.me/ns#" />
				<meta property="og:title" content="The Universe Eye" />
				<meta property="og:type" content="website" />
				<meta property="og:description" content="Elchai Group" />
				{/* <meta property="og:image" content="https://elchaigroup.com/cover.png" /> */}
				<meta property="og:url" content="https://elchaigroup.com/" />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
