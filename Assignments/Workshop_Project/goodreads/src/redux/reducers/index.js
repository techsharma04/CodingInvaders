import { combineReducers } from 'redux'
import { bookReducer, selectedBookReducer } from './book-reducers';

const rootReducer = combineReducers({
    allBooks: bookReducer,
    book: selectedBookReducer
});

export default rootReducer;