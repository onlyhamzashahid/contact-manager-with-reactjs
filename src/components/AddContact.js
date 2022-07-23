import React from "react";

class AddContact extends React.Component {
    state = { 
      name:"",
      email:"",
     } 

     add = (e) => {
      e.preventDefault();
      if (this.state.name === "" && this.state.email === "") {
        alert("Alll the fields are mendatory!")
        return
      }
      this.props.AddContactHandler(this.state);
      this.setState({name:"", email:""});
     };
    render() { 
        return (
          <div>
            <h2 className="font-bold text-3xl mt-14 ml-24 mr-24 mb-4 ">
              Add Email
            </h2>
            <form className="mt-2 ml-24 mr-24 mb-2" onSubmit={this.add}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Name
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2  "
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Email
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2  "
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
              <button className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center m-10">
                Add Email
              </button>
            </form>
          </div>
        );
    }
}
 
export default AddContact;