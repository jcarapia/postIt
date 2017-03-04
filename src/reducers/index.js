import { combineReducers } from 'redux';
import AddModalReducer from './add_modal_reducer';
import BoardReducer from './board_reducer'
import EditModalReducer from './edit_modal_reducer';

const rootReducer = combineReducers({
  addModal: AddModalReducer,
  board: BoardReducer,
  editModal: EditModalReducer
});

export default rootReducer;
