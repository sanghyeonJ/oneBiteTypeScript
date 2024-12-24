// 타입 별칭
type User = {
    id: number;
    name: string;
}

let user: User = {
    id: 1,
    name: 'sh'
}
let user2: User = {
    id: 2,
    name: 'sd'
}

// 인덱스 시그니처
type CountryCodes = {
    [key: string] : string;
}
let countryCodes: CountryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk'
}
type countryNumberCodes = {
    [key: string]: number;
}
let countryNumberCodes: countryNumberCodes = {
    korea: 'ko',
    UnitedState: 840,
    UnitedKingdom: 826
}