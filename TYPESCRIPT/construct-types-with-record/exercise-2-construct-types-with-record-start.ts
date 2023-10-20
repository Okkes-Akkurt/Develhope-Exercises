/**
 * START: Follow the instructions below.
 */

interface Country {
    name: string;
    code: string;
    languages: string[];
    currency?: string;
    population: number;
}

// Change the `PartialCountry` type to use the `Partial` utility type.
type PartialCountry = Partial<Country>;

const countryA: PartialCountry = {
    code: 'CN',
    population: 1_412_600_000,
};

// Change the `CompleteCountry` type to use a custom type that makes only specific properties required.
type CompleteCountry = {
    name: string;
    code: string;
    languages: string[];
    currency: string; // Make 'currency' required
    population: number;
};

const countryB: CompleteCountry = {
    name: 'Greece',
    code: 'GR',
    languages: ['Greek'],
    currency: 'Euro', // Provided a value for the 'currency' property
    population: 10_678_632,
};

// Change the `ReadonlyCountry` type to use the `Readonly` utility type.
type ReadonlyCountry = Readonly<Country>;

const countryC: ReadonlyCountry = {
    name: 'Italy',
    code: 'IT',
    languages: ['Italian'],
    currency: 'Euro',
    population: 60_317_116,
};

// Remove the code that tries to modify a readonly property.
// countryC.population = 60_317_117; // Remove this line

console.log(countryC);

// Change the `CountryWithPopulation` type to use the `Pick` utility type.
type CountryWithPopulation = Pick<Country, 'name' | 'code' | 'population'>;

const countryD: CountryWithPopulation = {
    name: 'New Zealand',
    code: 'NZ',
    population: 5_135_300,
};

// Change the `CountryWithoutPopulation` type to use the `Omit` utility type.
type CountryWithoutPopulation = Omit<Country, 'population'>;

const countryE: CountryWithoutPopulation = {
    name: 'Thailand',
    code: 'TH',
    languages: ['Thai', 'Isan', 'Kam Mueang', 'Pak Tai', 'Malay'],
    currency: 'Baht',
};

// ----

export {};
