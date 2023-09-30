import "../assets/css/navbarFooter.css";

import { NavLink} from "react-router-dom";
import { useContext } from "react";

import { useOperationsContext } from "../context/OperationsContext";
import Context from "../context/Context";


export default function Navbar() {

    const {FormatCoin, total} = useOperationsContext ()
    const { usuario} = useContext(Context);
    



   
    return (
        <nav>
            <div className="d-flex_1">
                <div className="navHom">
                    <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} end to="/" > 👀 Anime Shop </NavLink>
                </div>

                <div className="d-flex">
                    {/* Rutas no protegidas */}
                    <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} end to="/Productos" > Productos</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} end to="/car" >🛒{FormatCoin(total)}</NavLink>

                    {!usuario && (
                        <>
                            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} end to="/registro" >Registrar</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} end to="/login" >Iniciar Sesión</NavLink>
                        </>
                    )}

                    {/* Rutas protegidas */}
                    {usuario && (
                        <>
                            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} end to="/perfil" >Perfil</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} end to="/mispedidos" >Mis Pedidos</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} end to="/favoritos" > Favoritos</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} end to="/logout" > Logout</NavLink>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}