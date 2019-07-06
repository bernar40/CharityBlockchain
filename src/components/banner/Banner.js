import React, { Component } from 'react';
import DonateForm from '../form/DonateForm';
import DonateForm2 from '../form/DonateForm2';
import DonateForm3 from '../form/DonateForm3';
import charity, { charity2, charity3 } from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import './Banner.css';
import '../../App.css';


export default class Banner extends Component {
  state={ 
    modalOpen: false,
    balance: '',
    donatorsCount: '',
    charityCount: '',
   }

   componentDidMount = async event => {
    const summary = await charity.methods.getSummary().call();
      this.setState({
        balance: summary[0],
        donatorsCount: summary[1],
        charityCount: summary[2]
      })
      const summary2 = await charity2.methods.getSummary().call();
      this.setState({
        balance2: web3.utils.fromWei(summary2[0], 'ether'),
        donatorsCount2: summary2[1],
        charityCount2: summary2[2]
      })
      const summary3 = await charity3.methods.getSummary().call();
      this.setState({
        balance3: web3.utils.fromWei(summary3[0], 'ether'),
        donatorsCount3: summary3[1],
        charityCount3: summary3[2]
      })
      // console.log(summary);
  }

  clickOpenModal = () => {
    window.scroll(0, 0)
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }
  clickOpenModal2 = () => {
  window.scroll(0, 0)
  this.setState({
    modalOpen2: !this.state.modalOpen
  })
  }
  clickOpenModal3 = () => {
  window.scroll(0, 0)
  this.setState({
    modalOpen3: !this.state.modalOpen
  })
  }

  render() {
     return (
<div>
  <div className='banner-background'>
    <DonateForm clickOpen={this.state.modalOpen} onClose={this.clickOpenModal} />
    <DonateForm2 clickOpen={this.state.modalOpen2} onClose={this.clickOpenModal2} />
    <DonateForm3 clickOpen={this.state.modalOpen3} onClose={this.clickOpenModal3} />
    <div className='main-banner'>
      <div className='squeeze'>
        <div className='banner-flex'>
          <div className='column__one-third'>
            <div className='banner-header'>Ajude projetos de caridade!</div>
            <div className='banner-caption__description-amount'>Até o momento um total de { this.state.donatorsCount } pessoa(s) já ajudaram o Projeto Rua, doando um total de
              <span> { web3.utils.fromWei(this.state.balance, 'ether') } ETH</span>!<br /><br />
              Até o momento um total de { this.state.donatorsCount2 } pessoa(s) já ajudaram a ONG Sonhar Acordado, doando um total de
              <span> { this.state.balance2 } ETH</span>!<br /><br />
              Até o momento um total de { this.state.donatorsCount3 } pessoa(s) já ajudaram o G.A.R.R.A, doando um total de
              <span> { this.state.balance3 } ETH</span>!</div>
            <button className='donate-button__banner' onClick= { () => this.clickOpenModal() } >Contribua
            </button>
            <button className='donate-button__banner2' onClick= { () => this.clickOpenModal2() } >Contribua
            </button>
            <button className='donate-button__banner3' onClick= { () => this.clickOpenModal3() } >Contribua
            </button>
            <button className='info-button__banner' onClick={ ()=> window.scroll(0, 800) } >Projetos</button>
            <button className='donners-button__banner' onClick={ ()=> window.scroll(0, 1700) } >Doadores</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
  }
}
