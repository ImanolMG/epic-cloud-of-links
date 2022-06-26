import React from "react";
import {Link} from "react-router-dom";
import '../assets/stylesheets/Login.css'
import APIInvoker from "../utils/APIInvoker";
import update from 'immutability-helper'
class Login extends React.Component{
    constructor() {
        super();
        this.state = {
            username:'',
            password:''
        }
    }



    changeField(e) {

        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field] : {$set : value}
        }))
    }


    iniciarSesion(e){
        let user = {
            username: this.state.username,
            password: this.state.password
        }


            APIInvoker.invokePOST('/users/login',user,data => {

/*                window.localStorage.setItem('user',user.username)
                this.props.history.push('/main')*/

                this.pass.innerHTML = data.message

            }, error =>{
                this.pass.innerHTML = error.message

            })
    }

    render() {
        return(
            <>
                <div className="row" id="login">
                    <div className="col-sm-4 offset-4 mt-5">
                        <div className="card pt-4" id="tarjeta_login">
                            <div className="card-header">
                                <h1 className='title1'>Iniciar sesión</h1>
                            </div>
                            <div className="label-error" ref={ self => this.label = self}></div>
                            <div className="label-error" ref={ self => this.pass = self}> </div>
                            <div className="card-body" onChange={this.changeField.bind(this)}>
                                <div className="input-group mb-4"  onChange={this.changeField.bind(this)}>
                                    <span className="input-group-text" id="basic-addon1 " onChange={this.changeField.bind(this)}>👤</span>
                                    <input className="input inputLogin" type="text"
                                           name="username"
                                           id="username"
                                           placeholder="Nombre de Usuario"
                                           value={this.state.username}
                                           onChange={this.changeField.bind(this)}
                                           />
                                </div>

                                <div className="input-group mb-4">
                                    <span className="input-group-text" id="basic-addon1 tarjeta_login">🔒</span>
                                    <input className="input inputLogin" type="password"
                                           name="password"
                                           id="password"
                                           placeholder="Contraseña"
                                           value={this.state.password}
                                           onChange={this.changeField.bind(this)}/>

                                </div>
                                <div className="d-grid gap-4">

                                    <button className="btn btn-primary" type="button" onClick={this.iniciarSesion.bind(this)}>Iniciar sesión


                                    </button>

                                    <div className="card-footer">
                                     {/* <Link to='/register'>*/}
                                            <button type="button" className="btn btn-primary">Registrarse</button>
                                     {/*   </Link>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export default Login;