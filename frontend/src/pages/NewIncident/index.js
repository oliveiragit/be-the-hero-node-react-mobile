import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';


import './styles.css';
import logoImg from '../../assets/logo.svg';


export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt= "Be the Hero logo" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encotrar um herói para resolvê-lo.</p>
                    <Link to="/profile" className="navegation-link">
                        <FiArrowLeft size={16} color="#E02041" />
                       Voltar
                    </Link>
                </section>
                <form>
                    <input placeholder="Titulo" />
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor em reais" />
                    <button className="button" type="submit">
                        Cadastrar
                    </button>

                </form>
            </div>
        </div>
    );
}
