import axios from "axios";
import{GET_CONTACT_LOAD, GET_CONTACT_SUCCESS, GET_CONTACT_FAIL, GET_ONE_CONTACT, EDIT_CONTACT} from "../constant/actionsTypes.js";
import{REGISTER_USER , LOGIN_USER, LOGOUT_USER, GET_AUTH_USER} from "../constant/authTypes.js";

export const getContacts = () =>async(dispatch)=>{
    dispatch({type:GET_CONTACT_LOAD})
    try {
        let result = await axios.get('/api/contact/')
        console.log(result)
        dispatch({type:GET_CONTACT_SUCCESS,payload:result.data.result})
        
    } catch (error) {
        dispatch({type:GET_CONTACT_FAIL,payload:error})
        console.log(error)
    }
}


export const deleteContact = (id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/contact/${id}`)
        dispatch(getContacts());
    } catch (error) {
        console.log(error)
    }
}

export const getContact = (id)=>(dispatch) =>{
    axios
    .get(`/api/contact/${id}`)
    .then((res)=>dispatch({type:GET_ONE_CONTACT,payload: res.data.result},console.log(res.data)))
    .catch((err)=>console.log(err))
    
}

export const editContact =(id,user)=>(dispatch)=>{
    axios
    .put(`/api/contact/${id}`,user)
    .then((res)=>dispatch({type:EDIT_CONTACT,payload:res.data.message},console.log(res)))
    .catch((err)=>console.log(err))
}

export const postContact = (user)=>async(dispatch)=>{
    try {
        await axios.post (`/api/contact/name`,user)
        dispatch(getContacts());
    } catch (error) {
        console.log(error)
    }
}

//register user
export const registerUser = (formdata) =>async(dispatch)=>{
    try {
        const res = await axios.post('/api/user/register',formdata)
        console.log(res)
        dispatch({
            type:REGISTER_USER,
            payload:res.data // {user,msg,token}
        })
    } catch (error) {
        console.dir(error) 
        const {errors} = error.response.data   
        if(Array.isArray(errors)){
            errors.forEach(err=>alert(err.msg))
        }        
    }
}

//register user

export const loginUser = (formdata) =>async(dispatch)=>{
    try {
        const res = await axios.post('/api/user/login',formdata)
        console.log(res)
        dispatch({
            type:LOGIN_USER,
            payload:res.data // {user,msg,token}
        })
    } catch (error) {
        console.dir(error) 
        const {errors} = error.response.data   
        if(Array.isArray(errors)){
            errors.forEach(err=>alert(err.msg))
        }
    }
}

export const getAuthUser = () =>async (dispatch)=>{
    try {
        //headers
        const config = {
            headers:{
                "x-auth-token":localStorage.getItem('token')
            }
        }
        const res = await axios.get("/api/user/user",config)
        dispatch({
            type:GET_AUTH_USER,
            payload:res.data // {user:req.user}
        })
    } catch (error) {
        console.log(error)
    }
}


export const logoutUser = ()=> {
   return {type:LOGOUT_USER}
}