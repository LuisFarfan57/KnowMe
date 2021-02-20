import React from 'react'
import './styles/header.css'
import imagenUsuario from '../imagenes/user.png'
import iconoMenu from '../imagenes/icono_menu.png'
import {Link, NavLink} from 'react-router-dom'
import {Boton} from './Boton'

function Header(props) { 
    const mostrarMenu = () => {
        if (document.querySelector('#menuResponsive').classList.contains('hide')) document.querySelector('#menuResponsive').classList.remove('hide');
        else document.querySelector('#menuResponsive').classList.add('hide');
    }   
    return (
        <header id="header">
            <div className="d-flex align-items-center justify-content-between p-3" id="headerGrande">
                <div className="d-flex align-items-center">
                    <img className="imagen_usuario" src={imagenUsuario}></img>
                    <p className="texto_header mb-0 ml-3">Luis Farfán</p>

                    <NavLink  to="/app/inicio" className="texto_header mb-0 ml-3" activeClassName="link-activo">Home</NavLink>
                </div>
                <div>
                    <NavLink  to="/app/mis-negocios" className="texto_header mb-0 ml-3" activeClassName="link-activo">Mis negocios</NavLink>
                    <NavLink  to="/app/nuevo-negocio" className="texto_header mb-0 ml-3" activeClassName="link-activo">Nuevo negocio</NavLink>
                    <NavLink  to="/login" className="texto_header mb-0 ml-3" activeClassName="link-activo">Cerrar sesión</NavLink>
                </div>
            </div>

            <div className="d-flex align-items-center justify-content-between p-3" id="headerResponsive">
                <div>
                    <img src={iconoMenu} className="icono_menu"  onClick={mostrarMenu}/>
                </div>
                <div>
                    <img className="imagen_usuario" src={imagenUsuario} />
                </div>                
            </div>

            <div id="menuResponsive" className="d-none flex-column align-items-center pt-5 pl-3 pr-3">
                <Link to="/app/inicio" className="w-100">
                    <Boton color="amarillo" texto="Home" clases="mb-3 w-100" />
                </Link>
                <Link to="/app/mis-negocios" className="w-100">
                    <Boton color="amarillo" texto="Mis negocios" clases="mb-3 w-100" />
                </Link>
                <Link to="/app/nuevo-negocio" className="w-100">                    
                    <Boton color="amarillo" texto="Nuevo negocio" clases="mb-3 w-100" />
                </Link>
                <Link to="/login" className="w-100">
                    <Boton color="rojo" texto="Cerrar sesión" clases="w-100" />
                </Link>                
            </div>
        </header>
    )
}

export default Header