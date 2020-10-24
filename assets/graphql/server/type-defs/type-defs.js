import { gql } from '@apollo/client'

export const typeDefs = gql`
  scalar Date

  type User {
    _id: ID
    roleId: Int
    email: String
    password: String
    firstName: String
    lastName: String
    address: String
    registrationDate: Date
    passwordLastUpdated: Date
    forgotPasswordToken: String
  }
  input SignUpInput {
    email: String!
    password: String!
    confirmPassword: String!
  }
  input TestInput {
    ey: String
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
    login(email: String, password: String): User
    user(id: String!): User
    users: [User]
    viewer: User
    test: User
    getUserData: User
    setUserData: String
    logOut: String
  }
  type Mutation {
    signUp(email: String, password: String, confirmPassword: String): User
    signIn(input: SignInInput!): SignInPayload!
    signOut: Boolean!
  }
`