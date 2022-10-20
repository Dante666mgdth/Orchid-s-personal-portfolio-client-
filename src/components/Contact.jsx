import React from 'react';
import {useDispatch} from "react-redux"
import {Link} from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react';
import {deleteContact,getContact} from '../JS/actions/action';
import { toggleTrue } from '../JS/actions/edit';


const Contact = ({contact}) => {
    console.log(contact)
    const dispatch = useDispatch();
  return ( 
    <Card.Group>
    <Card>
      <Card.Content>
        <Image 
          floated='right'
          size='mini'
          src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
        />
        <Card.Header>{contact.name}</Card.Header>
        <Card.Meta>{contact.email}</Card.Meta>
        <Card.Description>
          Phone :  <strong>{contact.phone}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Link to={`/edit/${contact._id}`}>
          <Button basic color='green' onClick={()=>{dispatch(getContact(contact._id));dispatch(toggleTrue())}}>
            Edit
          </Button>
          </Link>
          <Button basic color='red' onClick={()=>dispatch(deleteContact(contact._id))}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
    
    </Card.Group>
  )
}

export default Contact