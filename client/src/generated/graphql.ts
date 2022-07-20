import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
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

export type GetAvoByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetAvoByIdQuery = { __typename?: 'Query', GetAvoById?: { __typename?: 'Avocado', id: number, name: string, description: string, createdAt: any, updatedAt: any, image: string, price: number, sku: string } | null };

export type GetAvosQueryVariables = Exact<{
  filter?: InputMaybe<Filter>;
}>;


export type GetAvosQuery = { __typename?: 'Query', GetAvos: Array<{ __typename?: 'Avocado', name: string, image: string, price: number, description: string, id: number } | null> };

export type LoginQueryVariables = Exact<{
  password: Scalars['String'];
  username: Scalars['String'];
}>;


export type LoginQuery = { __typename?: 'Query', LogIn?: { __typename?: 'Token', username: string, accessToken: string } | null };


export const GetAvoByIdDocument = `
    query getAvoById($id: Int!) {
  GetAvoById(id: $id) {
    id
    name
    description
    createdAt
    updatedAt
    image
    price
    sku
  }
}
    `;
export const useGetAvoByIdQuery = <
      TData = GetAvoByIdQuery,
      TError = import('graphql-request').ClientError
    >(
      client: GraphQLClient,
      variables: GetAvoByIdQueryVariables,
      options?: UseQueryOptions<GetAvoByIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAvoByIdQuery, TError, TData>(
      ['getAvoById', variables],
      fetcher<GetAvoByIdQuery, GetAvoByIdQueryVariables>(client, GetAvoByIdDocument, variables, headers),
      options
    );
useGetAvoByIdQuery.document = GetAvoByIdDocument;


useGetAvoByIdQuery.getKey = (variables: GetAvoByIdQueryVariables) => ['getAvoById', variables];
;

useGetAvoByIdQuery.fetcher = (client: GraphQLClient, variables: GetAvoByIdQueryVariables, headers?: RequestInit['headers']) => fetcher<GetAvoByIdQuery, GetAvoByIdQueryVariables>(client, GetAvoByIdDocument, variables, headers);
export const GetAvosDocument = `
    query getAvos($filter: Filter) {
  GetAvos(filter: $filter) {
    name
    image
    price
    description
    id
  }
}
    `;
export const useGetAvosQuery = <
      TData = GetAvosQuery,
      TError = import('graphql-request').ClientError
    >(
      client: GraphQLClient,
      variables?: GetAvosQueryVariables,
      options?: UseQueryOptions<GetAvosQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAvosQuery, TError, TData>(
      variables === undefined ? ['getAvos'] : ['getAvos', variables],
      fetcher<GetAvosQuery, GetAvosQueryVariables>(client, GetAvosDocument, variables, headers),
      options
    );
useGetAvosQuery.document = GetAvosDocument;


useGetAvosQuery.getKey = (variables?: GetAvosQueryVariables) => variables === undefined ? ['getAvos'] : ['getAvos', variables];
;

useGetAvosQuery.fetcher = (client: GraphQLClient, variables?: GetAvosQueryVariables, headers?: RequestInit['headers']) => fetcher<GetAvosQuery, GetAvosQueryVariables>(client, GetAvosDocument, variables, headers);
export const LoginDocument = `
    query Login($password: String!, $username: String!) {
  LogIn(password: $password, username: $username) {
    username
    accessToken
  }
}
    `;
export const useLoginQuery = <
      TData = LoginQuery,
      TError = import('graphql-request').ClientError
    >(
      client: GraphQLClient,
      variables: LoginQueryVariables,
      options?: UseQueryOptions<LoginQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<LoginQuery, TError, TData>(
      ['Login', variables],
      fetcher<LoginQuery, LoginQueryVariables>(client, LoginDocument, variables, headers),
      options
    );
useLoginQuery.document = LoginDocument;


useLoginQuery.getKey = (variables: LoginQueryVariables) => ['Login', variables];
;

useLoginQuery.fetcher = (client: GraphQLClient, variables: LoginQueryVariables, headers?: RequestInit['headers']) => fetcher<LoginQuery, LoginQueryVariables>(client, LoginDocument, variables, headers);