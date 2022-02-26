import { Flex, Text } from '@chakra-ui/react';
import { Img } from '@chakra-ui/react';

export default function Hero() {
    return (
        <Flex align="center" position="relative" w="100" h="355" bg="red.100">
            <Img
                src="/images/background.svg"
                alt="World Trip"
                boxSize="335px"
                objectFit="cover"
                w="100vw"
                h="355"
            />
            <Flex
                w="100%"
                h="100%"
                position="absolute"
                left="0"
                top="0"
                color="worldTrip.light.white"
                align="center"
                justify="center"
            >
                <Flex
                    h="100%"
                    w="100%"
                    maxWidth="1170px"
                    justify="space-between"
                >
                    <Flex
                        align="flex-start"
                        justify="center"
                        direction="column"
                    >
                        <Text as="h1" fontSize="36px">
                            5 Continentes, <br />
                            infinitas possibilidades.
                        </Text>
                        <Text as="h2" fontSize="20px" mt="20px">
                            Chegou a hora de tirar do papel a viagem que você{' '}
                            <br />
                            sempre sonhou.
                        </Text>
                    </Flex>
                    <Img
                        maxWidth="417px"
                        mb="-130px"
                        transform="rotate(10deg)"
                        src="/images/airplane.svg"
                    />
                </Flex>
            </Flex>
        </Flex>
    );
}
