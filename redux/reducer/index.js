import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    user: {
        count: null,
        firstName: "",
        lastName: "",
      },
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case HYDRATE:
        if (action.payload.user === "init") delete action.payload.user;
        return { ...state, ...action.payload };
        case "SET_USER":
            return {
              ...state,
              user: {
                ...state.user,
                ...action.payload,
              },
            };
      default:
        return state;
    }
  };
  
export default initialState