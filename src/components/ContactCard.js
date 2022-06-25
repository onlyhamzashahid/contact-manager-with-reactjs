import React from "react";
import trash from "../images/trash.png"
import person from "../images/person.png"

const ContactCard = (props) =>{
    const {name, email} = props.contact;
    return (
      <div >
        <img  className="flex float-left ml-10" src={person} alt="trash"></img>
        <div className=" block w-2/4  ml-28   ">
        <img  className="flex float-right" src={trash} alt="trash"></img>
        <div className="text-xl w-10  ">{name}</div>
        <div className="text-xl w-10  ">{email}</div>
        </div>
        <hr/ >
      </div>
    );
};

export default ContactCard;