import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";

function App() {
  const LOCAL_STORAGE_KEY= "contacts"
  const [contacts, setContacs]=useState([])



const AddContactHandler = (contact) => {
  console.log(contact);
  setContacs([...contacts,contact])
}

useEffect(() => {
  const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (retriveContacts) setContacs(retriveContacts);
}, []);

useEffect(() =>{
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
},[contacts]);
  return (
    <div >
    <Header/>
    <AddContact AddContactHandler={AddContactHandler}/>
    <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
