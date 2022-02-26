import { Flex } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import logoImg from '../../../public/images/logo.svg';

export default function Header() {
    return (
        <Flex
            w="100"
            borderBottom={'1px'}
            h="100"
            align="center"
            justify="center"
        >
            <Image src={logoImg} alt="World Trip" />
        </Flex>
    );
}
