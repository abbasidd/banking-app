export default () => ({
  nodeEnv: process.env.NODE_ENV || 'development',
  apiKey: process.env.API_KEY,
  web3RpcUrl: process.env.WEB3_RPC_URL,
  contractAddress: process.env.CONTRACT_ADDRESS,
  NFTMarketContractAddress:
    process.env.NFT_MARKET_CONTRACT_ADDRESS ||
    '0xc8EF68D365dD0E47263d5CDFA9C7544E79D5A372',
  databaseURI: process.env.DATABASE_URI,
  databaseName: process.env.DATABASE_NAME,
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET || 'JWT_SECRET',
  jwtRefreshSecret: process.env.JWT_SECRET_REFRESH || 'JWT_SECRET_REFRESH',
  jwtExpiry: process.env.JWT_EXPIRY || '1d',
  jwtExpiryRefresh: process.env.JWT_EXPIRY_REFRESH || '3d',
  landMarketAddress:
    process.env.LAND_MARKET_ADDRESS ||
    '0x69d59304dE664fC1E92315e873409e377be31E9d',
  blockNumber: process.env.BLOCK_NUMBER || 10000,
});
