import { useRouter } from 'next/router';
import React from 'react';
import Header from '../../components/Header';

import destinations from '../../../destinations.json';

interface City {
    title: string;
    country: string;
    flagImgPath: string;
}

interface Destination {
    title: string;
    description: string;
    numberOfContries: string;
    languages: string;
    numberOfCities: string;
    totalCities: string;
    tooltip: string;
    cities: City[];
}

export default function Destination() {
    const router = useRouter();

    function capitalizeFirstLetter(word: string): string {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    const selectedCity: Destination[] = destinations.filter(
        (destination) =>
            destination.title ===
            capitalizeFirstLetter(router.query.city as string)
    );

    const city = selectedCity[0];

    return (
        <>
            <Header />
            <div>{city.title}</div>
        </>
    );
}
