import { DefaultValue, JsonPropertyTypes, ObjectSchema } from './objects';
declare type NewSchemaOptions = {
    schema: ObjectSchema;
    title?: string;
    description: string;
};
declare type AddPropertyOptions = {
    property: string;
    propertyType: JsonPropertyTypes;
    propertyFormat: string | null;
    exampleValue: any;
    isRequired?: boolean;
    propertyDescription?: string;
    defaultValue?: DefaultValue;
    see?: string | ObjectSchema;
};
declare const addProperty: (from: NewSchemaOptions, ...newProperties: AddPropertyOptions[]) => ObjectSchema;
declare const extend: (from: ObjectSchema, schemaObj: any) => ObjectSchema;
export { extend, addProperty };
