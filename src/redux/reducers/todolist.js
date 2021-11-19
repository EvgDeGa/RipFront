import {
  ADD_ITEM,
  DEL_ITEM,
  UPDATE_ITEM,
  GET_ITEM,
  GET_ITEMS,
} from '../constants';

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      //   return { ...state, items: state.items.push(action.text) };
      return state;

    default:
      return state;
  }
}

const initialState = {
  items: [
    {
      id: 0,
      text: 'ss',
      checked: false,
    },
  ],
};
