import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api'

import './styles.css';
import logoImg from '../../assets/logo.svg';


export default  function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city , setCity] = useState('');
    const [uf, setUf] = useState('');
   
    const history = useHistory();
    async function  handleRegister(e){
        e.preventDefault();
        try{
            const result = await api.post('ongs', {name, email, whatsapp, city, uf} );
            const id = result.data.id;
    
            alert(`Seu ID é ${id} não o perca!`);
            history.push('/');

        }catch (e){
            alert("Algo de errado");
        }
}


    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt= "Be the Hero logo" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude as pessoas a encontrar os casos da sua ONG.</p>
                    <Link to="/" className="navegation-link">
                        <FiArrowLeft size={16} color="#E02041" />
                       Voltar
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG"
                        value={name}
                        onChange = {e => setName(e.target.value)} />

                    <input type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange = {e => setEmail(e.target.value)} />

                    <input 
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange = {e => setWhatsapp(e.target.value)} />

                    
                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={city}
                            onChange = {e => setCity(e.target.value)} />

                        <input 
                            placeholder="UF" style={{ width: 80 }}
                            value={uf}
                            onChange = {e => setUf(e.target.value)}/>
                    </div>
                    <button className="button" type="submit">
                        Cadastrar
                    </button>

                </form>
            </div>
        </div>
    );
}