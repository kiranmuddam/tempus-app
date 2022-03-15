import Words from './words';

const it: { [word in Words]: string } = {
  tempus: 'Tempus',
  max: 'max',
  min: 'min',
  community: 'Comunità',
  settings: 'Impostazioni',
  connectWallet: 'Connetti Portafoglio',
  xxxPending: '{{count}} In corso...',
  selectWallet: 'Seleziona Portafoglio',
  walletSelectorDisclaimer:
    'Connettendo un portafoglio, dichiari di essere soggetto ai <a href="https://tempus.finance/terms-of-service" target="_blank">Termini di Servizio di Tempus</a> e confermi di avere letto e compreso <a href="https://tempus.finance/disclaimer" target="_blank">l\'avvertimento sul Protocollo Tempus</a>.',
  metamaskConnected: 'MetaMask connesso',
  changeNetworkRejected: 'Richiesta cambiamento network rifiutata dall`utente',
  changeNetworkRejectedExplain: "Per poter usare l'applicazione, per favore connettiti a uno dei network supportati",
  unsupportedNetwork: 'Network del portafoglio non supportato',
  unsupportedNetworkExplain: 'Supportiamo solo i network Ethernet o Fantom',
  walletConnectConnected: 'WalletConnect connesso',
  errorConnectingWallet: 'Error nella connessione del portafoglio',
  viewRecentTransactions: 'Vedi transazioni recenti',
  walletOverview: 'Panoramica del portafoglio',
  switchWallet: 'Cambia portafoglio',
  connectedWallet: 'Portafoglio collegato',
  viewOnXxx: 'Vedi su {{name}}',
  pendingTransactions: 'Transazioni in corso',
  transactionHistory: 'Storico Transazioni',
  clear: 'Rimuovi',
  asset: 'Attività',
  assetName: 'Nome Attività',
  protocol: 'Origine',
  protocolName: 'Nome Protocollo',
  clearFilter: 'Rimuovi',
  apply: 'Applica',
  fixedApr: 'APR Fisso',
  lifeTimeApr: 'APR a Termine',
  xxxApr: '{{protocol}} APR',
  aprRange: 'Gamma APR',
  lpApr: 'APR Variabile',
  fiat: 'Fiat',
  crypto: 'Crypto',
  pool: 'Pool',
  xxxOfPool: '{{share}} della Pool',
  poolRatio: 'Frazionamento Pool (Capitals / Yields)',
  redemption: 'Rimborso',
  earlyRedemption: 'Rimborso Anticipato',
  swap: 'Scambio',
  tvl: 'TVL',
  totalValueLocked: 'Valore totale bloccato',
  manage: 'Gestisci',
  basic: 'Normale',
  basicSubTitle: 'Opzioni raccomandate',
  advanced: 'Avanzato',
  advancedSubTitle: 'Per utenti esperti',
  deposit: 'Deposito',
  withdraw: 'Ritiro',
  mint: 'Emetti',
  removeLiquidity: 'Rimuovi Liquidità',
  provideLiquidity: 'Immetti Liquidità',
  earlyRedeem: 'Riscatto Anticipato',
  operationDisabledByConfig:
    'Certe operazioni relative a questa pool di Tempus sono temporaneamente disabilitate a causa di malfunzionamento intermittente della pool sottostante. Vi chiediamo cortesemente di pazientare mentre cerchiamo di risolvere il problema.',
  askUsOnDiscord:
    'Hai altre domande? Chiedici su Discord: <a href="https://discord.com/invite/6gauHECShr">https://discord.com/invite/6gauHECShr</a>',
  depositDisabledByConfig: 'Il deposito è temporaneamente non disponibile',
  mintDisabledByConfig: "L'emissione è temporaneamente non disponibile",
  depositDisabledNoLiquidity:
    'Il deposito è momentaneamente disabilitato a causa di liquidità insufficiente nella pool selezionata. Per favore riprova più tardi.',
  depositDisabledPoolMaturity: 'Il deposito non è disponibile perchè questa pool ha raggiunto la scadenza.',
  depositDisabledNegative:
    'Il deposito è stato momentaneamente disabilitato a causa del rendimento negativo della pool. Per favore riprova più tardi.',
  withdrawDisabledNoLiquidity:
    'Il ritiro  è stato momentaneamente disabilitato a causa di liquidità insufficiente nella pool selezionata. Per favore riprova più tardi.',
  withdrawDisabledNoDeposit: 'Il ritiro sarà disponibile una volta effettuato un deposito.',
  withdrawDisabledNegative:
    'Il ritiro è stato momentaneamente disabilitato a causa del rendimento negativo della pool. Per favore riprova più tardi.',
  mintDisabledPoolMaturity: "L'emissione non è disponibile perchè questa pool ha raggiunto la scadenza.",
  swapDisabledNoLiquidity:
    'Lo scambio è stato momentaneamente disabilitato a causa di liquidità insufficiente nella pool selezionata. Per favore riprova più tardi.',
  swapDisabledNoShares: 'Lo scambio sarà disponibile una volta effettuato un deposito.',
  swapDisabledPoolMaturity: 'Lo scambio non è disponibile perchè questa pool ha raggiunto la scadenza.',
  provideLiquidityDisabledNoDeposit:
    "L'immissione di liquidità non è disponibile fino a quando non hai effettuato un deposito o un emissione.",
  provideLiquidityDisabledNoPrincipals:
    "L'immissione di liquidità non è disponibile fino a quando non hai acquisito ulteriori Capitals.",
  provideLiquidityDisabledNoYields:
    "L'immissione di liquidità non è disponibile fino a quando non hai acquisito ulteriori Yields token.",
  provideLiquidityDisabledPoolMaturity:
    "L'immissione di liquidità non è disponibile perchè questa pool ha raggiunto la scadenza.",
  removeLiquidityDisabledNoDeposit:
    'La rimozione di liquidità sarà disponibile una volta che hai accumulato i tuoi token (depositati presso il TempusAMM).',
  removeLiquidityDisabledNoLpTokens: 'La rimozione di liquidità sarà disponibile una volta immessa liquidità',
  removeLiquidityDisabledPoolMaturity:
    "La rimozione di liquidità non è disponibile perchè questa pool ha raggiunto la scadenza. Per favore usa 'Ritiro'",
  earlyRedemptionDisabledNoLiquidity:
    'Il rimborso anticipato è stato momentaneamente disabilitato a causa di liquidità insufficiente nella pool selezionata. Per favore riprova più tardi.',
  availableToDeposit: 'Disponibilità Deposito',
  availableToDepositXxx: 'Disponibilità Deposito {{amount}}',
  volume: 'Volume',
  fees: 'Commissioni',
  term: 'Periodo',
  startDate: 'Data di Inizio',
  maturity: 'Scadenza',
  maturityXxx: 'Scadenza {{date}}',
  timeLeft: 'Tempo Rimasto',
  currentPosition: 'Posizione Attuale',
  principalsAndYields: 'Capitals & Yields',
  principals: 'Capitals',
  xxxPrincipals: '{{token}} Capitals',
  yields: 'Yields',
  xxxYields: '{{token}} Yields',
  lpTokens: 'LP Tokens',
  xxxLpTokens: '{{token}} LP Tokens',
  staked: 'Accumulati',
  approve: 'Approva',
  approved: 'Approvato',
  approving: 'In Approvazione',
  approvalFailed: 'Approvazione Fallita',
  execute: 'Esegui',
  executing: 'In Esecuzione',
  xxxFailed: '{{action}} Fallito',
  insufficientLiquidity: 'Liquidità insufficiente',
  insufficientLiquidityMessage:
    'Please reduce the amount you\'re trying to deposit. You can read more <a href="https://docs.tempus.finance/community/faq#why-would-a-pool-have-insufficient-liquidity" target="_blank"> here</a>.',
  profitLoss: 'Profitti & Perdite',
  currentValue: 'Valore attuale',
  from: 'Da',
  to: 'A',
  and: 'e',
  via: 'via',
  balance: 'Saldo',
  balanceXxx: 'Saldo {{amount}}',
  lifeTimeYield: 'Rendimento a Termine',
  fixedYield: 'Rendimento Fisso',
  yieldAtMaturity: 'Rendimento a scadenza',
  estimatedYieldAtMaturity: 'Rendimento stimato a scadenza',
  totalAvailableAtMaturity: 'Totale disponibile a scadenza',
  variableYield: 'Rendimento Variabile',
  amountReceivedXxx: 'Riceverai {{amount}}',
  estimatedAmountReceived: 'Importo Ricevuto Stimato',
  estimated: 'Stimato',
  feesTooltipInfo:
    'Le commissioni di Deposito, Rimborso e Rimborso Anticipato sono versate nel Tesoro di Tempus Treasury (Tempus Treasury). La commissione di Scambio è versata ai fornitori di liquidità.',
  selectPlaceholder: 'Seleziona',
  selectTokenFirst: 'Prima Seleziona il Token',
  warningEthGasFees: 'Almeno 0.05 ETH devono rimanere nel portafoglio per pagare le commissioni del gas.',
  interestRateProtectionTooltipText:
    "Fissa il rendimento futuro con Tempus. Questa funzione blocca il tuo Yield Bearing Token, emetti i Capitals e gli Yields in cambio e scambia tutti gli Yields per Capitals attraverso il TempusAMM.<br/><br/>Riceverai Capitals i quali sono riscattabili 1:1 con l'attività sottostante a scadenza.",
  liquidityProvisionTooltipText:
    'Fornisci liquidità a Tempus per ottenere un rendimento aggiuntivo. Questa funzione blocca il tuo  Yield Bearing Token, emetti i Capitals e gli Yields in cambio e usa il maggior numero di Capitals e Yields per immettere liquidità al TempusAMM.<br/><br/>Questo significa che riceverai il rendimento sottostante e le commissioni di scambio Tempus aggregate in un unico rendimento.',
  slippageTolerance: 'Tolleranza di slittamento',
  slippageTooltip:
    'La tua transazione non verrà completata se il prezzo cambia sfavorevolmente in misura maggiore di questa percentuale.',
  auto: 'Auto',
  language: 'Lingua',
  mobileNotSupported:
    'Il supporto per smathphone e tablet non è ancora disponibile, ma lo sarà successivamente.<br />Grazie per la comprensione.',
  mobileLink: 'Leggi di più su Tempus',
  unstaked: 'Non accumulati',
  xxxStakedPrincipals: '{{amount}} Capitals accumulati',
  xxxStakedYields: '{{amount}} Yields accumulati',
  mintDescription: 'Dividi i tuoi yield bearing token in Capitals e Yields.',
  swapDescription: 'Scambia tra Capitals e Yields.',
  provideLiquidityDescription: 'Usa i tuoi LP token per immettere liquidità nella pool e guadagnare commissioni.',
  removeLiquidityDescription:
    'Rimuovi liquidità dalla pool insieme alle commissioni sotto forma degli LP token iniziali.',
  combinedApr: 'APR combinato',
  poolActionDisabledTitle: 'Alcune operazioni su questa pool sono temporaneamente disabilitate',
  selectNetwork: 'Seleziona Network',
  governance: 'Governo',
  unsupported: 'Non supportato',
  switchNetwork: 'Cambia Network',
  unsupportedNetworkTooltipTitle: 'Network non supportato',
  unsupportedNetworkTooltipText1:
    'Il network al quale il tuo wallet è collegato non è supportato da Tempus al momento.',
  unsupportedNetworkTooltipText2: 'Per favore connettiti ad un network supportato per continuare.',
  allPools: 'Tutte le pool',
  backToDashboard: 'Torna a tutte le Pool',
  contractAddresses: 'Indirizzi dei Contratti',
  termsAndConditions: 'Termini e Condizioni',
  copyToclipboard: 'Copia negli appunti',
  copied: 'Copiato!',
  earliestMaturity: 'Scadenza più vicina',
  latestMaturity: 'Scadenza più lontana',
  timeToMaturity: 'Tempo alla scadenza',
  slippageError:
    'Lo slittamento per questa transazione è troppo basso. Per favore cambia lo slittamento nelle preferenze.',
  disableInputByNegativeYield:
    'I depositi sono attualmente disabilitati poiché questo pool sta attualmente registrando rendimenti negativi. Si prega di controllare i nostri <a href="https://docs.tempus.finance/community/faq#why-would-a-pool-have-a-negative-yield" target="_blank">documenti</a> per ulteriori informazioni.',
  upTo: 'Fino a',
  since: 'dal',
};
export default it;
