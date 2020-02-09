import React, { useState, useEffect } from 'react';
import './Dev.css';
import api from '../../services/api';

export default function Dev(props) {

    const [devs, setDevs] = useState([])

    useEffect(() => {
        async function loadDevs() {
            const response = await api.get('/devs')
            setDevs(response.data)
        }
        loadDevs()
    }, [])

    return (
        <>
            {devs.map(dev => (
                <li className="dev-item" key={dev._id}>
                    <header>
                        <img src={dev.avatar_url} alt={dev.name}/>
                        <div className="user-info">
                            <strong>{dev.name}</strong>
                            <span>{dev.techs}</span>
                        </div>
                    </header>
                    <p></p>
                    <a href={`https://github.com/${dev.github_username}`} target="_blank" rel="noopener noreferrer">Acessar perfil no GitHub</a>
                </li>
            ))}
        </>
    )
}