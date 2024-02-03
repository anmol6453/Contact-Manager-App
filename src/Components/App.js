import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Header.js';
import AddContact from './AddContact.js';
import EditContact from './EditContact.js';
import ContactList from './ContactList.js';
import ContactDetail from './ContactDetail.js';
import './App.css';
import { ContactsCrudContextProvider } from '../context/ContactsCrudContext.js';

function App() {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <ContactsCrudContextProvider>
          <Routes>
            <Route 
              path="/" 
              exact
              element={<ContactList />} 
            />
            <Route 
              path="/add" 
              element={ <AddContact />}
            />
            <Route 
              path="/edit" 
              element={ <EditContact /> } 
            />
            <Route
              path='/contact/:id'
              element={<ContactDetail />}
            />
          </Routes>
        </ContactsCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;
