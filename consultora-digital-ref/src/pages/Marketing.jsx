import ServiceCard from "../components/ServiceCard";

function Marketing(){
    return(
        <div style={{ padding: '20px' }}>
            <h1>Servicios de Marketing Digital</h1>

            <h2>Servicios Individuales</h2>
            <ul>
                <li>Configuracion de Redes Sociales</li>
                <li>Diseño de Post y Publicidad</li>
                <li>Gestion de Redes Sociales</li>
            </ul>
            <h2>Packs de Marketing</h2>
            <ul>
                <li>Pack Inicial: Configuracion + 5 Post</li>
                <li>Pack Intermedio: Gestion Mensual + 10 post + Historia</li>
                <li>Pack Premium: Gestion Mensual + Diseño Premium + Campaña ADS</li>
            </ul>
            <div className="container mt-5">
            
            <ServiceCard
            title="Pack Inicial Marketing"
            description="Ideal para mostrar tus servicios o productos de manera simple y rápida."
            />
            <ServiceCard
            title="Pack Intermedio Marketing"
            description="Ideal para mostrar tus servicios o productos de manera simple y rápida."
            />
            <ServiceCard
            title="Pack Intermedio Marketing"
            description="Ideal para mostrar tus servicios o productos de manera simple y rápida."
            />
                </div>
            
        </div>
    )
}

export default Marketing;