import React from "react";

const ContactCard = (props) =>{
    const {name, email} = props.contact;
    return (
      <div className="item">
        <div className="content">
          <div className="header">{name}</div>
          <div>{email}</div>
        </div>
        <i className="trash alternate outline icon" style={{color: "red", margintop:"7px" , display:"flex", float:"right"}}></i>
      </div>
    );
};

export default ContactCard;