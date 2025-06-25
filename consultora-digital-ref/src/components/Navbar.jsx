import { Link } from 'react-router-dom';

function Navbar (){
    return(
        <nav style={{padding: '20px', backgroundColor: '#255A62', color: 'white'}}>
        <Link to="/" style={{ margin: '0 25px', color: 'white', textDecoration: 'none' }}>Inicio</Link>
        <Link to="/programacion" style={{ margin: '0 25px', color: 'white', textDecoration: 'none' }}>Programación</Link>
        <Link to="/marketing" style={{ margin: '0 25px', color: 'white', textDecoration: 'none' }}>Marketing</Link>
        <Link to="/pack-integral" style={{ margin: '0 25px', color: 'white', textDecoration: 'none' }}>Pack Integral</Link>
        <Link to="/nosotros" style={{ margin: '0 25px', color: 'white', textDecoration: 'none' }}>Nosotros</Link>
        <Link to="/contacto" style={{ margin: '0 25px', color: 'white', textDecoration: 'none' }}>Contacto</Link>
        </nav>
    )
}
export default Navbar