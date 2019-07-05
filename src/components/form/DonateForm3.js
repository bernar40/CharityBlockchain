import React, { Component } from 'react';
import charity, {charity2, charity3} from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import './DonateForm.css';
import PeriodLoader from '../common/PeriodLoader';

export default class DonateForm extends Component {
  state = {
      name: '',
      description: '',
      value: '',
      loading: false,
      errorMessage: ''
  }

  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  }


  onDonateMessageSend = async event => {
    event.preventDefault();
    const { description, name, value } = this.state;
    if(this.state.value === '' || this.state.value === 0) {
      return this.setState({ errorMessage: "Você não botou nenhum valor!!"});
     }
     if(this.state.value === '' && this.state.description === '' && this.state.name === '') {
      return this.setState({ errorMessage: "Campos vazios"});
     }
  try {
    const accounts = await web3.eth.getAccounts();
    this.setState({ 
      loading: true,
      errorMessage: ''
    });
    await charity3.methods.contributeMessage( description, name, web3.utils.toWei( value, 'ether' ) )
    .send({ 
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether')
     })
  } catch(err) {
    console.log(err.message);
    if(err.message.replace(/ .*/,'') === 'while') {
      return this.setState({ errorMessage: "Apenas números são permitidos", value: '',loading: false});
    } else if(err.message.replace(/ .*/,'') === 'Returned') {
      return this.setState({ errorMessage: "Oops Você rejeitou a transação!", value: '', loading: false});
    }
    if(err.message.replace(/ .*/,'') === 'No') {
      return this.setState({ errorMessage: "Oops! Você provavelmente não está logado no MetaMask", value: '', loading: false});
    }
  }
  window.location.reload();
  this.setState({ loading: false, value: '', name: '', description: '' });
  }

  render() {
    if(!this.props.clickOpen) {
      return null;
    }

    return (
<div className='modal-background'>
  <div className='form-background'>
  { this.state.loading===true ? <div className='form-header'>Realizando a transação....</div> : <div className='form-header'>Obrigado pela ajuda! <br/> ;)</div> }

    <div onClick={ (e)=> {this.onClose(e)} } className='modal-close'>x</div>
    <div className={ this.state.loading===true ? 'loading-form' : 'hide'}>
        <PeriodLoader />
    </div>
    <div className={ this.state.loading===true ? 'hide' : 'flex-forms' }>
      <div className='form-align'>
      </div>
      {/* <hr className='horizontal-line' /> */}
      <div className='form-caption'>Nome</div>
      <input 
      type={ this.state.errorMessage === "Empty fields" ? 'text' : '' }
      maxLength="24" 
      value={ this.state.name } 
      onChange={ event=> this.setState({ name: event.target.value })} >
      </input>
      <div className='form-caption'>Mensagem</div>
      <input 
      type={ this.state.errorMessage === "Empty fields" ? 'text' : '' }
      maxLength="180" 
      value={ this.state.description } 
      onChange={ event=> this.setState({ description: event.target.value })} >
      </input>
      <div className='form-caption'>Valor da doação em ETH</div>
      <input
      type={ this.state.errorMessage ? 'text' : '' }
       value={ this.state.value } 
       onChange={ event=> this.setState({ value: event.target.value })} >
      </input>
      <div className={this.state.errorMessage ? 'error-message' : 'empty'}>{ this.state.errorMessage }</div>
      <button type='button' className='donate-button' onClick={ this.onDonateMessageSend }>Donate</button>
    </div>
  </div>
</div>
    )
  }
}
