import { TempusPool } from './TempusPool';

export interface ChainConfig {
  tempusPools: TempusPool[];
  statisticsContract: string;
  tempusControllerContract: string;
  lidoOracle: string;
  vaultContract: string;
  networkUrl: string;
  networkName: string;
  alchemyKey: string;
  chainId: number;
  nativeToken: 'ETH' | 'FTM';
}

export type Config = {
  ethereum: ChainConfig;
  fantom: ChainConfig;
};
