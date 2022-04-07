import React, { Component } from 'react';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: false,
            tut: false
        }

        
    }
    componentDidMount() {
        if(this.props.page == 'tut'){
            this.setState({ tut: true });
        } else if(this.props.page == 'home'){
            this.setState({ home: true });
        }    
    }

    render() {
        return (
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo">g'OZieCHUKWU</a>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="/devwithgozie.com.ng#contactMe">Contact</a></li>
                        </ul>
                    </div>
                    
                </nav>
                <ul className="sidenav" id="mobile-demo">
                    <li><a href="/devwithgozie.com.ng#contactMe">Contact</a></li>
                </ul>
            </div>
        );
    }
}