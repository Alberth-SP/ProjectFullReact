import Axios from 'axios';  


const type = "GET_DATA";

const getDatas = () => async dispatch =>  {

    try{
        const res  = await Axios.get('http://localhost:4000/api/getAll');
       
        dispatch({
            type,
            payload: res.data
        })
    }
    catch(e){
        dispatch({
            type,
            payload: console.log("AKIII",e)
        })
    }
}

// actions dataform
const addData = (val) => async dispatch => {
    
    try{
        const res = await Axios.post('http://localhost:4000/api/insert/',{
            pCode: val.code,
            pName: val.name,
            pDangerous: val.danger
        });
        dispatch({
            type:'ADD_DATA',
            payload: {
                pCode: val.code,
                pName: val.name,
                pDangerous: val.danger
            }
        })
    }
    catch(err){
        dispatch({
            type:'ADD_DATA',
            payload: console.log(err)
        })
    }
}

const deleteData = (id) => async dispatch =>  {
    try{
        const res = Axios.post('http://localhost:4000/api/delete/',
        {
            pCode: id

        })

        dispatch({
            type: 'DELETE_DATA',
            payload: res.data
        })
    }
    catch(err){
        dispatch({
            type: 'DELETE_DATA',
            payload: console.log(err)
            
        })
    }
}

const changeState = (id) => async dispatch => {
    try{

        const url = 'http://localhost:4000/api/getItem/' + id
        const res = await Axios.get(url, { });
        

        const res2 = await Axios.post('http://localhost:4000/api/update/', {
            pCode: res.data[0].code,
            pName: res.data[0].name,
            pDangerous: !res.data[0].dangerous
        });
        console.log(res.data)
        dispatch ({
            type:'CHANGE_STATE',
            payload: res.data
        })
    }
    catch(err){
        dispatch ({
            type:'CHANGE_STATE',
            payload: console.log(err)
        })

    }
}
export { getDatas , addData, deleteData, changeState};