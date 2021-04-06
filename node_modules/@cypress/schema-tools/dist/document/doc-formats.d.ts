import { CustomFormats } from '../formats';
export declare const documentCustomFormats: (formats: CustomFormats) => ({
    h2: string;
    p?: undefined;
    table?: undefined;
} | {
    p: string;
    h2?: undefined;
    table?: undefined;
} | {
    table: {
        headers: string[];
        rows: {
            name: string;
            'regular expression': any;
            dynamic: string;
            default: any;
            example: any;
        }[];
    };
    h2?: undefined;
    p?: undefined;
})[];
