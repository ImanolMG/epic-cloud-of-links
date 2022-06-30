import React from "react";

import {Link} from "react-router-dom";
import update from "immutability-helper";

import APIInvoker from "../utils/APIInvoker";
import "../assets/stylesheets/card_link.css"
class CardLink extends React.Component{

    constructor(props) {
        super(props);

    }

    changeField(e) {

        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field] : {$set : value}
        }))
    }
//boton config class="d-grid gap-2"
render() {
        return(
                    <div id="container-card-turismo">
                               {/*<img id="imagen-card-turismo" src={this.props.imagen} />*/}
                        <div id="titulo-card-turismo">    <h5   >{this.props.title} </h5></div>
                            {/*<div id="ubicacion-card-turismo">    <label  >{this.props.ubicacion}</label> </div>*/}

                        {/*<Link id="a-boton" to={/lugarturistico/+this.props.idLugares}>*/}
                            <button id="boton-ver-mas-turismo"  type="button"  >Ver Enlace </button>
                        {/*</Link>*/}

                    </div>


        )
    }


}
export default CardLink;