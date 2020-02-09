import React, { useEffect, useState } from 'react';
import './Sidebar.css'
import api from '../../services/api';

export default function Sidebar() {

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        }, (error) => {
            console.log(error)
        },
            {
                timeout: 30000
            }
        )
    }, [])
    
    async function handleAddDev(e) {
        try {
            e.preventDefault();
            await api.post('/devs', {
                github_username,
                techs,
                latitude,
                longitude
            })
            setGithubUsername('')
            setTechs('')
        } catch (err) {
            throw new Error(err)
        }
    }

    return (
        <aside>
            <strong>Cadastrar</strong>
            <form onSubmit={e => handleAddDev(e)}>
                <div className="input-block">
                    <label htmlFor="github_username">Usuário do github</label>
                    <input type="text" name="github_username" id="github_username" onChange={e => setGithubUsername(e.target.value)} value={github_username} />
                </div>
                <div className="input-block">
                    <label htmlFor="techs">Tecnologias</label>
                    <input type="text" name="techs" id="techs" onChange={e => setTechs(e.target.value)} value={techs} />
                </div>
                <div className="input-group">
                    <div className="input-block">
                        <label htmlFor="latitude">Latitude</label>
                        <input type="number" name="latitude" id="latitude" onChange={e => setLatitude(e.target.value)} value={latitude} />
                    </div>
                    <div className="input-block">
                        <label htmlFor="longitude">Longitude</label>
                        <input type="number" name="longitude" id="longitude" onChange={e => setLongitude(e.target.value)} value={longitude} />
                    </div>
                </div>
                <div className="input-block">
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </aside>
    )
}