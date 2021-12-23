import Axios from 'axios';  


const type = "GET_DATA";

const getDatas = () => async dispatch =>  {

    try{
        const res  = await Axios.get('http://localhost:4000/api/getAll');
        console.log(res)
        dispatch({
            type,
            payload: res.data
        })
    }
    catch(e){
        dispatch({
            type,
            payload: console.log(e)
        })
    }
}

// actions dataform
const addData = (val) => {
    return {
        type: 'ADD_DATA',
        payload: val
    }
}

const deleteData = (id) => {
    return {
        type: 'DELETE_DATA',
        payload: id
    }
}

const changeState = (id) => {
    return {
        type: 'CHANGE_STATE',
        payload: id
    }
}
export { getDatas , addData, deleteData, changeState};