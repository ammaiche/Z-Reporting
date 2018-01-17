import { Moment } from 'moment/moment';

export enum SelectionType {
    ALL_DAY = 0,
    HALF_DAY = 1,
    NONE = 2
}

export type Day = {
    date: Moment;
    selectionType: SelectionType;
    weekend?: boolean;
    holiday?: boolean;
    hover?: boolean;
};
