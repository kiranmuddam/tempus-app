import Words from './words';

const en: { [word in Words]: string } = {
  tempus: 'Tempus',
  max: 'max',
  min: 'min',
  community: 'Community',
  settings: 'Settings',
  connectWallet: 'Connect Wallet',
  xxxPending: '{{count}} Pending...',
  selectWallet: 'Select Wallet',
  walletSelectorDisclaimer:
    'By connecting your wallet, you agree to be bound by the <a href="https://tempus.finance/terms-of-service" target="_blank">Tempus Terms of Service</a> and acknowledge that you have read and understand the <a href="https://tempus.finance/disclaimer" target="_blank">Tempus Protocol Disclaimer</a>.',
  metamaskConnected: 'MetaMask connected',
  changeNetworkRejected: 'Request to change network rejected by user',
  changeNetworkRejectedExplain: 'In order to use the app, please connect to a supported network',
  unsupportedNetwork: 'Unsupported wallet network',
  unsupportedNetworkExplain: 'We support Ethereum and Fantom networks only',
  walletConnectConnected: 'WalletConnect connected',
  errorConnectingWallet: 'Error connecting wallet',
  viewRecentTransactions: 'View recent transactions',
  walletOverview: 'Wallet overview',
  switchWallet: 'Switch Wallet',
  connectedWallet: 'Connected Wallet',
  viewOnXxx: 'View on {{name}}',
  pendingTransactions: 'Pending Transactions',
  transactionHistory: 'Transaction History',
  clear: 'clear',
  asset: 'Asset',
  assetName: 'Asset Name',
  protocol: 'Source',
  protocolName: 'Protocol Name',
  clearFilter: 'Clear Filter',
  apply: 'Apply',
  fixedApr: 'Fixed APR',
  lifeTimeApr: 'Lifetime APR',
  xxxApr: '{{protocol}} APR',
  aprRange: 'APR range',
  lpApr: 'Variable APR',
  fiat: 'Fiat',
  crypto: 'Crypto',
  pool: 'Pool',
  xxxOfPool: '{{share}} of the Pool',
  poolRatio: 'Pool Ratio (Capitals / Yields)',
  redemption: 'Redemption',
  earlyRedemption: 'Early Redemption',
  swap: 'Swap',
  tvl: 'TVL',
  totalValueLocked: 'Total Value Locked',
  manage: 'Manage',
  basic: 'Basic',
  basicSubTitle: 'Recommended option',
  advanced: 'Advanced',
  advancedSubTitle: 'For experienced users',
  deposit: 'Deposit',
  withdraw: 'Withdraw',
  mint: 'Mint',
  removeLiquidity: 'Remove Liquidity',
  provideLiquidity: 'Provide Liquidity',
  earlyRedeem: 'Early Redeem',
  operationDisabledByConfig:
    'Certain actions in relation to this Tempus pool are temporarily disabled due to intermittent unreliability of the underlying pool. Please bear with us while we investigate this issue.',
  askUsOnDiscord:
    'Have more questions? Ask us on Discord: <a href="https://discord.com/invite/6gauHECShr" target="_blank">https://discord.com/invite/6gauHECShr</a>',
  depositDisabledByConfig: 'Depositing is currently not available.',
  mintDisabledByConfig: 'Minting is currently not available.',
  depositDisabledNoLiquidity:
    'Depositing is currently disabled due to insufficient liquidity in the pool you have selected. Please try again later.',
  depositDisabledPoolMaturity: 'Deposit is not available because this pool has reached maturity.',
  depositDisabledNegative:
    'Deposit has temporarily disabled due to negative yield in the pool. Please check back soon.',
  withdrawDisabledNoLiquidity:
    'Withdrawing is currently disabled due to insufficient liquidity in the pool you have selected. Please try again later.',
  withdrawDisabledNoDeposit: 'Withdraw will be available once you have deposited into the pool.',
  withdrawDisabledNegative:
    'Withdrawal has temporarily disabled due to negative yield in the pool. Please check back soon.',
  mintDisabledPoolMaturity: 'Mint is not available because this pool has reached maturity.',
  swapDisabledNoLiquidity:
    'Swapping is currently disabled due to insufficient liquidity in the pool you have selected. Please try again later.',
  swapDisabledNoShares: 'Swap will be available once you have deposited into the pool.',
  swapDisabledPoolMaturity: 'Swap is not available because this pool has reached maturity.',
  provideLiquidityDisabledNoDeposit: 'Manual Liquidity Provision is not available until you have Deposited or Minted.',
  provideLiquidityDisabledNoPrincipals:
    'Manual Liquidity Provision is not available until you have purchased more Capitals.',
  provideLiquidityDisabledNoYields: 'Manual Liquidity Provision is not available until you have purchased more Yields.',
  provideLiquidityDisabledPoolMaturity:
    'Manual Liquidity Provision is not available because this pool has reached maturity.',
  removeLiquidityDisabledNoDeposit:
    'Remove Liquidity will be available once you have staked your tokens (deposited into the TempusAMM).',
  removeLiquidityDisabledNoLpTokens: 'Remove Liquidity will be available once you have added liquidity.',
  removeLiquidityDisabledPoolMaturity:
    "Remove Liquidity is not available because this pool has reached maturity. Please use 'Withdraw'.",
  earlyRedemptionDisabledNoLiquidity:
    'Early redemption is currently disabled due to insufficient liquidity in the pool you have selected. Please try again later.',
  availableToDeposit: 'Available to Deposit',
  availableToDepositXxx: 'Available to Deposit {{amount}}',
  volume: 'Volume',
  fees: 'Fees',
  term: 'Term',
  startDate: 'Start Date',
  maturity: 'Maturity',
  maturityXxx: 'Maturity {{date}}',
  timeLeft: 'Time Remaining',
  currentPosition: 'Current Position',
  principalsAndYields: 'Capitals & Yields',
  principals: 'Capitals',
  xxxPrincipals: '{{token}} Capitals',
  yields: 'Yields',
  xxxYields: '{{token}} Yields',
  lpTokens: 'LP Tokens',
  xxxLpTokens: '{{token}} LP Tokens',
  staked: 'Staked',
  approve: 'Approve',
  approved: 'Approved',
  approving: 'Approving',
  approvalFailed: 'Approval Failed',
  execute: 'Execute',
  executing: 'Executing',
  xxxFailed: '{{action}} Failed',
  insufficientLiquidity: 'Insufficient Liquidity',
  insufficientLiquidityMessage:
    'Please reduce the amount you\'re trying to deposit. You can read more <a href="https://docs.tempus.finance/community/faq#why-would-a-pool-have-insufficient-liquidity" target="_blank"> here</a>.',
  profitLoss: 'Profit & Loss',
  currentValue: 'Current Value',
  from: 'From',
  to: 'To',
  and: 'and',
  via: 'via',
  balance: 'Balance',
  balanceXxx: 'Balance {{amount}}',
  lifeTimeYield: 'Lifetime Yield',
  fixedYield: 'Fixed Yield',
  yieldAtMaturity: 'Yield at maturity',
  estimatedYieldAtMaturity: 'Est. yield at maturity',
  totalAvailableAtMaturity: 'Total available at maturity',
  variableYield: 'Variable Yield',
  amountReceivedXxx: 'You will receive {{amount}}',
  estimatedAmountReceived: 'Estimated Amount Received',
  estimated: 'Estimated',
  feesTooltipInfo:
    'Deposit, Redemption, Early Redemption fees accrue to the Tempus Treasury. Swap fees accrue to liquidity providers.',
  selectPlaceholder: 'Please select',
  warningEthGasFees: 'At least 0.05 ETH must be left in your wallet to pay for gas fees.',
  selectTokenFirst: 'Please select the token first',
  interestRateProtectionTooltipText:
    'Fix your future yield with Tempus. This function locks your Yield Bearing Token, mints Capitals and Yields in exchange, and swaps all Yields for Capitals through TempusAMM.<br/><br/>You will receive Capitals which will be redeemable 1:1 to the Underlying asset on Maturity.',
  liquidityProvisionTooltipText:
    'Provide liquidity to Tempus to earn extra yield. This function locks your Yield Bearing Token, mints Capitals and Yields in exchange, and uses the maximum available number of Capitals and Yields to provide liquidity to TempusAMM.<br/><br/>This means that you will receive the underlying yield, and the Tempus swap fees, aggregated into one yield.',
  slippageTolerance: 'Slippage tolerance',
  slippageTooltip: 'Your transaction will revert if the price changes unfavorably by more than this percentage.',
  auto: 'Auto',
  language: 'Language',
  mobileNotSupported:
    'Mobile support is not yet available, but will be included at a later time. <br />Thank you for your understanding.',
  mobileLink: 'Read more about Tempus',
  unstaked: 'Unstaked',
  xxxStakedPrincipals: '{{amount}} Staked Capitals',
  xxxStakedYields: '{{amount}} Staked Yields',
  mintDescription: 'Split your yield bearing token into Capitals and Yields.',
  swapDescription: 'Swap between Capital and Yields.',
  provideLiquidityDescription: 'Use your LP tokens to provide liquidity to the pool and earn rewards.',
  removeLiquidityDescription:
    'Remove your liquidity from the pool with the accrued rewards in the form of your initial LP tokens.',
  poolActionDisabledTitle: 'Certain actions to this pool are temporarily disabled',
  selectNetwork: 'Select Network',
  combinedApr: 'Combined APR',
  governance: 'Governance',
  unsupported: 'Unsupported',
  switchNetwork: 'Switch Network',
  unsupportedNetworkTooltipTitle: 'Unsupported Network',
  unsupportedNetworkTooltipText1: 'The network your wallet is connected to is not currently supported by Tempus.',
  unsupportedNetworkTooltipText2: 'Please connect to a supported network in order to proceed.',
  allPools: 'All Pools',
  backToDashboard: 'Back to All Pools',
  contractAddresses: 'Contract Addresses',
  termsAndConditions: 'Terms and Conditions',
  copyToclipboard: 'Copy to Clipboard',
  copied: 'Copied!',
  earliestMaturity: 'Earliest maturity',
  latestMaturity: 'Latest maturity',
  timeToMaturity: 'Time to maturity',
  slippageError: 'Slippage for this transaction is too low. Please adjust the slippage in the settings menu.',
  disableInputByNegativeYield:
    'Deposits are currently disabled as this pool is currently experiencing negative yields. Please check our <a href="https://docs.tempus.finance/community/faq#why-would-a-pool-have-a-negative-yield" target="_blank">docs</a> for more information.',
  upTo: 'Up to',
  since: 'since',
};
export default en;
