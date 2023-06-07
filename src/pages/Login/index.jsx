import { useState } from 'react';

// import { Link } from 'react-router-dom';

// import { StoreContext } from '../../contexts/StoreContext';
import api from '../../services/api';
import logo from '../../assets/Horizontal.svg';

import './styles.css';

function Login() {
  // const { setUser } = useContext(StoreContext);

  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  const [storeId, setStoreId] = useState();
  const [products, setProducts] = useState([]);

  const onSubmit = async (event) => {
    event.preventDefault();

    const { data } = await api.get(`/products/store?id=${storeId}`);

    setProducts(data);

    // setUser(data);
  };

  return (
    <div>
      <div className="container content d-flex align-items-center justify-content-center">
        <div className="form">
          <img src={logo} alt="" srcSet="" className="logo" />

          <h2 className="title">Consulta de produtos</h2>

          <form onSubmit={onSubmit}>
            {/* <div className="input-group mb-3">
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
            </div> */}

            {/* <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Id da loja"
                aria-label="Id da loja"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div> */}

            <div className="input-group mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Id da loja"
                aria-label="Id da loja"
                value={storeId}
                onChange={(e) => {
                  setStoreId(e.target.value);
                }}
              />
            </div>

            <input
              className="btn btn-primary w-100"
              type="submit"
              value="Checar produtos"
            ></input>
          </form>

          {/* <div className="mt-3">
            <Link className="link" to="/register">
              Cadastrar
            </Link>
          </div> */}

          {products.length > 0 && (
            <div className="mt-3">
              {products.map((product) => (
                <div key={product.id} className="product-card p-3">
                  <p>Id: #{product.id}</p>
                  <p>Nome: {product.name}</p>
                  <p>Data de validade: {product.validate_date}</p>
                  <p>Preço: {product.price}</p>
                  <p>Estoque: {product.stock}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
