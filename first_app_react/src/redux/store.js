import  {createStore, combineReducers, applyMiddleware} from 'redux';
import reduceItem from './reducers/item';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
const middleware = [thunk]

const reducers = combineReducers ({    
    reduceItem
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

export default store;