import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { HStack, Spacer } from "@chakra-ui/react";

require("@solana/wallet-adapter-react-ui/styles.css");

const NavBar = () => (
	<HStack width="full" padding={4}>
		<Spacer />
		<WalletMultiButton />
	</HStack>
);

export default NavBar;
