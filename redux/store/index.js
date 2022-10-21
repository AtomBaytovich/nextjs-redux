import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { reducer } from "../reducer/index";

// создаём store
export const makeStore = (context) => createStore(reducer);
// создали враппер с переданным стором
export const wrapper = createWrapper(makeStore);
