import { combineReducers } from 'redux';
import { todoReducer } from './todolist';

export const rootReducer = combineReducers({
  todo: todoReducer,
});
