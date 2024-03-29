import App from 'next/app';
import { createContext } from 'react';
import '../styles/globals.css';
import ScrollTop from '@/components/ScrollTop';

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<Component {...pageProps} />
			<ScrollTop />
		</>
	);
};

export default MyApp;
