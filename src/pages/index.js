import { Box } from '@chakra-ui/react';

import Header from '_comps/YouCanAddYourComponentsInThisFolder/Header';
import Hero from '_comps/YouCanAddYourComponentsInThisFolder/Hero';
import Features from '_comps/YouCanAddYourComponentsInThisFolder/Features';
import FirstCTA from '_comps/YouCanAddYourComponentsInThisFolder/FirstCTA';

const Home = () => (
	<>
		<Header />
		<Box as='main'>
			<Hero />
			<Features />
			<FirstCTA />
		</Box>
	</>
);

export default Home;

export async function getStaticProps() {
	// ? fetch data from process.env.NEXT_PUBLIC_WORDPRESS_URL and pass the content to the page via props
	// const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_URL);
	// const json = await res.json();
	// console.log(json);

	return {
		props: {
			// ? add your fetched data here
		},
	};
}
