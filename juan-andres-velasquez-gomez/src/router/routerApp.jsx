import App from "../App";
import CatalogoPage from "../pages/CatalogoPage/CatalogoPage";
import ContactoPage from "../pages/ContactoPage/ContactoPage";
import HomePage from "../pages/HomePage/HomePage";

export const routerApp = [ 
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/catalogo",
                element: <CatalogoPage />
            },
            {
                path: "/contacto",
                element: <ContactoPage />
            }
        ]
    }
]