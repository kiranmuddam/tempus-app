import { Chain, Ticker } from '../interfaces';

const chainToPrettyNameMap = {
  ethereum: 'Ethereum',
  fantom: 'Fantom',
  'ethereum-fork': 'Ethereum Fork',
  'candle': 'Candle',
};

const chainToPrettyLongNameMap = {
  ethereum: 'Ethereum Mainnet',
  fantom: 'Fantom Opera',
  'ethereum-fork': 'Tempus Ethereum Fork',
  'candle': 'Candle Chain',
};

const chainToTickerMap = {
  ethereum: 'ETH',
  fantom: 'FANTOM',
  'ethereum-fork': 'ETH',
  candle: 'CNDL',
};

const chainNameToHexChainIdMap = {
  ethereum: '0x1',
  fantom: '0xfa',
  'ethereum-fork': '0x7a69',
  candle: '0x216',
};

const chainIdToChainNameMap = new Map<string, Chain>();
chainIdToChainNameMap.set('1', 'ethereum');
chainIdToChainNameMap.set('250', 'fantom');
chainIdToChainNameMap.set('31337', 'ethereum-fork');
chainIdToChainNameMap.set('534', 'candle');

export function prettifyChainName(chainName: Chain): string {
  return chainToPrettyNameMap[chainName];
}

export function prettifyChainNameLong(chainName: Chain): string {
  return chainToPrettyLongNameMap[chainName];
}

export function chainToTicker(chainName: Chain): Ticker {
  return chainToTickerMap[chainName] as Ticker;
}

export function chainNameToHexChainId(chainName: Chain): string {
  return chainNameToHexChainIdMap[chainName];
}

export function chainIdToChainName(chainId: string | number): Chain | undefined {
  return chainIdToChainNameMap.get(String(chainId));
}
