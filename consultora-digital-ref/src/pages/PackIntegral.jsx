import ServiceCard from "../components/ServiceCard";

function PackIntegral(){
    return(
        <div style={{ padding: '20px' }}>
            <h1>PAck Integral REF</h1>

            <h2>Pack Inicial</h2>
            <ul>
                <li>Pagina Web Informativa</li>
                <li> Configuracion de Redes Sociales</li>
            </ul>
            <h2>Pack Intermedio</h2>
            <ul>
                <li>Pagina Web + Mantenimiento Mensual</li>
                <li>Gestion Basica de Redes Sociales</li>
            </ul>
            <h2>Pack Premium</h2>
            <ul>
                <li>Paginas Web + Mantenimento Mensual + Optimizacion</li>
                <li>Marketing Full : Gestion diseño, campañas ads</li>
                <li>✔️ reparacion de PC incluida solo para cliente Premium</li>
            </ul>
            <div className="container mt-5">
            
            <ServiceCard
            title="Pack Inicial Integral"
            description="El pack Inicial contiene: Pagina Web Informativa + configuracion de Redes Sociales"
            />
            <ServiceCard
            title="Pack Intermedio Integral"
            description="El pack Intermedio contiene: Pagina Web Personalizada + Mantenimiento mensual + Gestion de Redes Sociales"
            />
            <ServiceCard
            title="Pack Premium Integral"
            description="El pack Premium contiene: Pagina Web Personalizada + Mantemiento mensual + Optimizacion + Marketing full + Reparaciones de PC"
            />
                </div>
        </div>
    )
}

export default PackIntegral;