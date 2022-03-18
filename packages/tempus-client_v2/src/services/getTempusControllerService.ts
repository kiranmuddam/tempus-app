import { Contract } from 'ethers';
import { JsonRpcProvider, JsonRpcSigner } from '@ethersproject/providers';
import { Chain, getDefaultProvider } from 'tempus-core-services';
import TempusControllerABI from '../abi/TempusController.json';
import { getChainConfig } from '../utils/getConfig';
import TempusControllerService from './TempusControllerService';
import getTempusAMMService from './getTempusAMMService';

let tempusControllerServices = new Map<Chain, TempusControllerService>();
const getTempusControllerService = (
  chain: Chain,
  signerOrProvider?: JsonRpcSigner | JsonRpcProvider,
): TempusControllerService => {
  if (!tempusControllerServices.get(chain)) {
    const tempusControllerService = new TempusControllerService();
    tempusControllerService.init({
      Contract: Contract,
      address: getChainConfig(chain).tempusControllerContract,
      abi: TempusControllerABI,
      signerOrProvider: getDefaultProvider(chain, getChainConfig),
      tempusAMMService: getTempusAMMService(chain),
      chain,
    });
    tempusControllerServices.set(chain, tempusControllerService);
  }

  const tempusControllerService = tempusControllerServices.get(chain);
  if (!tempusControllerService) {
    throw new Error(`Failed to get TempusControllerService for ${chain} chain!`);
  }

  if (signerOrProvider) {
    tempusControllerService.init({
      Contract: Contract,
      address: getChainConfig(chain).tempusControllerContract,
      abi: TempusControllerABI,
      signerOrProvider: signerOrProvider,
      tempusAMMService: getTempusAMMService(chain, signerOrProvider),
      chain,
    });
  }

  return tempusControllerService;
};

export default getTempusControllerService;
