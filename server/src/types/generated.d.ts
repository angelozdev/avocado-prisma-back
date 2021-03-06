/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./context"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * Date custom scalar type
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * Date custom scalar type
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CreateAvocadoInput: { // input type
    description: string; // String!
    hardiness?: string | null; // String
    image: string; // String!
    name: string; // String!
    price: number; // Int!
    shape?: string | null; // String
    sku: string; // String!
    taste?: string | null; // String
  }
  CreateUser: { // input type
    email: string; // String!
    password: string; // String!
    username: string; // String!
  }
  Filter: { // input type
    limit: number | null; // Int
    offset?: number | null; // Int
    orderBy: NexusGenEnums['OrderBy'] | null; // OrderBy
    orderDirection: NexusGenEnums['OrderDirection'] | null; // OrderDirection
  }
}

export interface NexusGenEnums {
  OrderBy: "createdAt" | "description" | "id" | "image" | "name" | "price" | "sku" | "updatedAt"
  OrderDirection: "asc" | "desc"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Attributes: { // root type
    hardiness?: string | null; // String
    shape?: string | null; // String
    taste?: string | null; // String
  }
  Avocado: { // root type
    attributes?: NexusGenRootTypes['Attributes'] | null; // Attributes
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    id: number; // Int!
    image: string; // String!
    name: string; // String!
    price: number; // Float!
    sku: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Mutation: {};
  Query: {};
  Token: { // root type
    accessToken: string; // String!
    username: string; // String!
  }
  User: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    id: number; // Int!
    password: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    username: string; // String!
  }
}

export interface NexusGenInterfaces {
  BaseModel: NexusGenRootTypes['Avocado'] | NexusGenRootTypes['User'];
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenInterfaces & NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Attributes: { // field return type
    hardiness: string | null; // String
    shape: string | null; // String
    taste: string | null; // String
  }
  Avocado: { // field return type
    attributes: NexusGenRootTypes['Attributes'] | null; // Attributes
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    id: number; // Int!
    image: string; // String!
    name: string; // String!
    price: number; // Float!
    sku: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Mutation: { // field return type
    CreateAvocado: NexusGenRootTypes['Avocado'] | null; // Avocado
    SignUp: NexusGenRootTypes['User'] | null; // User
  }
  Query: { // field return type
    GetAvoById: NexusGenRootTypes['Avocado'] | null; // Avocado
    GetAvos: Array<NexusGenRootTypes['Avocado'] | null>; // [Avocado]!
    LogIn: NexusGenRootTypes['Token'] | null; // Token
  }
  Token: { // field return type
    accessToken: string; // String!
    username: string; // String!
  }
  User: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    id: number; // Int!
    password: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    username: string; // String!
  }
  BaseModel: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
}

export interface NexusGenFieldTypeNames {
  Attributes: { // field return type name
    hardiness: 'String'
    shape: 'String'
    taste: 'String'
  }
  Avocado: { // field return type name
    attributes: 'Attributes'
    createdAt: 'DateTime'
    description: 'String'
    id: 'Int'
    image: 'String'
    name: 'String'
    price: 'Float'
    sku: 'String'
    updatedAt: 'DateTime'
  }
  Mutation: { // field return type name
    CreateAvocado: 'Avocado'
    SignUp: 'User'
  }
  Query: { // field return type name
    GetAvoById: 'Avocado'
    GetAvos: 'Avocado'
    LogIn: 'Token'
  }
  Token: { // field return type name
    accessToken: 'String'
    username: 'String'
  }
  User: { // field return type name
    createdAt: 'DateTime'
    email: 'String'
    id: 'Int'
    password: 'String'
    updatedAt: 'DateTime'
    username: 'String'
  }
  BaseModel: { // field return type name
    createdAt: 'DateTime'
    id: 'Int'
    updatedAt: 'DateTime'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    CreateAvocado: { // args
      input: NexusGenInputs['CreateAvocadoInput']; // CreateAvocadoInput!
    }
    SignUp: { // args
      input: NexusGenInputs['CreateUser']; // CreateUser!
    }
  }
  Query: {
    GetAvoById: { // args
      id: number; // Int!
    }
    GetAvos: { // args
      filter?: NexusGenInputs['Filter'] | null; // Filter
    }
    LogIn: { // args
      password: string; // String!
      username: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
  BaseModel: "Avocado" | "User"
}

export interface NexusGenTypeInterfaces {
  Avocado: "BaseModel"
  User: "BaseModel"
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = keyof NexusGenInterfaces;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = "BaseModel";

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}