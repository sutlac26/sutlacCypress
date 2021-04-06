/// <reference types="ramda" />
import { ObjectSchema, PlainObject, SchemaCollection } from './objects';
export declare const trimBySchema: import("ramda").CurriedFunction2<ObjectSchema, object, PlainObject>;
export declare const trim: import("ramda").CurriedFunction4<SchemaCollection, string, string, PlainObject, PlainObject>;
