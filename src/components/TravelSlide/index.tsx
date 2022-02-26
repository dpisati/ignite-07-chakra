import { Box, Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';

interface TravelSlide {
    title: string;
    subtitle: string;
    backgroundPath: string;
}

export default function TravelSlide({
    title,
    subtitle,
    backgroundPath,
}: TravelSlide) {
    return (
        <Flex w="100%" h="100%" bg="red.300">
            <Img
                src={backgroundPath}
                alt="Europe"
                position="absolute"
                objectFit="cover"
                top="0"
                left="0"
                h="100%"
                w="100%"
            />
            <Flex
                w="100%"
                h="100%"
                zIndex={1}
                align="center"
                justify="center"
                direction="column"
            >
                <Text
                    color="worldTrip.light.text"
                    fontSize="48px"
                    fontWeight="bold"
                >
                    {title}
                </Text>
                <Text
                    color="worldTrip.light.text"
                    fontSize="24px"
                    fontWeight="bold"
                    mt="16px"
                >
                    {subtitle}
                </Text>
            </Flex>
        </Flex>
    );
}
