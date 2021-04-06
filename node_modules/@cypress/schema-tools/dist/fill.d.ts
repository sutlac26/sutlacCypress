/// <reference types="ramda" />
import { ObjectSchema, PlainObject, SchemaCollection } from './objects';
export declare const fillBySchema: import("ramda").CurriedFunction2<ObjectSchema, PlainObject, PlainObject>;
export declare const fill: import("ramda").CurriedFunction4<SchemaCollection, string, string, object, PlainObject>;
