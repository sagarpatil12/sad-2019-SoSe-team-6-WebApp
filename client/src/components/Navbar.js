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


        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </li>
            </ul>
        )

        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/Profile" className="nav-link">
                        Book
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </a>
                </li>
            </ul>
        )

        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
            <div className='ma3 mt2 dib fl'>
                 <Tilt className="Tilt br2 shadow-2 dib" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
            <div className="Tilt-inner pa1 ml1"><img src={book} alt="logo" style={{ height: 100, width: 100 }}/></div>
                </Tilt>
            <h2 class="light-gray times ma3 ml4 pa3 fs-20 dib">ReadersPoint</h2>
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
                            <Link to="/" className="nav-link">
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
