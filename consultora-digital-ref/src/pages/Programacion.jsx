import ServiceCard from "../components/ServiceCard";

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


        </div>
    )
}

export default Programacion;