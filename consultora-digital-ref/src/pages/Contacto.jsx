import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import emailjs from 'emailjs-com';

function Contacto(){
    const location = useLocation();
    const [servicio, setServicio] = useState('');
    
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setServicio(params.get('servicio')||'');
    }, [location]);

    const enviarFromulario = (e) => {
        e.preventDefault();

        emailjs.sendForm('Service-consultora', 'template_xzq4ysy', e.target, 'W5lP586n4dVbX4tQE')
        .then((result) => {
            alert('Mensaje Enviado Correctamente ✅');
        }, (error) => {
            alert('Hubo un error al envia mensaje ❌')
        });
        e.target.reset();
    }
    return(
        <div className="container mt-5">
            <h1 className="mb-4">Contactanos</h1>
            <p>Podés comunicarte con nosotros para recibir mas informacion o un presupuesto personalizado</p>
        <form onSubmit={enviarFromulario}>
            
            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input type="text" name="nombre"className="form-control" required/>
            </div>

            <div className="mb-3">
                <label className="form-label">Telefono:</label>
                <input type="text" name="telefono" className="form-control" required/>
            </div>

            <div>
                <label >Email:</label>
                <input type="email" name="email" className="form-control" required/>
            </div>
            
            <div className="mb-3">
                <label className="form-label">Servicio</label>
                <input type="text" name="servicio" className="form-control" value={servicio} readOnly />
            </div>
            
            <div className="mb-3">
                <label className="form-label">Mensaje</label>
                <textarea className="form-control" name="mensaje" rows = "5" required/>
            </div>
            <button type="submit" className="btn btn-success">Enviar consulta</button>
        </form>
        </div>
    )
}

export default Contacto;