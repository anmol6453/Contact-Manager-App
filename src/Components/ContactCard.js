import React from 'react'
import { Link } from 'react-router-dom'
import user from '../Images/user.png'
import { useContactsCrud } from '../context/ContactsCrudContext'


const ContactCard = ({contact}) => {
  const {removeContactHandler} = useContactsCrud();
  const deleteContacts = (id) => {
    removeContactHandler(id);
  }

  return (
    <div className='item'>
        <img className='ui avatar image' src={user} alt='user'></img>
        <div className='content'>
          <Link 
            to={`/contact/${contact.id}`}
            state={{contact: contact}}>
              <div className='header'>{contact.name}</div>
              <div>{contact.email}</div>
          </Link>
        </div>
        <i 
            className='trash alternate outline icon' 
            style={{color: 'red', marginTop: '7px', marginLeft: "10px"}}
            onClick={() => deleteContacts(contact.id)}>
        </i>
        <Link 
            to={`/edit`}
            state={{contact: contact}}>
          <i 
              className='edit alternate outline icon' 
              style={{color: 'blue', marginTop: '7px'}}
              >
          </i>
        </Link>
    </div>
  )
}

export default ContactCard