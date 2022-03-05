import { Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';

interface CityCardProps {
    country: string;
    city: string;
    flagImagePath: string;
    thumbImg: string;
}

export default function CityCard({
    country,
    city,
    flagImagePath,
    thumbImg,
}: CityCardProps) {
    return (
        <Flex h="279px" direction="column" bg="worldTrip.light.white">
            <Img src={thumbImg} alt={city} />
            <Flex
                w="100%"
                h="100%"
                align="center"
                justify="space-between"
                p="24px"
            >
                <Flex direction="column">
                    <Text
                        color="worldTrip.dark.text"
                        fontWeight="600"
                        fontSize="20px"
                        mb="8px"
                    >
                        {city}
                    </Text>
                    <Text
                        color="worldTrip.dark.info"
                        fontWeight="400"
                        fontSize="16px"
                    >
                        {country}
                    </Text>
                </Flex>
                <Img src={flagImagePath} w="30px" h="30px" />
            </Flex>
        </Flex>
    );
}
