import React, { Component } from 'react';
import charity, {charity2, charity3} from '../../ethereum/factory';
import MessageList3 from './MessageList3';
// import web3 from '../../ethereum/web3';
import './MessageListContainer.css';

export default class MessageListContainer extends Component {
  state = {
    loading: false,
    errorMessage: '',
    messageList: []
}

componentDidMount = async event => {
  const charityCount = await charity3.methods.charityCount().call();
  const messageRequests = await Promise.all(
    Array(parseInt(charityCount, 0)).fill().map((element, index) => {
      return charity3.methods.donators(index).call()
    }),
  );
  this.setState({
    messageList: messageRequests
  })
}

renderMessages = () => {
  return this.state.messageList.map((donation, index) => {
    return <MessageList3
    key={index}
    donation={donation}
    />
  })
}

  render() {
    return (
<div className='message-flex'>
{ this.renderMessages() }
</div>
    )
  }
}
