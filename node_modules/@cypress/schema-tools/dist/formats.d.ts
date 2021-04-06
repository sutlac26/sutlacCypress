export declare type CustomFormat = {
    name: string;
    description: string;
    detect: RegExp;
    defaultValue?: string | number;
    example?: string | number;
};
export declare type CustomFormats = {
    [key: string]: CustomFormat;
};
export declare type JsonSchemaFormats = {
    [key: string]: RegExp;
};
export declare const detectors: (formats: CustomFormats) => JsonSchemaFormats;
export declare const regexAsPatternKey: (r: RegExp) => string;
export declare type FormatDefaults = {
    [key: string]: string | number;
};
export declare const getDefaults: (formats: CustomFormats) => FormatDefaults;
