import React from "react";
import '../assets/stylesheets/register.css'
import APIInvoker from "../utils/APIInvoker";
import update from 'immutability-helper'
import {Link} from "react-router-dom";
class SignUp extends React.Component{

    constructor() {
        super();
        this.state  = {
            names : '',
            surnames : '',
            username : '',
            password : '',

        }
        this.status = false
        this.usernameOk = false


    }
    changeField(e) {
        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state,{
            [field] : {$set : value}
        }))
    }

    validateUsername(e) {
        let username = this.state.username
        if (username) {
            APIInvoker.invokeGET(`/users/usernameValidate/${username}`,data => {
                this.username.innerHTML = '* El nombre de usuario no está disponible'
                this.usernameOk = false
            }, error => {
                this.username.innerHTML = '* El nombre de usuario está disponible'
                this.usernameOk =  true
            })
        } else
            this.usernameOk = false
    }

    crearCuenta(e){
        this.messageError.innerHTML = ''
        this.validarCampos()
        if (this.status && this.usernameOk) {
            let user = {
                idRol: 1,
                names: this.state.names,
                surnames: this.state.surnames,
                username: this.state.username,
                password: this.state.password
            }

            APIInvoker.invokePOST('/users/signup',user,data=>{
                alert(data.message)
                this.usernameOk = false
            }, error => {
                alert(error.message + error.error)
            })
        } else
            this.messageError.innerHTML = 'Los campos marcados con * son obligatorios'
        e.preventDefault()
    }


    validarCampos(){
        let estado = true;
        if (this.state.names.length === 0) {
            this.names.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.names.innerHTML = ''

        if (this.state.surnames.length === 0) {
            this.surnames.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.surnames.innerHTML = ''

        if (this.state.username.length === 0) {
            this.username.innerHTML = '* Campo obligatorio'
            estado = false;
        }
        if (this.state.password.length === 0) {
            this.password.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.password.innerHTML = ''
        if (estado === false)
            this.status = false
        else
            this.status = true
    }
    render() {
        return(
                <div className="row" id="register">
                    <div className="col-sm-4 offset-4 mt-5">
                        <div className="card" id="tarjeta_register">
                            <div className="card-header">
                                <h1 className='title1'>Registrarse</h1>
                            </div>
                            <div className="card-body">
                                <div className="mb-1" >
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
                                    <label ref={self=> this.names = self} className="text-warning"></label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" name="names"
                                           placeholder="Nombre completo"
                                           value={this.state.names}
                                           onChange={this.changeField.bind(this)}
                                    />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Apellidos</label>
                                    <label ref={self=> this.surnames = self} className="text-warning"></label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" name="surnames"
                                           placeholder="Apellidos"
                                           value={this.state.surnames}
                                           onChange={this.changeField.bind(this)}
                                    />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Nombre de usuario</label>
                                    <label ref={self=> this.username = self} class="text-danger"></label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" name="username"
                                           placeholder="Nombre de usuario"
                                           value={this.state.username}
                                           onChange={this.changeField.bind(this)}
                                           onBlur={this.validateUsername.bind(this)}
                                    />
                                </div>
                                <div className="mb-1 ">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Contraseña</label>
                                    <label ref={self=> this.password = self} className="text-warning"></label>
                                    <input className="form-control" type="password"
                                           name="password"
                                           id="password"
                                           placeholder="Contraseña"
                                           value={this.state.password}
                                           onChange={this.changeField.bind(this)}
                                           />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Confirmar contraseña</label>
                                    <input className="form-control" type="password"
                                           name="password"
                                           id="password"
                                           placeholder="Confirmar contraseña"
                                    />
                                </div>
                                <div className="d-grid gap-2">
                                    <div ref={self => this.messageError = self} className="text-warning"></div>
                                    <button className="btn btn-primary" type="button"  onClick={this.crearCuenta.bind(this)}>Registrarse
                                    </button >
                                    <label  className="form-label">Ya tienes una cuenta?</label>
                                    <Link to='/'>
                                    <button className="btn btn-primary">Iniciar Sesion</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

        )
    }
}

export default SignUp;