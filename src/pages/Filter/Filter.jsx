import React from "react";
import './Filter.css';
// Importando o CSS do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Importando o JavaScript do Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Importando o CSS dos ícones
import 'bootstrap-icons/font/bootstrap-icons.css';
/* Import imagens */
import logo from "../../assets/images/logo.png";

function Filter (){
    return(
        <div className="page-filter">
            <nav className="container-navbar">
                <img className="logo" src={logo} alt="logo da empresa"/>
                <button className="">Prontuario</button>
                <button>Registro de pacientes</button>
                <button>prescrição</button>
            </nav>
            <main>
                <header>
                    <h1>Page title</h1>
                </header>
                <div>
                    <section>
                        <h1>list</h1>
                    </section>
                    <section>
                        <h1>search</h1>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default Filter