import { Box, Text, useColorMode } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Categories from '../components/Categories';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home: NextPage = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <Head>
                <title>World Trip | Home</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Hero />
            <Categories />
            <Box w="90px" h="2px" bg="worldTrip.dark.text" mx="auto"></Box>
            <Text align="center" my="52px" fontSize="36px" fontWeight="600">
                Shall we go? <br /> So, chose your continent
            </Text>

            <Box w="100%" h="450px" maxWidth="1170px" mx="auto" mb="20">
                <Gallery />
            </Box>
        </>
    );
};

export default Home;
