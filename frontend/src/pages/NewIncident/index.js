import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  if (!localStorage.getItem('ongId')) {
    history.push('/');
  }

  async function handlerSubmit(e) {
    e.preventDefault();
    try {
      await api.post(
        'incidents',
        { title, description, value },
        { headers: { Authorization: localStorage.getItem('ongId') } }
      );

      history.push('/profile');
    } catch (err) {
      alert('ops! algo deu errado caso não criado');
    }
  }

  return (
    <Container>
      <Content>
        <section>
          <img src={logoImg} alt="Be the Hero logo" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para
            resolvê-lo.
          </p>
        </section>

        <form onSubmit={handlerSubmit}>
          <input
            placeholder="Titulo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </Content>
      <Link to="/profile">
        <FiArrowLeft size={16} color="#E02041" />
        Voltar
      </Link>
    </Container>
  );
}
