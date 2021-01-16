export interface ICompany {
    id?: string,
    name?: string,
    date?: Date,
    place?: {
        country?: string,
        state?: string,
        city?: string,
        coordinate?: Coordinates,
    },
    link?: string,
    picture?: string,
    registerPeriod?: {
        begin?: Date,
        end?: Date,
    },
    status?: string,
    banner?: string,
}

export class Company implements ICompany {
    id?: string;
    name?: string;
    date?: Date;
    place?: {
        country?: string;
        state?: string;
        city?: string;
        coordinate?: Coordinates;
    };
    link?: string;
    picture?: string;
    registerPeriod?: {
        begin?: Date;
        end?: Date;
    };
    status?: string;
    banner?: string;
}