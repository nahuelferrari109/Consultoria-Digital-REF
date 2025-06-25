import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";

function Contacto(){
    const location = useLocation();
    const [servicio, setServicio] = useState('');
    
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setServicio(params.get('servicio')||'');
    }, [location]);
    return(
        <div className="container mt-5">
            <h1 className="mb-4">Contactanos</h1>
            <p>Podés comunicarte con nosotros para recibir mas informacion o un presupuesto personalizado</p>
        <form>
            
            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input type="text" className="form-control" />
            </div>

            <div>
                <label >Email:</label>
                <input type="email" className="form-control" />
            </div>
            
            <div className="mb-3">
                <label className="form-label">Servicio</label>
                <input type="text" className="form-control" value={servicio} readOnly />
            </div>
            
            <div className="mb-3">
                <label className="form-label">Mensaje</label>
                <textarea className="form-control" rows = "5"/>
            </div>
            <button type="submit" className="btn btn-success">Enviar consulta</button>
        </form>
        </div>
    )
}

export default Contacto;