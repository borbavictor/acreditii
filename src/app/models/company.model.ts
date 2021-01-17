export interface ICompany {
    id?: string,
    name?: string,
    banner?: string,
    mentor?: string,
    position?: string,
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
}

export class Company implements ICompany {
    id?: string;
    name?: string;
    banner?: string;
    mentor?: string;
    position?: string;
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
}