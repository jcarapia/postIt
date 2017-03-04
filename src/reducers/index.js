import { combineReducers } from 'redux';
import AddModalReducer from './add_modal_reducer';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  addModal: AddModalReducer

});

export default rootReducer;
