import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header class="site-header">
            <div class="container nav-bar">
                <Link to="/" class="brand">
                    <div class="brand-badge">
                        <i data-lucide="book-open"></i>
                    </div>
                    <span>Librería Archivo</span>
                </Link>
                <nav>
                    <ul class="nav-links">
                        <li>
                            <Link to="/">
                                <i data-lucide="home" class="icon-sm"></i>
                                <span>Inicio</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/catalogo">
                                <i data-lucide="grid" class="icon-sm"></i>
                                <span>Catálogo</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contacto">
                                <i data-lucide="mail" class="icon-sm"></i>
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