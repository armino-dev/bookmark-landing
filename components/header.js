export default class Header extends React.Component {

    render() {
        return(
            <header>
                <nav>
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
                    </div>
                </nav>
            </header>
        )
    }
}