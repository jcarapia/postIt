import { combineReducers } from 'redux';
import AddModalReducer from './add_modal_reducer';
import BoardReducer from './board_reducer'

const rootReducer = combineReducers({
  // state: (state = {}) => state
  addModal: AddModalReducer,
  board: BoardReducer

});

export default rootReducer;
