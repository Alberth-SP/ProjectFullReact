
import data from '../../dataset/data.json';

const defaultState = {
    data
};

function reduceItem(state = defaultState, {type, payload}) { 
  
    switch(type){
        case 'ADD_DATA':
            
            console.log("CHANGE ...");
            console.log(payload);
            state = {data: [...state.data, {id: payload.code, name:payload.name, dangerous: payload.danger ? 1:0}] }
            return state
        case 'DELETE_DATA':
            const newState = state.data.filter( (it) => {
                if(it.id !== payload){
                    return it
                }
            })
            state = { data: newState}
            return state
        case 'CHANGE_STATE':
            const newSate = state.data.filter( (it) => {
                if(it.id !== payload.id){
                    return it
                }
                else{
                    it.dangerous = (1+it.dangerous)%2;
                    return it
                }
            })
            state = { data: newSate}
            return state
        default:
            return state
    }
}

export default reduceItem;