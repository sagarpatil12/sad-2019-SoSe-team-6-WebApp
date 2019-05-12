import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Tilt from 'react-tilt';
 import book from './logo.png';



class Navbar extends Component {
    logOut (e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }


    render () {
        const { onRouteChange } = this.props;
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item f3 tr">
                    <Link to="/login" className="nav-link" onClick={() => onRouteChange('login')}>
                        Login
                    </Link>
                </li>
                <li className="nav-item f3">
                    <Link to="/register" className="nav-link" onClick={() => onRouteChange('register')}>
                        Register
                    </Link>
                </li>
            </ul>
        
        )
        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item f3">
                    <Link to="/Profile" className="nav-link">
                        Book
                    </Link>
                </li>
                <li className="nav-item f3">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </a>
                </li>
            </ul>
        )

        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-black rounded">
           <div class="pointer" onClick={() => onRouteChange('home')}>
                 <Tilt className="Tilt br2 ma3 shadow-2 dib" options={{ max : 25 }} style={{ height: 50, width: 50 }} >
            <div className="Tilt-inner pa1 "><img src={book} alt="logo" style={{ height: 50, width: 50 }}/></div>
                </Tilt>
            <text class="white times ml4 dib f1">ReadersPoint</text>
            </div>

                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link f3" onClick={() => onRouteChange('home')}>
                                Home
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar);
