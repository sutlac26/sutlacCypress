import { JsonSchema, ObjectSchema, SchemaCollection, SchemaVersion, Semver, VersionedSchema } from './objects';
export declare const semverToString: (s: Semver) => SchemaVersion;
export declare const stringToSemver: (s: SchemaVersion) => Semver;
export declare const normalizeName: (s: string) => string;
export declare const normalizeRequiredProperties: (schema: JsonSchema) => JsonSchema;
export declare const versionSchemas: (...schemas: ObjectSchema[]) => VersionedSchema;
export declare const setPackageName: (schemas: SchemaCollection, packageName: string) => SchemaCollection;
export declare const combineSchemas: (...versioned: VersionedSchema[]) => SchemaCollection;
export declare const oneOfRegex: (values_0: string, ...values_1: string[]) => RegExp;
