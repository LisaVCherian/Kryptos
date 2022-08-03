// https://eth-rinkeby.alchemyapi.io/v2/I2ZMB0VkXkNv78c5iSUqjwAuCxlq5_Gm
// https://eth-goerli.g.alchemy.com/v2/VhIXjNgcHTQWi_4iZqVd9UlriPD_8TFM

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/VhIXjNgcHTQWi_4iZqVd9UlriPD_8TFM',
      accounts: ['a01fdc8d8e9b1f6c46e714f824aaf2856b979af821fcd92c6c20bffb094cf991'],
    }
  }
}