import React from "react";
import AddContact from "./AddContact";
import './App.css';
import ContactList from "./ContactList";
import Header from "./Header";

function App() {
  const contacts =[
    {
      id:"1",
      name:"hamza",
      email:"hamza@gmail.com"
    },
    {
      id:"2",
      name:"harry",
      email:"harry@gmail.com"
    },
  ];

  return (
    <div >
    <Header/>
    <AddContact/>
    <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
