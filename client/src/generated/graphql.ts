import { useQuery, UseQueryOptions } from 'react-query';
import { graphqlFetcher } from '../lib/axios';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Attributes = {
  __typename?: 'Attributes';
  /** The hardiness of the fruit. */
  hardiness?: Maybe<Scalars['String']>;
  /** The shape of the fruit. */
  shape?: Maybe<Scalars['String']>;
  /** The taste of the fruit. */
  taste?: Maybe<Scalars['String']>;
};

/** Avocado */
export type Avocado = BaseModel & {
  __typename?: 'Avocado';
  attributes?: Maybe<Attributes>;
  createdAt: Scalars['DateTime'];
  /** The description of the fruit. */
  description: Scalars['String'];
  /** The ID of the model. */
  id: Scalars['Int'];
  /** The image of the fruit. */
  image: Scalars['String'];
  /** The name of the fruit. */
  name: Scalars['String'];
  /** The price of the fruit. */
  price: Scalars['Float'];
  /** The SKU of the fruit. */
  sku: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type BaseModel = {
  createdAt: Scalars['DateTime'];
  /** The ID of the model. */
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type CreateAvocadoInput = {
  description: Scalars['String'];
  hardiness?: InputMaybe<Scalars['String']>;
  image: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  shape?: InputMaybe<Scalars['String']>;
  sku: Scalars['String'];
  taste?: InputMaybe<Scalars['String']>;
};

export type CreateUser = {
  /** The email of the user. */
  email: Scalars['String'];
  /** The password of the user. */
  password: Scalars['String'];
  /** The username of the user. */
  username: Scalars['String'];
};

export type Filter = {
  /** The limit of the pagination. */
  limit?: InputMaybe<Scalars['Int']>;
  /** The offset of the pagination. */
  offset?: InputMaybe<Scalars['Int']>;
  /** Order by */
  orderBy?: InputMaybe<OrderBy>;
  /** Order direction */
  orderDirection?: InputMaybe<OrderDirection>;
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateAvocado?: Maybe<Avocado>;
  SignUp?: Maybe<User>;
};


export type MutationCreateAvocadoArgs = {
  input: CreateAvocadoInput;
};


export type MutationSignUpArgs = {
  input: CreateUser;
};

/** Order by */
export enum OrderBy {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Image = 'image',
  Name = 'name',
  Price = 'price',
  Sku = 'sku',
  UpdatedAt = 'updatedAt'
}

/** Order direction */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  /** Get an avocado by ID. */
  GetAvoById?: Maybe<Avocado>;
  GetAvos: Array<Maybe<Avocado>>;
  LogIn?: Maybe<Token>;
};


export type QueryGetAvoByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetAvosArgs = {
  filter?: InputMaybe<Filter>;
};


export type QueryLogInArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Token = {
  __typename?: 'Token';
  /** The token of the user. */
  accessToken: Scalars['String'];
  /** The username of the user. */
  username: Scalars['String'];
};

export type User = BaseModel & {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  /** The email of the user. */
  email: Scalars['String'];
  /** The ID of the model. */
  id: Scalars['Int'];
  /** The password of the user. */
  password: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  /** The name of the user. */
  username: Scalars['String'];
};

export type GetAvosQueryVariables = Exact<{
  filter?: InputMaybe<Filter>;
}>;


export type GetAvosQuery = { __typename?: 'Query', GetAvos: Array<{ __typename?: 'Avocado', name: string, image: string, price: number, sku: string, description: string, id: number } | null> };


export const GetAvosDocument = `
    query GetAvos($filter: Filter) {
  GetAvos(filter: $filter) {
    name
    image
    price
    sku
    description
    id
  }
}
    `;
export const useGetAvosQuery = <
      TData = GetAvosQuery,
      TError = unknown
    >(
      variables?: GetAvosQueryVariables,
      options?: UseQueryOptions<GetAvosQuery, TError, TData>
    ) =>
    useQuery<GetAvosQuery, TError, TData>(
      variables === undefined ? ['GetAvos'] : ['GetAvos', variables],
      graphqlFetcher<GetAvosQuery, GetAvosQueryVariables>(GetAvosDocument, variables),
      options
    );