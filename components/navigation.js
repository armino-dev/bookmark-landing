import React from 'react'
export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobileMenuOn: false,
        }
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
    }

    toggleMobileMenu() {
        let isOn = !this.state.isMobileMenuOn
        console.log("toggle mobile menu")
        this.setState({
            isMobileMenuOn: isOn,
        })
    }

    render() {
        const className = this.state.isMobileMenuOn ? "main-nav mobile" : "main-nav"        
        return (
            <nav className={className}>
                <div className="nav-left">
                    <img className="brand" title="Bookmark" src="/images/logo-bookmark.svg" />
                </div>
                <div className="nav-right">
                    <ul className="menu">
                        <li className="menu-item active">
                            <a href="#">Features</a>
                        </li>
                        <li className="menu-item">
                            <a href="#">Pricing</a>
                        </li>
                        <li className="menu-item">
                            <a href="#">Contact</a>
                        </li>
                        <li className="menu-item">
                            <a href="#" className="btn-login">Login</a>
                        </li>
                    </ul>
                    <div className="hamburger">
                        <button className="btn" onClick={this.toggleMobileMenu}><img src="/images/icon-hamburger.svg" /></button>
                    </div>
                </div>
            </nav>
        )
    }
}