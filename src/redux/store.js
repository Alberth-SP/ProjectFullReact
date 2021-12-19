import  {createStore, combineReducers} from 'redux';
import reduceItem from './reducers/item';

const reducers = combineReducers ({    
    reduceItem
});

const store = createStore(reducers);

export default store;