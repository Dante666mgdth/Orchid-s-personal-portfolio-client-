import React, { useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux";
import { Link } from 'react-router-dom'
import {getContacts} from "../JS/actions/action"
import Contact from './Contact';

const ContactList = () => {
  const dispatch = useDispatch();
  const loadContacts = useSelector((state)=> state.contactReducer.loadContacts);
  const contacts = useSelector((state)=> state.contactReducer.contacts);
  console.log(contacts);

  useEffect(()=>{
      dispatch(getContacts())
  //eslint-disable-next-line
  },[])
  console.log(contacts)

return (
  <div>

      {loadContacts ? (
          <h1>LOADING.......!!!!</h1>
          ): contacts.length === 0 ? (<h2>There is no data....</h2>):(
          contacts.map((el)=> <Contact key={el._id}  contact={el}/>)
      )}

      
      <Link to="/">
        <button>go to home page</button>
      </Link>
  </div>
)
}

export default ContactList