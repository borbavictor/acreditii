export interface ICompany {
    id?: string,
    company?: string,
    title?: string,
    mentor?: string,
    position?: string,
    link?: string,
    startDate?: Date,
    endDate?: Date,
    status?: string,
}

export class Company implements ICompany {
    id?: string;
    company?: string;
    title?: string;
    mentor?: string;
    position?: string;
    link?: string;
    startDate?: Date;
    endDate?: Date;
    status?: string;
}