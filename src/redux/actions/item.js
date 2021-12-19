const type = "GET_DATA";

const getDatas = () => {
    return {
        type,
        payload:null
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

const changeState = (val) => {
    return {
        type: 'CHANGE_STATE',
        payload: val
    }
}
export { getDatas , addData, deleteData, changeState};