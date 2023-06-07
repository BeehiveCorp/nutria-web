import { useContext, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { StoreContext } from '../../contexts/StoreContext';

function Dashboard() {
  const { store } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(store);
    if (store === null) {
      navigate('/');
    }
  });

  return <div>dashboard</div>;
}

export default Dashboard;
