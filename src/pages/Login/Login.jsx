import {useState } from 'react';
import {useNavigate } from 'react-router-dom';
import './Login.css';
import {loginMedico } from "../../api/login";
// Importando o CSS do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Importando o JavaScript do Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Importando o CSS dos ícones
import 'bootstrap-icons/font/bootstrap-icons.css';
/* Import imagens */
import logo from "../../assets/images/logo.png";
import card from "../../assets/images/card.png";

function Login() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const result = await loginMedico({ nome, senha });
      alert('Login realizado com sucesso!');
      navigate('/filtro');
    } catch (error) {
      alert('Credenciais inválidas');
    }
  }

  return (
    <div className='page-login'>
      <main className='login-main'>
        <img src={logo} alt="logo da empresa" className='logo'/>
        <div className="login-container">
          <form className='align-form' onSubmit={handleLogin}>
            <h4 className='page-title'>Acesse nossa Plataforma</h4>
            <div className='conteiner-input'>
              <span className='name-input'>Email</span>
              <input
                className='style-inputs espacamento'
                type="email"
                placeholder="Insira seu email"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
            <div className='conteiner-input'>
              <span className='name-input'>Senha</span>
              <input
                className='style-inputs'
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>
            <button className='button-login' type="submit">Acessar</button>
            <div className='link-register'>
              <span className='description-link'>Não possui conta?&nbsp;</span>
              <a className='button-link' href="/cadastro">Clique Aqui!!!</a>
            </div>
          </form>
        </div>
      </main>
      <img className='imagemteste' src={card} alt="card" />
    </div>
  );
}

export default Login;
