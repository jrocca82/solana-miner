import { Flex } from "@chakra-ui/react";
import {
	MouseEventHandler,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from "react";
import { NextPage } from "next";
import { PublicKey } from "@solana/web3.js";
import { Metaplex, walletAdapterIdentity } from "@metaplex-foundation/js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

interface NewMintProps {
	mint: PublicKey;
}

const NewMint: NextPage<NewMintProps> = ({ mint }) => {
	const [metadata, setMetadata] = useState<any>();
	const { connection } = useConnection();
	const walletAdapter = useWallet();
	const metaplex = useMemo(() => {
		return Metaplex.make(connection).use(walletAdapterIdentity(walletAdapter));
	}, [connection, walletAdapter]);

	useEffect(() => {
		// What this does is to allow us to find the NFT object
		// based on the given mint address
		metaplex
			.nfts()
			.findByMint({ mintAddress: new PublicKey(mint) })
			.then((nft) => {
				// We then fetch the NFT uri to fetch the NFT metadata
				fetch(nft.uri)
					.then((res) => res.json())
					.then((metadata) => {
						setMetadata(metadata);
					});
			});
	}, [mint, metaplex, walletAdapter]);

	const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
		async (event) => {},
		[]
	);

	return <Flex></Flex>;
};

export default NewMint;
