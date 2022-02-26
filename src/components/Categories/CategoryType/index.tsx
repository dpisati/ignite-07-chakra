import { Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';

interface CategoryTypeProps {
    title: string;
    iconPath: string;
}

export default function CategoryType({ title, iconPath }: CategoryTypeProps) {
    return (
        <Flex direction="column" align="center" justify="center" my="45px">
            <Img src={iconPath} alt={title} w="85px" h="85px" />
            <Text
                color="worldTrip.dark.text"
                fontWeight="600"
                mt="24px"
                fontSize=""
            >
                {title}
            </Text>
        </Flex>
    );
}
