import { Box, Center, Spacer, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Disconnected from "../components/Disconnected";
import NavBar from "../components/NavBar";
import Connected from "../components/Connected"
import styles from "../styles/Home.module.css";

import { useWallet } from "@solana/wallet-adapter-react"

const Home: NextPage = () => {
  const { connected } = useWallet()

	return (
		<div className={styles.container}>
			<Head>
				<title>Buildoors</title>
				<meta name="The NFT Collection for Buildoors" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Box
				w="full"
				h="calc(100vh)"
        bgColor="black"
				backgroundPosition="center"
			>
				<Stack w="full" h="calc(100vh)" justify="center">
					<NavBar />

					<Spacer />
					<Center>{connected ? <Connected /> : <Disconnected />}</Center>
					<Spacer />

					<Center>
						<Box marginBottom={4} color="white">
							<a
								href="https://twitter.com/_buildspace"
								target="_blank"
								rel="noopener noreferrer"
							>
								built with @_buildspace
							</a>
						</Box>
					</Center>
				</Stack>
			</Box>
		</div>
	);
};

export default Home;
