import imagen1 from "../../../assets/img/concierto1.jpeg"

export const Inicio = ()=>{
    return(
        <>
            <div className="card">
                <img src={imagen1} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Grandiosos Conciertos</h5>
                    <p className="card-text">Artistas de talla mundial.<br/> Ven y no te los pierdas</p>
                    <a href="#" className="btn btn-primary">Más información</a>
                </div>
            </div>
        </>
    )
}