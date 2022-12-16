import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ConnectionContext } from "../contexts/WalletContext";
import theme from "../styles/theme";
import MainLayout from "../components/MainLayout";

require("@solana/wallet-adapter-react-ui/styles.css");

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ConnectionContext>
			<ChakraProvider theme={theme}>
				<MainLayout>
					<Component {...pageProps} />
				</MainLayout>
			</ChakraProvider>
		</ConnectionContext>
	);
}

export default MyApp;
