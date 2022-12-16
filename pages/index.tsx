import type { NextPage } from "next";
import Disconnected from "../components/Disconnected";
import Connected from "../components/Connected";
import { useWallet } from "@solana/wallet-adapter-react";
import MainLayout from "../components/MainLayout";
import { Flex } from "@chakra-ui/react";

const Home: NextPage = () => {
	const { connected } = useWallet();

	return <Flex> {connected ? <Connected /> : <Disconnected />}</Flex>;
};

export default Home;
