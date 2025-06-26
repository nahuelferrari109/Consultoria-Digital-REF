

function ServiceCard ({title, description}){
    return(
        <div className="card p-3 mb-4 shadow-sm border">
            <h3 className="h5 mb-2">{title}</h3>
            <p className="mb-3">{description}</p>
        </div>
    );
}
export default ServiceCard;