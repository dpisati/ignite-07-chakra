import { useRouter } from 'next/router';
import React from 'react';
import Header from '../../components/Header';
import { RiInformationLine } from 'react-icons/ri';

import destinations from '../../../destinations.json';
import {
    Box,
    Flex,
    HStack,
    Icon,
    Img,
    SimpleGrid,
    Text,
    Tooltip,
} from '@chakra-ui/react';
import CityCard from '../../components/CityCard';

interface City {
    title: string;
    country: string;
    flagImgPath: string;
    thumbImg: string;
}

interface Destination {
    title: string;
    description: string;
    numberOfContries: string;
    languages: string;
    numberOfCities: string;
    totalCities: string;
    tooltip: string;
    cities: City[];
}

export default function Destination() {
    const router = useRouter();

    function capitalizeFirstLetter(word: string): string {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    const selectedCity: Destination[] = destinations.filter(
        (destination) =>
            destination.title ===
            capitalizeFirstLetter(router.query.city as string)
    );

    const city = selectedCity[0];

    return (
        <>
            <Header />
            <Flex w="100vw" h="500px" position="relative">
                <Img
                    src="/images/cities/amsterdamBanner.png"
                    alt="city banner"
                    objectFit="cover"
                    w="100vw"
                />
                <Box
                    w="100%"
                    h="100%"
                    maxWidth="1170px"
                    mx="auto"
                    position="absolute"
                    left="50%"
                    transform="translateX(-50%)"
                    bottom="0"
                >
                    <Text
                        fontSize="48px"
                        fontWeight="semibold"
                        color="worldTrip.light.white"
                        position="absolute"
                        left="0"
                        bottom="60px"
                    >
                        {city.title}
                    </Text>
                </Box>
            </Flex>
            <SimpleGrid
                w="100%"
                h="100%"
                mx="auto"
                my="80px"
                maxWidth="1170px"
                minChildWidth="200px"
            >
                <Text
                    fontSize="24px"
                    color="worldTrip.dark.text"
                    textAlign="justify"
                >
                    Europe is, by convention, one of the six continents of the
                    world. Comprising the western Eurasian peninsula, Europe is
                    generally divided from Asia on the east by the watershed of
                    the Ural Mountains, the Ural River, the Caspian Sea, the
                    Caucasus, and the Black Sea on the southeast.
                </Text>
                <HStack display="flex" align="center" justify="center" gap={5}>
                    <Flex direction="column" align="center" justify="center">
                        <Text
                            fontSize="48px"
                            color="worldTrip.primary"
                            fontWeight="semibold"
                        >
                            50
                        </Text>
                        <Text
                            fontSize="28px"
                            color="worldTrip.dark.text"
                            fontWeight="semibold"
                            mt="-20px"
                        >
                            countries
                        </Text>
                    </Flex>
                    <Flex direction="column" align="center" justify="center">
                        <Text
                            fontSize="48px"
                            color="worldTrip.primary"
                            fontWeight="semibold"
                        >
                            60
                        </Text>
                        <Text
                            fontSize="28px"
                            color="worldTrip.dark.text"
                            fontWeight="semibold"
                            mt="-20px"
                        >
                            languages
                        </Text>
                    </Flex>
                    <Flex direction="column" align="center" justify="center">
                        <Text
                            fontSize="48px"
                            color="worldTrip.primary"
                            fontWeight="semibold"
                        >
                            27
                        </Text>

                        <Text
                            fontSize="28px"
                            color="worldTrip.dark.text"
                            fontWeight="semibold"
                            mt="-20px"
                        >
                            cities +100
                            <Tooltip
                                hasArrow
                                label="Only 27 available on WorldTrip"
                                bg="gray.100"
                                color="gray.400"
                                fontSize="14px"
                                shouldWrapChildren
                                px="12px"
                                py="6px"
                            >
                                <Icon
                                    as={RiInformationLine}
                                    ml="6px"
                                    fontSize="20"
                                    fill="worldTrip.light.info"
                                />
                            </Tooltip>
                        </Text>
                    </Flex>
                </HStack>
            </SimpleGrid>

            <Box w="100%" h="100%" maxWidth="1170px" mx="auto">
                <Text
                    fontSize="36px"
                    color="worldTrip.dark.text"
                    fontWeight="medium"
                    mb="40px"
                >
                    Cities +100
                </Text>
            </Box>

            <SimpleGrid
                w="100%"
                h="100%"
                mx="auto"
                my="80px"
                maxWidth="1170px"
                minChildWidth="256px"
                gap="40px"
            >
                {city.cities.map((city) => (
                    <CityCard
                        key={city.title}
                        city={city.title}
                        country={city.country}
                        thumbImg={city.thumbImg}
                        flagImagePath={city.flagImgPath}
                    />
                ))}
            </SimpleGrid>
        </>
    );
}
