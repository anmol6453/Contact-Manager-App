import React from 'react'
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useContactsCrud } from '../context/ContactsCrudContext';

const EditContact = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {id, name, email} = location.state.contact;
    const [newEmail, setNewEmail] = useState(email);
    const [newName, setNewName] = useState(name);
    const {updateContactHandler} = useContactsCrud();

    const update = (e) => {
        e.preventDefault();
        if(name === '' || email === ''){
            alert("All the fields are mandatory");
            return;
        }
        updateContactHandler({id, name: newName, email: newEmail});
        setNewEmail("");
        setNewName("");
        navigate("/");
    };

    return (
        <div className="ui main">
            <h2 className='ui h2'>Edit Contact</h2>
            <form className="ui form" onSubmit={update}>
                <div className="field">
                    <label>Name</label>
                    <input 
                        type='text' 
                        name='name' 
                        placeholder='Name'
                        value={newName}
                        onChange={e => setNewName(e.target.value)} 
                    />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input 
                        type='text' 
                        name='email' 
                        placeholder='Email'
                        value={newEmail}
                        onChange={e => setNewEmail(e.target.value)}
                    />
                </div>
                <button className='ui button blue'>Update</button>
            </form>
        </div>
    )
}

export default EditContact