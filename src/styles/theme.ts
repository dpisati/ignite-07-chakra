import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

export const theme = extendTheme({
    colors: {
        gray: {
            '900': '#181b23',
            '800': '#1f2029',
            '700': '#353646',
            '600': '#4b4d63',
            '500': '#616480',
            '400': '#797d9a',
            '300': '#9699b0',
            '200': '#b3b5c6',
            '100': '#d1d2dc',
            '50': '#eeeef2',
        },
        worldTrip: {
            primary: '#FFBA08',
            dark: {
                black: '#000000',
                text: '#47585B',
                info: '#999999',
                info50: '#80999999',
            },
            light: {
                white: '#FFFFFF',
                text: '#F5F8FA',
                info: '#DADADA',
            },
        },
    },
    fonts: {
        heading: 'Poppins, sans-serif',
        body: 'Poppins, sans-serif',
    },
    styles: {
        global: (props) => ({
            body: {
                bg: mode(
                    'worldTrip.dark.black',
                    'worldTrip.light.white'
                )(props),
                color: mode(
                    'worldTrip.light.text',
                    'worldTrip.dark.text'
                )(props),
            },
        }),
    },
    config,
});
