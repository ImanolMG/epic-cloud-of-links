import React from "react";
import "../assets/stylesheets/Header.css"


class Header extends React.Component{

    render() {
        return(
            <header>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            {/*<Link to='/main' class="d-grid gap-2">*/}
                                <button className="btn navbar-brand" type="button"> <img  src="https://cdn.discordapp.com/attachments/948305576302104668/992018875514363945/unknown.png"  alt="..." width="90" height="90"/></button>
                            {/*</Link>*/}



                                    <div className="btn-group dropstart navbar-brand">

                                        <form className="d-flex">
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



                <div>

                    <nav className="navbar navbar-expand-lg navbar-light bg-light " >
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/*    <li className="nav-item">
                                    <Link to='/main' class="d-grid gap-2">   <a className="nav-link active" aria-current="page" href="#">

                                        <button type="button" className="btn ">

                                            <img  src={IconHome}  alt="..." width="40" height="40"/>
                                        </button>  Inicio </a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/lugarespage'>
                                        <a className="nav-link active" aria-current="page" href="#">
                                            <button type="button" className="btn ">
                                                <img  src={IconPlace}  alt="..." width="40" height="40"/>
                                            </button>   Turismo  </a>
                                    </Link>
                                </li>*/}

                            </ul>
                        </div>



                    </nav>

                </div>

            </header>
        )
    }


}

export default Header;