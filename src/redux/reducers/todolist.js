import {
  ADD_ITEM,
  DEL_ITEM,
  UPDATE_ITEM,
  GET_ITEM,
  GET_ITEMS,
} from "../constants";

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      console.log("asd", action.items);
      return { ...state, items: action.items };
    // return state;

    default:
      return state;
  }
}

const initialState = {
  items: [
    {
      id: 0,
      text: "s",
      checked: false,
    },
  ],
};
