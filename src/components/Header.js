import React from "react";
import "../assets/stylesheets/Header.css"


class Header extends React.Component{

    render() {
        return(
            <header>
                <div id="header-component">
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                            {/*<Link to='/main' class="d-grid gap-2">*/}
                                <button className="btn navbar-brand" type="button"> <img  src="https://cdn.discordapp.com/attachments/948305576302104668/992018875514363945/unknown.png"  alt="..." width="90" height="90"/></button>
                            {/*</Link>*/}



                                    <div className="btn-group dropstart navbar-brand">

                                        <form  id="search-component"className="d-flex">
                                            <input className="form-control me-2" type="search" placeholder="Buscar..."
                                                   aria-label="Search">
                                            </input>
                                            <button className="btn btn-outline-dark " type="submit">Buscar</button>
                                        </form>
                                        <button className="btn" type="button"
                                                id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            <img src="https://cdn.discordapp.com/attachments/948305576302104668/992019415208050798/unknown.png" alt="..." width="50" height="50"/>
                                        </button>
                                        <ul className="dropdown-menu">

                                            <li><a className="dropdown-item" href="#">
                                                <div className="d-grid gap-2">
                                                    {/*<Link to='/micuenta'>*/}
                                                        <button className="btn " type="button">Mi cuenta</button>
                                                    {/*</Link>*/}
                                                </div>
                                            </a></li>


                                            <li><a className="dropdown-item" href="#">
                                                <div className="d-grid gap-2">
                                                    {/*<BotonAdm/>*/}
                                                </div>
                                            </a></li>


                                            <li><a className="dropdown-item" href="#">
                                                <div className="d-grid gap-2">
                                                {/*    <Link to='/login'>
                                                        <button className="btn " type="button"  onClick={this.cerrarSesion.bind(this)}>Cerrar Sesion</button>
                                                    </Link>*/}
                                                </div>
                                            </a></li>

                                        </ul>



                                    </div>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                        </div>
                    </nav>
                </div>




            </header>
        )
    }


}

export default Header;