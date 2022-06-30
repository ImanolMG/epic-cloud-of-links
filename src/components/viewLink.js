import React from "react";
import {Link} from "react-router-dom";
import '../assets/stylesheets/Link.css'
import APIInvoker from "../utils/APIInvoker";
import update from 'immutability-helper'

class ViewLink extends React.Component{


    constructor() {
        super();

        this.state = {
            title : 'Sin titulo',
            category : '1',
            body_link : ''
        }
        this.status = false

    }
componentDidMount() {
    document.getElementById("button-guardar").style.display = 'none';
    document.getElementById("button-copiar").style.display = 'none';
    document.getElementById("button-descargar-txt").style.display = 'none';
    document.getElementById("button-compartir").style.display = 'none';
    document.getElementById("button-eliminar").style.display = 'none';
}

    crearEnlace(e){
        this.messageError.innerHTML = ''
        this.validarCampos()
        if (this.status) {
            let link = {
                title: this.state.title,
                category: this.state.category,
                body_link: this.state.body_link,
            }
            APIInvoker.invokePOST('/links/add',link,data=>{
                alert(data.message)
            }, error => {
                alert(error.message + error.error)
            })
        } else
            this.messageError.innerHTML = 'Los campos marcados con * son obligatorios'
        e.preventDefault()
    }

    changeField(e) {

        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field] : {$set : value}
        }))
    }

    validarCampos(){
        let estado = true;
        if (this.state.title.length === 0) {
            this.title.innerHTML = '* Titulo obligatorio'
            estado = false;
        } else
            this.title.innerHTML = ''

        if (this.state.body_link.length === 0) {
            this.body_link.innerHTML = '* Necesitas agregar algo en el campo de texto'
            estado = false;
        } else
            this.body_link.innerHTML = ''

        if (estado === false)
            this.status = false
        else
            this.status = true
    }
    render() {

        return(
            <div className="principal-link">
                <div id="container-link">
                <div className="mb-3">
                    <div id="container-title" className="mb-2">
                        <label ref={self=> this.title = self} className="text-warning"></label>
                        <input type="text" className="form-control" id="title-link"
                               placeholder="Agregar el titulo"
                               name="title"
                               value={this.state.title}
                               onChange={this.changeField.bind(this)}
                        />
                    </div>
                    <select  className="mb-2" id="selection-category" name="category"  value={this.state.category} onChange={this.changeField.bind(this)}>
                        <option value="1" selected>Sin categoria</option>
                        <option value="2" >Juegos</option>
                        <option value="3">Video</option>
                        <option value="4">Nubes</option>
                    </select>
                    <div><label ref={self=> this.body_link = self} className="text-warning"></label> </div>
                    <textarea value={this.state.body_link} onChange={this.changeField.bind(this)} name="body_link" className="form-control mb-2" id="text-area-link" rows="12"></textarea>

                    <div id="group-buttons">
                        <button type="button" id="button-copiar" >Copiar</button>
                        <button type="button" id="button-descargar-txt" >Descargar txt</button>
                        <button type="button" id="button-compartir" >Compartir</button>
                        <button type="button" id="button-guardar-nuevo" onClick={this.crearEnlace.bind(this)} >Guardar nuevo</button>
                        <button type="button" id="button-guardar" >Guardar</button>
                        <button type="button" id="button-cancelar" >Cancelar</button>
                        <button type="button" id="button-eliminar" >Eliminar</button>
                    </div>

                </div>
                    <div ref={self => this.messageError = self} className="text-warning"></div>
                </div>
            </div>
        )
    }


}
export default ViewLink;