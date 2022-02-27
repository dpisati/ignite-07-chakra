import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Box } from '@chakra-ui/react';
import { Pagination } from 'swiper';
import TravelSlide from '../TravelSlide';

export default function Gallery() {
    const cities = [
        {
            title: 'Europe',
            subtitle: 'Enjoy the old continent',
            backgroundPath: '/images/cities/europe.png',
        },
        {
            title: 'Amsterdam',
            subtitle: 'Enjoy the vibe.',
            backgroundPath: '/images/cities/amsterdam.png',
        },
        {
            title: 'London',
            subtitle: 'Enjoy the best of England.',
            backgroundPath: '/images/cities/london.png',
        },
        {
            title: 'Paris',
            subtitle: 'Enjoy the most romantic city.',
            backgroundPath: '/images/cities/paris.png',
        },
        {
            title: 'Prage',
            subtitle: 'Enjoy the not obvious.',
            backgroundPath: '/images/cities/prage.png',
        },
        {
            title: 'Rome',
            subtitle: 'Enjoy the best cusine.',
            backgroundPath: '/images/cities/rome.png',
        },
    ];

    return (
        <Box w="100%" h="100%">
            <Swiper
                style={{
                    height: '100%',
                    width: '100%',
                }}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
            >
                {cities.map((city, index) => (
                    <SwiperSlide key={index}>
                        <TravelSlide
                            title={city.title}
                            subtitle={city.subtitle}
                            backgroundPath={city.backgroundPath}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}
