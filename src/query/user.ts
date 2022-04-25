import { gql } from "@apollo/client";

export const GET_SCENARIOS = gql`
  query getDash {
    dashboard {
      scenarios {
        active
        inactive
        completed
      }
    }
  }
`;
export const GET_LISTS = gql`
  query getLists {
    dashboard {
      lists {
        active
        inactive
        completed
      }
    }
  }
`;
export const GET_DIALOGS = gql`
  query getDialogs {
    dashboard {
      dialogs {
        active
        inactive
        completed
      }
    }
  }
`;
