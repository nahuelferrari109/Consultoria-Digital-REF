import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";
function Programacion(){
    return(
        <div className="container mt-5">
            <h1 className="mb-4">Servicios de Programacion Web</h1>

            <ServiceCard
            title="Pagina Web Informatica"
            description="Ideal para mostrar tus servicios o productos de manera simple y rápida."
            />
           
            <ServiceCard
            title="Pagina Web + Mantenimiento"
            description="Ideal para mostrar tus servicios o productos de manera simple y rápida."
            />
           
            <ServiceCard
            title="Pagina Web + Mantenimiento + Optimizacion"
            description="Ideal para mostrar tus servicios o productos de manera simple y rápida."
            />
         
         <Link to={`/contacto?servicio=${encodeURIComponent("Programacion")}`} className = "btn btn-primary">
            consultar
            </Link>

        </div>
    )
}

export default Programacion;