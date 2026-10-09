import './styles/index.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;