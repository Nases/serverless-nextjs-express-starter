import { gql } from '@apollo/client'

export const typeDefs = gql`
  # type User {
  #   id: ID!
  #   email: String!
  #   createdAt: Int!
  # }
  type User {
    _id: ID
    roleId: Int
    email: String
    password: String
    firstName: String
    lastName: String
    address: String
    lastPasswordUpdate: String
    registrationDate: String
    passwordLastUpdated: String
    forgotPasswordToken: String
  }
  input SignUpInput {
    email: String!
    password: String!
  }
  input SignInInput {
    email: String!
    password: String!
  }
  type SignUpPayload {
    user: User!
  }
  type SignInPayload {
    user: User!
  }
  type Query {
    user(id: ID!): User!
    users: [User]!
    viewer: User
    test: String
  }
  type Mutation {
    signUp(input: SignUpInput!): SignUpPayload!
    signIn(input: SignInInput!): SignInPayload!
    signOut: Boolean!
  }
`