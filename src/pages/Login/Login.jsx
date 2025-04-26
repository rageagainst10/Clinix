import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from "../../assets/images/logo.png";
import { loginMedico } from "../../api/login";

function Login() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const result = await loginMedico({ nome, senha });
      alert('Login realizado com sucesso!');
      navigate('/filtro');  // Redireciona para a página de filtro após login
    } catch (error) {
      alert('Credenciais inválidas');  // Exibe erro se falhar
    }
  }

  return (
    <div className='page-login'>
      <header className='login-header'>
        <img src={logo} alt="logo da empresa" className='logo' />
      </header>
      <main className='login-main'>
        <div className="login-container">
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <button type="submit">Entrar</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Login;
