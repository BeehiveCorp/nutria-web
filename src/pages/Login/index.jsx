import { useContext, useState } from 'react';

import { Link } from 'react-router-dom';

import { StoreContext } from '../../contexts/StoreContext';

import logo from '../../assets/Horizontal.svg';

import './styles.css';

function Login() {
  const { setUser } = useContext(StoreContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <div className="container content d-flex align-items-center justify-content-center">
        <div className="form">
          <img src={logo} alt="" srcSet="" className="logo" />

          <h2 className="title">Login</h2>

          <form>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="E-mail"
                aria-label="E-mail"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Senha"
                aria-label="Senha"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </form>

          <Link className="link" to="/register">
            Cadastrar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
