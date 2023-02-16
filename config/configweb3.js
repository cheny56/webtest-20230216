const Web3 = require("web3");
  // const infuraurl = "http://3.39.197.118:33957"; // 'https://mainnet.infura.io/v3/cd35bc...'
  // const infuraurl = "http://3.39.197.118:33947"; // 'https://mainnet.infura.io/v3/cd35bc...'
  //  const infuraurl = "http://3.39.197.118:33967"; // 'https://mainnet.infura.io/v3/cd35bc...'
//  const infuraurl = "http://3.39.197.118:8551"; // 'https://mainnet.infura.io/v3/cd35bc...'
const PORTNUM = 33947
const infuraurl = `http://localhost:${PORTNUM}`; // 'https://mainnet.infura.io/v3/cd35bc...'
//	const infuraurl = "http://localhost:33957"; // 'https://mainnet.infura.io/v3/cd35bc...'
  //  const infuraurl = "http://localhost:33967"; // 'https://mainnet.infura.io/v3/cd35bc...'
//  const infuraurl = "http://localhost:8551"; // 'https://mainnet.infura.io/v3/cd35bc...'


const NETCLASS = "mainnet";
const nettype = "BSC_MAINNET";
  const NETTYPE = "BSC_MAINNET";
  const BASE_CURRENCY = "BNB";
  const STAKE_CURRENCY = "USDT";
  const web3 = new Web3(new Web3.providers.HttpProvider(infuraurl));
  const LOGGER = console.log
	LOGGER( `http port number:`,PORTNUM )
  web3.eth.getBlockNumber().then(resp=>{ 
		LOGGER ( `blocknum:`,resp )
	});
web3.eth.getChainId().then(resp=>{
		LOGGER( `chain id : `, resp ) 
	})
web3.eth.getBalance ( '0x3bff4c82eec49443c5dacc9c8c373e5de1105431' ).then(resp=>{
	LOGGER( 'balance : ' , resp ) 
})
web3.eth.getTransaction ( '0x9727fc6949bdc77d5bc7b05a31e1841e9f14df004b75fa16bb846d75b4c4061f' ).then(resp=>{
	LOGGER( `deploy tx: `, resp )
})

  module.exports = {
    web3,
    //  netkind,
    // nettype,
    NETTYPE,
    BASE_CURRENCY,
    STAKE_CURRENCY,
  };

