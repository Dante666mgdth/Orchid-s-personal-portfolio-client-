import {GET_CONTACT_LOAD,GET_CONTACT_SUCCESS,GET_CONTACT_FAIL, 
        GET_ONE_CONTACT, EDIT_CONTACT} from "../constant/actionsTypes.js"

const initialState = {
    contacts:[],
    loadContacts:false,
    user:{},
    editContact:"",
    errors:[]
}

export const contactReducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case GET_CONTACT_LOAD:
            return {...state,loadContacts:true}
        case GET_CONTACT_SUCCESS:
            return {...state,contacts:payload,loadContacts:false}    
        case GET_CONTACT_FAIL:
            return {...state,loadContacts:false,errors:payload}
        case GET_ONE_CONTACT:  
            return {...state,user:payload}
        case EDIT_CONTACT:    
            return {...state,editContact:payload}
        
        default:
            return state
    }

}