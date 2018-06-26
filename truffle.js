/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

// module.exports = {
//   // See <http://truffleframework.com/docs/advanced/configuration>
//   // to customize your Truffle configuration!
// };

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545, //Match ganache port
      network_id: "*" //Match any network id (this is fine for Ganache) 
                      //but if it is main network or test network then an 
                      //Id must be defined must be something not already taken
    }
  }
};

//use truffle migrate as truffle dploy is outdated

//Follows output of the above command above
//bottom deployment of migration contract 
//call to function in the migrations contract that stores the state of the contract that has just been deployed
//deployment of marketplace contract
//call to function in the migrations contract that stores the state of the contract that has just been deployed
