import { gql } from "@apollo/client";

// export const LOGIN = gql`
//   mutation login($input: LoginInput) {
//     login(input: $input) {
//       username
//       token
//     }
//   }
// `;
export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      username
      token
    }
  }
`;
export const CREATE_USER = gql`
  mutation createUser($input: UserInput) {
    createUser(input: $input) {
      id
      username
      age
    }
  }
`;
