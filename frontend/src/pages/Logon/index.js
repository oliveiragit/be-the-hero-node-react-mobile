import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { Container } from './styles';

import api from '../../services/api';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data);

      history.push('profile');
    } catch (err) {
      alert('Algo deu errado, tente novamente mais tarde');
    }
  }
  return (
    <Container>
      <section className="form">
        <img src={logoImg} alt="Be the Hero logo" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>
          <input
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button className="button" type="submit">
            {' '}
            Entrar{' '}
          </button>

          <Link to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="heroes img" />
    </Container>
  );
}
