export const counter = (state: any, action: any) => {
    if (action.type === "INCREMENT") {
        return {
            ...state,
            value: state.value + 1
        };
    }
    return state;
};
