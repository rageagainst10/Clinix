import React from "react";
import './Register.css';
// Importando o CSS do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Importando o JavaScript do Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Importando o CSS dos ícones
import 'bootstrap-icons/font/bootstrap-icons.css';
/* Import imagens */
import logo from "../../assets/images/logo.png";
/* Import components*/
import CustomInput from "../../components/CustomInput/CustomInput";


function Register (){
    return(
        <main>
            <form className='align-form' onSubmit={""}>
                <img src={logo} alt="logo da empresa"/>
                <h4 className='page-title'>Crie sua Conta</h4>
                <div className="gap">
                    <CustomInput
                        label='Nome'
                        name='name'
                        value={''}
                        type='text'
                        onChange={''}
                        placeholder="Insira seu nome"
                        required={true}
                    />
                    <CustomInput
                        label='Email'   
                        name='email'
                        value={''}
                        type='email'
                        onChange={''}
                        placeholder="Insira seu email"
                        required={true}
                    />
                    <CustomInput
                        label='Senha'
                        name='senha1'
                        value={''}
                        type='password'
                        onChange={''}
                        placeholder="Insira sua senha"
                        required={true}
                    />
                    <CustomInput
                        label='Confirmar senha'
                        name='senha2'
                        value={''}
                        type='password'
                        onChange={''}
                        placeholder="Insira sua senha"
                        required={true}
                    />
                </div>
                <button className='button-login' type="submit">Acessar</button>
                <div className='link-register'>
                <span className='description-link'>Ja possui conta?&nbsp;</span>
                <a className='button-link' href="/">Volte Aqui!!!</a>
                </div>
            </form>
        </main>
    )
}

export default Register