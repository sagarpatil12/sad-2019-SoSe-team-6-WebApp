import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {

    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)

    }

    render () {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Your Book</h1>
                     </div>
                         <div>
                                <iframe src="http://localhost:9000/book/To%20Kill%20a%20Mockingbird%20-%20Lee%2C%20Nelle%20Harper?page=hsn#toolbar=0"
                                    width="1000"
                                    height="1333"
                                    id="myId"
                                    allowFullScreen
                                 />
                         <div>

                                <button type="button" class="btn btn-success">Download</button>
                        </div>      
                     </div>
  
                 </div>
            </div>
        )
    }
}

export default Profile