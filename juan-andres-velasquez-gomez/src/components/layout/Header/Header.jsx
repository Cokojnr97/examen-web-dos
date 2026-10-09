import { Link } from "react-router-dom";
import Icon from "../../ui/Icon/Icon";

const Header = () => {
    return (
        <header className="site-header">
            <div className="container nav-bar">
                <Link to="/" className="brand">
                    <div className="brand-badge">
                        <Icon name="book-open" />
                    </div>
                    <span>Librería Archivo</span>
                </Link>
                <nav>
                    <ul className="nav-links">
                        <li>
                            <Link to="/">
                                <Icon name="home" className="icon-sm" />
                                <span>Inicio</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/catalogo">
                                <Icon name="grid" className="icon-sm" />
                                <span>Catálogo</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contacto">
                                <Icon name="mail" className="icon-sm" />
                                <span>Contacto</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header