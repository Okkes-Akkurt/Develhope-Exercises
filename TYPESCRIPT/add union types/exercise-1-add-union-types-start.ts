/**
 * START: Follow the instructions below.
 */

// Change the `Currency` type into a union type that works for both variables.
type Currency = string | boolean;

let indianCurrency: Currency = 'Indian rupee';

let narniaCurrency: Currency = false;

// Change the type for the `data` function parameter so it can accept different types of data.
function outputCountryData(country: string, data: string | number) {
    console.log(`The data for ${country} is: ${data}`);
}

outputCountryData('Italy', 60_317_116);

outputCountryData('Nigeria', 'Naira');

outputCountryData('United States of America', 'English');

outputCountryData('India', 1_352_642_280);

// ----

export {};
