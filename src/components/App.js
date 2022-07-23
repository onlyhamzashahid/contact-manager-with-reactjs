import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { uuid } from "uuidv4";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";

function App() {
  const LOCAL_STORAGE_KEY= "contacts"
  const [contacts, setContacs]=useState([])



const AddContactHandler = (contact) => {
  console.log(contact);
  setContacs([...contacts,{id : uuid() , ...contact}])
}

const removeContactHandler = (id) =>{
  const newContactList =contacts.filter((contact) => {
    return contact.id !== id;
  })

  setContacs(newContactList);
};

useEffect(() => {
  const retriveContacts = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY));
  if (retriveContacts) setContacs(retriveContacts);
}, []);

useEffect(() =>{
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
},[contacts]);


  return (
    <div >
    <Header/>
    <AddContact AddContactHandler={AddContactHandler}/>
    <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;
