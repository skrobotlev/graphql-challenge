import { useQuery } from "@apollo/client";
import { GET_DIALOGS, GET_LISTS, GET_SCENARIOS } from "../query/user";

export function useDialogs() {
    const { data, loading, error, } = useQuery(GET_DIALOGS, {
        pollInterval: 1000000,
        onCompleted: () => { },
        fetchPolicy: "cache-first",
        nextFetchPolicy: "standby"
    })
    const active: number = data?.dashboard?.dialogs?.active;
    const inactive: number = data?.dashboard?.dialogs?.inactive;
    const completed: number = data?.dashboard?.dialogs?.completed;
    const totalValue = active + inactive + completed;


    return {
        active, inactive, completed, totalValue
    }
}
export function useScenarios() {
    const { data, loading, error, } = useQuery(GET_SCENARIOS, {
        pollInterval: 10000000,
        onCompleted: () => { },
        fetchPolicy: "cache-first",
        nextFetchPolicy: "standby"
    });

    const active: number = data?.dashboard?.scenarios?.active;
    const inactive: number = data?.dashboard?.scenarios?.inactive;
    const completed: number = data?.dashboard?.scenarios?.completed;
    const totalValue = active + inactive + completed;

    return {
        active, inactive, completed, totalValue
    }
}
export const useLists = () => {
    const { data, loading, error, } = useQuery(GET_LISTS, {
        pollInterval: 10000000,
        onCompleted: () => null,
        fetchPolicy: "cache-first",
        nextFetchPolicy: "standby"
    });

    const active: number = data?.dashboard?.lists?.active;
    const inactive: number = data?.dashboard?.lists?.inactive;
    const completed: number = data?.dashboard?.lists?.completed;
    const totalValue = active + inactive + completed;

    return {
        active, inactive, completed, totalValue
    }
}
