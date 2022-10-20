import React, {useState,useEffect} from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editContact,postContact } from '../JS/actions/action';


const Add = () => {
    const dispatch = useDispatch(); 
    const [user,setUser] = useState({name:"",email:"",phone:""})
    const userReducer = useSelector(state=> state.contactReducer.user)
    const edit = useSelector((state)=>state.editReducer.edit)
    console.log("f",userReducer)

    useEffect(()=>{
        edit ? setUser(userReducer):setUser({name:"",email:"",phone:""});
    },[userReducer,edit])
    console.log("s ",userReducer)

    const handleChange =(e)=>{
      e.preventDefault()
      setUser({...user,[e.target.name]:e.target.value})
    }

    const handleContact = () =>{
        if(!edit){
            dispatch(postContact(user))
        }else{
            dispatch(editContact(userReducer._id,user))
        }
    }


  return (
    <Form className='fr'>
      <label>First Name</label>
      <input placeholder='First Name' value={user.name} name="name" onChange={handleChange}/>
      <label>Email</label>
      <input placeholder='Email' value={user.email} name="email" onChange={handleChange}  />
      <label>Phone</label>
      <input placeholder='Phone' value={user.phone} name="phone" onChange={handleChange} />
      <Link to="/contact">
    <Button type='submit' onClick={handleContact}> {edit? "Edit" : "Save"} </Button>
    </Link>
  </Form>
  )}

export default Add