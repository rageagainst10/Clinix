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

function Register (){
    return(
        <main>
            <form className='align-form' onSubmit={""}>
            <img src={logo} alt="logo da empresa"/>
            <h4 className='page-title'>Crie sua Conta</h4>
                <div className='conteiner-input'>
                    <span className='name-input'>Nome</span>
                    <input
                        className='style-inputs espacamento'
                        type="name"
                        placeholder="Insira seu nome"
                    />
                </div>
                <div className='conteiner-input'>
                    <span className='name-input'>Email</span>
                    <input
                        className='style-inputs espacamento'
                        type="email"
                        placeholder="Insira seu email"
                    />
                </div>
                <div className='conteiner-input'>
                    <span className='name-input'>Senha</span>
                    <input
                        className='style-inputs espacamento'
                        type="password"
                        placeholder="Digite sua senha"
                    />
                </div>
                <div className='conteiner-input'>
                    <span className='name-input'>Confirme sua senha</span>
                    <input
                        className='style-inputs'
                        type="password"
                        placeholder="Digite sua senha novamente"
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