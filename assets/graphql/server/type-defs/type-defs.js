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
  type Query {
    login(email: String!, password: String!): User
    test: User
    getUserData: User
    logOut: String
  }
  type Mutation {
    signUp(email: String, password: String, confirmPassword: String): User
    changePassword(currentPassword: String, newPassword: String, confirmNewPassword: String): String
  }
`