import web3 from './web3';
import CharityCampaign from './build/Charity.json';

//pre-configured instance for our contract
const charity = new web3.eth.Contract(
  JSON.parse(CharityCampaign.interface),
  '0x325e4d5b4e397afca1cb4b50ad5ed3e947dacb6c'
);

export const charity2 = new web3.eth.Contract(
  JSON.parse(CharityCampaign.interface),
  '0xc1b60884e0560237795bcf7195174f42e645b164'
);

export const charity3 = new web3.eth.Contract(
  JSON.parse(CharityCampaign.interface),
  '0x4bc192d880f15f21fa1bad46e884a336eaff68b2'
);

export default charity