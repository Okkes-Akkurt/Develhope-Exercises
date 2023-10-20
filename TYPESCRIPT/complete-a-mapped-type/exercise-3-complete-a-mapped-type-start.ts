/**
 * START: Follow the instructions below.
 */

type CountryData = {
    name: string;
    languages: string[];
    population: number;
};

// Complete the syntax for this mapped type.
type Descriptions = {
    [Property in keyof CountryData]: string;
};

const countryDataDescriptions: Descriptions = {
    name: 'The name of the country.',
    languages: 'The languages spoken in the country.',
    population: 'The population of the country.',
};

// ----

export {};
