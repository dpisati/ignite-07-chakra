import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Box } from '@chakra-ui/react';
import { Pagination } from 'swiper';
import TravelSlide from '../TravelSlide';

import cities from '../../../destinations.json';

export default function Gallery() {
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
