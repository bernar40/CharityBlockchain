import web3 from './web3';
import CharityCampaign from './build/Charity.json';

//pre-configured instance for our contract
const instance = new web3.eth.Contract(
  JSON.parse(CharityCampaign.interface),
  '0x325e4d5b4e397afca1cb4b50ad5ed3e947dacb6c'
);

export default instance;