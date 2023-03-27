export interface Flight
    {
        id?: number;
        origin: string;
     destination: string;
     flightNumber: number;
     depart: Date | string;
     arrive: Date | string;
     nonstop: boolean };
