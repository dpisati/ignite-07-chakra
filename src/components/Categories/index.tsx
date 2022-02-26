import { Flex, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import CategoryType from './CategoryType';

export default function Categories() {
    return (
        <SimpleGrid minChildWidth="200px" maxWidth="1170px" mx="auto" my="40px">
            <CategoryType
                title="night life"
                iconPath="/images/icons/cocktail.svg"
            />
            <CategoryType title="beach" iconPath="/images/icons/surf.svg" />
            <CategoryType
                title="modern"
                iconPath="/images/icons/building.svg"
            />
            <CategoryType title="classic" iconPath="/images/icons/museum.svg" />
            <CategoryType
                title="and more..."
                iconPath="/images/icons/earth.svg"
            />
        </SimpleGrid>
    );
}
