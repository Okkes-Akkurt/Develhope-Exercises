/**
 * START: Follow the instructions below.
 */

// Complete the `Currency` enum with the relevant string values.
enum Currency {
    Euro = 'Euro',
    Dollar = 'Dollar',
}

// Update the type for the `currency` property in this interface to use the `Currency` enum.
interface Country {
    name: string;
    currency: Currency; // Use the Currency enum
}

// Update the values for the `currency` properties in the `countries` array to use the Currency enum.
const countries: Country[] = [
    {
        name: 'France',
        currency: Currency.Euro,
    },
    {
        name: 'United States of America',
        currency: Currency.Dollar,
    },
    {
        name: 'Italy',
        currency: Currency.Euro,
    },
    {
        name: 'New Zealand',
        currency: Currency.Dollar,
    },
];

// Create a string enum named `LanguageStatus`. Use it to replace the string values for the `status` properties in the objects below.
enum LanguageStatus {
    Primary = 'primary',
    Secondary = 'secondary',
}

const countryLanguages = [
    {language: 'Spanish', status: LanguageStatus.Primary},
    {language: 'English', status: LanguageStatus.Secondary},
];

// ----

export {};
