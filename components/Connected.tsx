import {
	Button,
	Container,
	Heading,
	HStack,
	Text,
	VStack,
	Image,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { MouseEventHandler, useCallback, useState, useMemo } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/router";
import {
	Metaplex,
	walletAdapterIdentity,
	CandyMachineV2,
} from "@metaplex-foundation/js";

const Connected = () => {
	const { connection } = useConnection();
	const walletAdapter = useWallet();
	const [candyMachine, setCandyMachine] = useState<CandyMachineV2>();
	const [isMinting, setIsMinting] = useState(false);
	const router = useRouter();

	const metaplex = useMemo(() => {
		return Metaplex.make(connection).use(walletAdapterIdentity(walletAdapter));
	}, [connection, walletAdapter]);

	const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
		async (event) => {
			if (event.defaultPrevented) return;
			if (!walletAdapter.connected || !candyMachine) return;

			try {
				setIsMinting(true);
				const nft = await metaplex.candyMachinesV2().mint({ candyMachine });

				console.log(nft);
				router.push(`/new-mint?mint=${nft.nft.address.toBase58()}`);
			} catch (error) {
				alert(error);
			} finally {
				setIsMinting(false);
			}
		},
		[walletAdapter.connected, candyMachine, metaplex, router]
	);

	return (
		<VStack spacing={20}>
			<Container>
				<VStack spacing={8}>
					<Heading textAlign="center">Welcome Buildoor.</Heading>

					<Text fontSize="xl" textAlign="center">
						Each buildoor is randomly generated and can be staked to receive
						<Text as="b"> $BLD</Text> Use your <Text as="b"> $BLD</Text> to
						upgrade your buildoor and receive perks within the community!
					</Text>
				</VStack>
			</Container>

			<Button variant="solana" size="lg" onClick={handleClick}>
				<Text>mint buildoor</Text>
				<ArrowForwardIcon />
			</Button>

			<Button variant="solana" size="lg">
				<Text>stake my buildoor</Text>
				<ArrowForwardIcon />
			</Button>
		</VStack>
	);
};

export default Connected;
