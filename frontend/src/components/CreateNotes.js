import React, { Component } from 'react'
import axios from 'axios'

export class CreateNotes extends Component {

    state = {
        users: []
    }

    async componentDidMount(){
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState=({users: res.data})
    }

    onSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Create a Note</h4>
                    
                    {/* SELECT USER */}
                    <div className="form-group">
                        <select 
                        className="form-control"
                        name="userSelected"
                        

                        >
                        {
                            this.state.users.map(users => 
                            <option key={users._id}>
                                {users.username}
                            </option>    
                                )
                        }
                        </select>
                    </div>
                    <form onSubmit={this.onSubmit}>

                        <button type="submit" className="btn-primary">
                            Save
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateNotes
