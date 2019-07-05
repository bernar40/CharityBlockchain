import React, { Component } from 'react';
import NavigationBar from './components/navigation/NavigationBar';
import Banner from './components/banner/Banner';
import Layout from './components/layout/Layout';
import MessageListContainer from './components/messages/MessageListContainer';
import MessageListContainer2 from './components/messages/MessageListContainer2';
import MessageListContainer3 from './components/messages/MessageListContainer3';
import SubHeader from './components/subHeader/SubHeader';
import './App.css';

const event1 = require('./images/projetoruas.png');
const event2 = require('./images/pascoa.png');
const event3 = require('./images/garra.png');

class App extends Component {
	render() {
		return (
			<Layout>
				<NavigationBar />
				<Banner />
				<div className="main">
					<div className="squeeze">
						<div className="sub-container-flex">
							<SubHeader padding="extra-padding" title="Fundo para Abrigos Para Moradores de Rua - ONG Projeto Ruas" subContent={event1}/>
							<SubHeader title="Festa de Páscoa - ONG Sonhar Acordado" subContent={event2}/>
							<SubHeader title="Doação pra animais de rua - ONG Garra" subContent={event3}/>
						</div>
						<div className='sub-header__caption'>O Projeto RUAS trabalha para promover o bem estar e a cidadania da população em situação de rua com informação e estímulo por meio dos residentes dos bairros ao seu entorno.</div>
						<div className='sub-header__caption2'>A ONG Sonhar Acordado é uma organização internacional, sem fins lucrativos, que atua junto a instituições, orfanatos, casas de apoio e hospitais e que busca transformar a vida de crianças carentes por meio de uma relação de amizade com o jovem voluntário.</div>
						<div className='sub-header__caption3'>O G.A.R.R.A. já resgatou e reabilitou milhares de animais vítimas de maus tratos. Somos o único grupo do RJ que resgata animais de grandes portes e atualmente temos 20 cavalos, 120 cães e 70 gatos sob nossos cuidados. Ainda não somos uma ONG, somos apenas um pequeno grupo de amigas e as dificuldades que encontramos para manter o G.A.R.R.A. vivo são muitas!
Ajude-nos a continuar salvando vidas! </div>
						<div className="message-section-title">Doadores</div>
						<div className="message-flex">
							<MessageListContainer />
							<MessageListContainer2 />
							<MessageListContainer3 />
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

export default App;
