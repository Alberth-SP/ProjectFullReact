import data from '../../dataset/data.json';

import Axios from 'axios';


function reduceItem(state = [], {type, payload}) { 
    switch(type){
        case 'GET_DATA':
            return payload
        case 'ADD_DATA':  
            //state = {data: [...state.data, {id: payload.code, name:payload.name, dangerous: payload.danger ? 1:0}] }
            return [...state, { code: payload.pCode, name: payload.pName, dangerous: payload.pDangerous}]
        case 'DELETE_DATA':
            /*
            const newState = state.data.filter( (it) => {
                if(it.id !== payload){
                    return it
                }
            })
            state = { data: newState}
            */
            return state
        case 'CHANGE_STATE':
            /*
            const newSate = state.data.filter( (it) => {
                if(it.id !== payload.id){
                    return it
                }
                else{
                    it.dangerous = (1+it.dangerous)%2;
                    return it
                }
            })
            state = { data: newSate}*/
            return state
        default:
            return state
    }
}

export default reduceItem;