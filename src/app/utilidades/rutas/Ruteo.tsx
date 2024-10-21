import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { AdministrarArtistas } from "../../componentes/concierto/AdministrarArtistas";
import { ListarArtistas } from "../../componentes/concierto/ListarArtistas";
import { RegistrarArtistas } from "../../componentes/concierto/RegistrarArtistas";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";
import { Acerca } from "../../componentes/otros/Acerca";


export const Ruteo = ()=>{
    return(
        <Routes>
            <Route path="/" element={< Inicio/>} />

            <Route path="/admiart" element={<AdministrarArtistas/>}/>
            <Route path="/lisart" element={<ListarArtistas/>}/>
            <Route path="/regart" element={<RegistrarArtistas/>}/>

            <Route path="/acer" element={<Acerca/>}/>

            <Route path="*" element={<NoEncontrado/>}/>
        </Routes>
    )
}