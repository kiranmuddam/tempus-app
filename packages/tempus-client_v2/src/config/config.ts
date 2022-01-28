import { Config } from '../interfaces/Config';

const ETHEREUM_MAINNET_ALCHEMY_KEY = process.env.REACT_APP_MAINNET_ALCHEMY_KEY || '';

const config: Config = {
  ethereum: {
    tempusPools: [
      {
        address: '0x6320E6844EEEa57343d5Ca47D3166822Ec78b116',
        poolId: '0x7004797ad44897f90401609c075e2f082be9d8be000200000000000000000000',
        ammAddress: '0x7004797ad44897f90401609C075E2F082be9D8Be',
        principalsAddress: '0x5A5cBa78Ae5ebd7142D0B8C796565388BA4B5732',
        yieldsAddress: '0x1f436309fBfB405192Acdc80d5C284De45e520EB',
        yieldBearingTokenAddress: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
        backingTokenAddress: '0x0000000000000000000000000000000000000000',
        startDate: 1639157275000,
        maturityDate: 1648742400000,
        protocol: 'lido',
        protocolDisplayName: 'Lido',
        backingToken: 'ETH',
        yieldBearingToken: 'stETH',
        spotPrice: '1',
        decimalsForUI: 4,
        showEstimatesInBackingToken: false,
        tokenPrecision: {
          backingToken: 18,
          lpTokens: 18,
          principals: 18,
          yieldBearingToken: 18,
          yields: 18,
        },
      },
      {
        address: '0x0697B0a2cBb1F947f51a9845b715E9eAb3f89B4F',
        poolId: '0x200e41be620928351f98da8031baeb7bd401a129000200000000000000000001',
        ammAddress: '0x200e41BE620928351F98Da8031BAEB7BD401a129',
        principalsAddress: '0x2C4AC125044e853F0f6d66b95365CBBa204fFCFD',
        yieldsAddress: '0xfFaCF0b02851e440FA207Ea2f9AfDF7FfE0bE095',
        yieldBearingTokenAddress: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
        backingTokenAddress: '0x0000000000000000000000000000000000000000',
        startDate: 1639158404000,
        maturityDate: 1661875200000,
        protocol: 'lido',
        protocolDisplayName: 'Lido',
        backingToken: 'ETH',
        yieldBearingToken: 'stETH',
        spotPrice: '1',
        decimalsForUI: 4,
        showEstimatesInBackingToken: false,
        tokenPrecision: {
          backingToken: 18,
          lpTokens: 18,
          principals: 18,
          yieldBearingToken: 18,
          yields: 18,
        },
      },
      {
        address: '0xc58b8DD0075f7ae7B1CF54a56F899D8b25a7712E',
        poolId: '0x30002861577da4ea6aa23966964172ad75dca9c7000200000000000000000003',
        ammAddress: '0x30002861577Da4EA6aA23966964172Ad75DCa9C7',
        principalsAddress: '0xBaF9434C102000F3f80BBE3c4b89018fAc43EB76',
        yieldsAddress: '0x2a7b99156256Bd6A75B92D5073C53C0ee574a9f6',
        yieldBearingTokenAddress: '0x016bf078ABcaCB987f0589a6d3BEAdD4316922B0',
        backingTokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        startDate: 1642505820000,
        maturityDate: 1656057600000,
        protocol: 'rari',
        protocolDisplayName: 'Rari Capital',
        backingToken: 'USDC',
        yieldBearingToken: 'RSPT',
        spotPrice: '1',
        decimalsForUI: 4,
        showEstimatesInBackingToken: true,
        tokenPrecision: {
          backingToken: 6,
          lpTokens: 18,
          principals: 6,
          yieldBearingToken: 18,
          yields: 6,
        },
      },
    ],
    statisticsContract: '0xf7247e16d6cD0A64d0C210f150fD356AcF26E89C',
    tempusControllerContract: '0xdB5fD0678eED82246b599da6BC36B56157E4beD8',
    vaultContract: '0x6f419298Ad53f82BA8dFFa9B34F9C7888b43BB13',
    lidoOracle: '0x442af784a788a5bd6f42a01ebe9f287a871243fb',
    networkUrl: `https://eth-mainnet.alchemyapi.io/v2/${ETHEREUM_MAINNET_ALCHEMY_KEY}`,
    networkName: 'homestead',
    alchemyKey: ETHEREUM_MAINNET_ALCHEMY_KEY,
    chainId: 1,
  },
  fantom: {
    tempusPools: [
      {
        address: '0x53F4B5d3Aa90070dfF7f0Fbc0434BeDe22CBa6DD',
        poolId: '0x4093cc64326a2a353c9ceeff35a3d66b6cf3ae11000200000000000000000000',
        ammAddress: '0x4093cC64326a2a353c9CeefF35A3D66b6CF3Ae11',
        principalsAddress: '0x719DeEA8712394EfE337499C935e079Bce6b7b49',
        yieldsAddress: '0x5c29A8C547909F12d0e07fE8AF493Fd57F814668',
        yieldBearingTokenAddress: '0x637eC617c86D24E421328e6CAEa1d92114892439',
        backingTokenAddress: '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e',
        startDate: 1643105262000,
        maturityDate: 1650873600000,
        protocol: 'yearn',
        protocolDisplayName: 'Yearn',
        backingToken: 'DAI',
        yieldBearingToken: 'yvDAI',
        spotPrice: '2500',
        decimalsForUI: 2,
        showEstimatesInBackingToken: true,
        tokenPrecision: {
          backingToken: 18,
          lpTokens: 18,
          principals: 18,
          yieldBearingToken: 18,
          yields: 18,
        },
      },
    ],
    statisticsContract: '0x7008d1f94088c8AA012B4F370A4fe672ad592Ee3',
    tempusControllerContract: '0xdDcAC414190e0deCCD381d141449E40776d888C4',
    vaultContract: '0x94d380bf540b6084d0c4828893ab27e273fba3d2',
    lidoOracle: '', // We need to set if we want to add Lido pools for Fantom chain
    networkUrl: `https://rpc.ftm.tools/`,
    networkName: 'fantom-mainnet',
    alchemyKey: '', // We don't need alchemy for Fantom chain
    chainId: 250,
  },
};

export default config;
