import React from 'react';
import './Global.css'
import './Sidebar.css'
import './Main.css'

function App() {
	return (
		<div id="app">
			<aside>
				<strong>Cadastrar</strong>
				<form>
					<div className="input-block">
						<label htmlFor="github_username">Usuário do github</label>
						<input type="text" name="github_username" id="github_username"/>
					</div>
					<div className="input-block">
						<label htmlFor="techs">Tecnologias</label>
						<input type="text" name="techs" id="techs" />
					</div>
					<div class="input-group">
						<div className="input-block">
							<label htmlFor="latitude">Latitude</label>
							<input type="text" name="latitude" id="latitude" />
						</div>
						<div className="input-block">
							<label htmlFor="longitude">Longitude</label>
							<input type="text" name="longitude" id="longitude" />
						</div>
					</div>
				</form>
			</aside>
			<main>
				<ul>
					<li className="dev-item">
						<header>
							<img />
							<div className="user-info">
								<strong></strong>
								<span></span>
							</div>
						</header>
						<p></p>
						<a href="https://gtihub.com/">Acessar perfil no GitHub</a>
					</li>
					<li className="dev-item">
						<header>
							<img />
							<div className="user-info">
								<strong></strong>
								<span></span>
							</div>
						</header>
						<p></p>
						<a href="https://gtihub.com/">Acessar perfil no GitHub</a>
					</li>
					<li className="dev-item">
						<header>
							<img />
							<div className="user-info">
								<strong></strong>
								<span></span>
							</div>
						</header>
						<p></p>
						<a href="https://gtihub.com/">Acessar perfil no GitHub</a>
					</li>
					<li className="dev-item">
						<header>
							<img />
							<div className="user-info">
								<strong></strong>
								<span></span>
							</div>
						</header>
						<p></p>
						<a href="https://gtihub.com/">Acessar perfil no GitHub</a>
					</li>
					<li className="dev-item">
						<header>
							<img />
							<div className="user-info">
								<strong></strong>
								<span></span>
							</div>
						</header>
						<p></p>
						<a href="https://gtihub.com/">Acessar perfil no GitHub</a>
					</li>
				</ul>
			</main>
		</div>
	);
}

export default App;
