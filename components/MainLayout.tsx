import { ReactNode } from "react";
import Head from "next/head";
import { Box, Center, Spacer, Stack, Flex } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Link from "next/link";

const MainLayout = ({ children }: { children: ReactNode }) => {
	return (
		<Flex flexDir="column">
			<Head>
				<title>Buildoors</title>
				<meta name="The NFT Collection for Buildoors" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Box>
				<Stack w="full" h="calc(100vh)" justify="center">
					<NavBar />

					<Spacer />

					<Center>{children}</Center>

					<Spacer />

					<Center>
						<Box marginBottom={4} color="white">
							<Link href="https://twitter.com/_buildspace" target="_blank">
								build with @_buildspace
							</Link>
						</Box>
					</Center>
				</Stack>
			</Box>
		</Flex>
	);
};

export default MainLayout;
