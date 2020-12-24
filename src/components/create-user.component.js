import  React, { Component } from "react";
import axios from "axios";

class CreateUser extends Component {
     constructor(props) {
          super(props);

          this.onChangeUsername = this.onChangeUsername.bind(this);
          
          this.onSubmit = this.onSubmit.bind(this);

          this.state = {
               username: ''
          }
     }

     onChangeUsername(e) {
          this.setState({
               username: e.target.value
          });
     }
     

     onSubmit(e) {
          e.preventDefault();
          const user = {
               username: this.state.username
          }
          console.log(user);
          axios.post('http://localhost:5000/users/add', user)
          .then(response => console.log(response.data))
          .catch(err => console.log(err));

          this.setState({
               username: ''
          })
     }
     
     render() {
          return (
               <div>
                    <form onSubmit={this.onSubmit}>
                         <div className="form-group">
                              <label>Username: </label>
                              <input type="text" className="form-control" placeholder="Enter username" value={this.state.username} onChange={this.onChangeUsername}></input>
                         </div>
                         <div className="form-group">
                              <input type="submit" value="Create User" className="btn btn-primary"></input>
                         </div>
                    </form>

                    <div>
                         <h3>Users</h3>
                         <table>
                              <tr>
                                   <th>Username</th>

                                   <th>Action</th>
                              </tr>
                              {
                                   this.users.map(function(user) {
                                        return <tr>
                                             <td>{user}</td>
                                             <button id={user._id}>Delete</button>
                                        </tr>
                                   }) 
                              }
                         </table>
                    </div>
               </div>
          );
     }
}

export default CreateUser;