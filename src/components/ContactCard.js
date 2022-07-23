import React from "react";
import trash from "../images/trash.png"
import person from "../images/person.png"

const ContactCard = (props) =>{
    const {name, email, id} = props.contact;
    return (
      <div>
        <div className="flex  justify-between md:w-2/6  bg-blue-200 m-4">
          <img
            className="flex float-left ml-10"
            src={person}
            alt="person"
          ></img>

          <div className="w-72">
            <div className="text-xl  ">{name}</div>
            <div className="text-xl  ">{email}</div>
          </div>

          <img  src={trash} alt="trash" onClick={() => props.clickHandler(id)}></img>
        </div>
        <hr />
      </div>
    );
};

export default ContactCard;