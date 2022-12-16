import {
	Container,
	Heading,
	HStack,
	Text,
	VStack,
	Button,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { MouseEventHandler, useCallback } from "react";

const Disconnected = () => {
	const modalState = useWalletModal();
	const { wallet, connect } = useWallet();

	const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
		(event) => {
			if (event.defaultPrevented) {
				return;
			}

			if (!wallet) {
				modalState.setVisible(true);
			} else {
				connect().catch(() => {});
			}
		},
		[wallet, connect, modalState]
	);

	return (
		<Container>
			<VStack spacing={20}>
				<Heading textAlign="center">
					Mint your buildoor. Earn $BLD. Level up.
				</Heading>
				<Button variant="solana" size="lg" onClick={handleClick}>
					<HStack>
						<Text>become a buildoor</Text>
						<ArrowForwardIcon />
					</HStack>
				</Button>
			</VStack>
		</Container>
	);
};

export default Disconnected;
