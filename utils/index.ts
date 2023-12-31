import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
    const {manufacturer, year, model, limit, fuel} = filters;

    const headers = { 
        'X-RapidAPI-Key': '9a8a5284efmsh935c85347862b6ap1b848fjsn4ad0368a9524',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
        headers: headers,
    });

    const result = await response.json();

    return result
}


export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;

    const mileageFactor = 0.1;

    const ageFactor = 0.05;

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
}

export const generateCarImageUrl = (car: CarProps, angle? : string) => {
    const url = new URL('https://cdn.imagin.studio/getimage');

    const { make, year, model } = car;

    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', "fullScreen");
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);
}
// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
//   params: {model: 'corolla'},
// };

// export async function fetchCars() {
//     const headers = {
//         key: 'key here',
//         host: 'host here'
//     }
//     const response = await fetch('url here/cars?model=model here', {
//         headers: headers,
//     });

//     const result = await response.json();

//     return result
// }