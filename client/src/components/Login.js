import React, { Component } from 'react'
import { login } from './UserFunctions'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',

        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
       
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if (res) {               
                this.props.onRouteChange('home');
            }            
        })
    }

    render () {    
        const { onRouteChange } = this.props; 
        return (
            
            <div className="container white ba bw2 w-50 mt6 center br4">
                <div className="row">
                    <div className="col-md-6 mt-3 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Sign In Here!</h1>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange} />
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary center-block mb4"  >
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login