import React from "react";

class AddContact extends React.Component {
    state = {  } 
    render() { 
        return (
          <div className="ui main Center Aligned">
            <h2>Add Contact</h2>
            <form className="ui form">
              <div className="Field">
                <label>Name</label>
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="field">
                <label>Email</label>
                <input type="text" name="email" placeholder="Email" />
              </div>
              <button className="ui button blue">Add Contact</button>
            </form>
          </div>
        );
    }
}
 
export default AddContact;