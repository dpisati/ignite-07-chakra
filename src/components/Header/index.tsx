import { Box, Flex, Img } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import logoImg from '../../../public/images/logo.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();

    const isHome = router.asPath === '/';
    console.log('🚀 ~ file: index.tsx ~ line 12 ~ Header ~ isHome', isHome);

    return (
        <Flex
            w="100"
            h="100"
            align="center"
            justify="center"
            maxWidth="1170px"
            mx="auto"
            position="relative"
        >
            <Link href="/">
                <a>
                    <Image src={logoImg} alt="World Trip" />
                </a>
            </Link>
            {!isHome && (
                <Link href="/">
                    <Flex
                        position="absolute"
                        left="0"
                        top="0"
                        w="100px"
                        h="100px"
                        align="center"
                        justify="center"
                        _hover={{ cursor: 'pointer' }}
                    >
                        <Img
                            src="/images/icons/goBack.svg"
                            alt="Go back to home"
                            w="12px"
                            h="22px"
                        />
                    </Flex>
                </Link>
            )}
        </Flex>
    );
}
