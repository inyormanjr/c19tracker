export interface CovidData {
    country: string;
    cases: number;
    deaths: number;
    todayDeaths: number;
    recovered: number;
    active: number;
    critical: number;
    casesPerOneMillion: number;
    deathsPerOneMillion: number;
    totalTests: number;
    testsPerOneMillion: number;
}
