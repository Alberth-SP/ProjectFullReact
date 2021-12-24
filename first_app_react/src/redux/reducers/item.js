import data from '../../dataset/data.json';


function reduceItem(state = [], {type, payload}) { 
    switch(type){
        case 'GET_DATA':
            return payload
        case 'ADD_DATA':
            return [...state, { code: payload.pCode, name: payload.pName, dangerous: payload.pDangerous}]
        case 'DELETE_DATA':
            const newState = state.filter( it => it.code !== payload);            
            return newState
        case 'CHANGE_STATE':
            const newState2 = state.map( (it) => {
                if(it.code === payload){
                    it.dangerous = !it.dangerous
                }
                return it
            });
            return newState2
        default:
            return state
    }
}

export default reduceItem;