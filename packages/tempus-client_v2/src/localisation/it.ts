import Words from './words';

const it: { [word in Words]: string } = {
  max: 'max',
  min: 'min',
  dashboard: 'Pannello',
  analytics: 'Analisi',
  community: 'Comunità',
  settings: 'Impostazioni',
  connectWallet: 'Connetti Portafoglio',
  pending: 'In corso...',
  selectWallet: 'Seleziona Portafoglio',
  walletSelectorDisclaimer:
    'Connettendo un portafoglio, dichiari di essere soggetto ai <a href="https://tempus.finance/terms-of-service" target="_blank">Termini di Servizio di Tempus</a> e confermi di avere letto e compreso <a href="https://tempus.finance/disclaimer" target="_blank">l\'avvertimento sul Protocollo Tempus</a>.',
  metamaskConnected: 'MetaMask connesso',
  changeNetworkRejected: 'Richiesta cambiamento network rifiutata dall`utente',
  changeNetworkRejectedExplain: "Per poter usare l'applicazione, per favore connettiti al network Mainnet",
  unsupportedNetwork: 'Network del portafoglio non supportato',
  unsupportedNetworkExplain: 'Supportiamo solo il network Mainnet',
  walletConnectConnected: 'WalletConnect connesso',
  errorConnectingWallet: 'Error nella connessione del portafoglio',
  viewRecentTransactions: 'Vedi transazioni recenti',
  walletOverview: 'Panoramica del portafoglio',
  switchWallet: 'Cambia portafoglio',
  connectedWallet: 'Portafoglio collegato',
  viewLinkText: 'Vedi su Etherscan',
  pendingTransactions: 'Transazioni in corso',
  transactionHistory: 'Storico Transazioni',
  clear: 'Rimuovi',
  installMetamask: 'Installa Metamask',
  availablePools: 'Pool Disponibili',
  filter: 'Filtro',
  asset: 'Attività',
  assetName: 'Nome Attività',
  protocol: 'Protocollo',
  protocolName: 'Nome Protocollo',
  clearFilter: 'Rimuovi',
  apply: 'Applica',
  token: 'token',
  fixedApr: 'APR Fisso',
  lifeTimeApr: 'APR a Termine',
  apr: 'APR',
  aprRange: 'Gamma APR',
  lpApr: 'LP APR',
  futureApr: 'APR Futuro',
  fiat: 'Fiat',
  crypto: 'Crypto',
  pool: 'Pool',
  ofPool: 'della Pool',
  poolRatio: 'Frazionamento Pool (Principals / Yields)',
  redemption: 'Rimborso',
  earlyRedemption: 'Rimborso Anticipato',
  swap: 'Scambio',
  tvl: 'TVL',
  manage: 'Gestisci',
  basic: 'Normale',
  basicSubTitle: 'Opzioni raccomandate',
  advanced: 'Avanzato',
  advancedSubTitle: 'Per utenti esperti',
  deposit: 'Deposito',
  withdraw: 'Ritiro',
  mint: 'Forgia',
  removeLiquidity: 'Rimuovi Liquidità',
  provideLiquidity: 'Immetti Liquidità',
  earlyRedeem: 'Riscatto Anticipato',
  availableToDeposit: 'Disponibilità Deposito',
  marketImpliedYield: 'APR Futuro',
  volume: 'Volume',
  fees: 'Commissioni',
  term: 'Periodo',
  startDate: 'Data di Inizio',
  maturity: 'Scadenza',
  timeLeft: 'Tempo Rimasto',
  currentPosition: 'Posizione Attuale',
  principals: 'Principals',
  yields: 'Yields',
  lpTokens: 'LP Tokens',
  staked: 'Accumulati',
  approve: 'Approva',
  approved: 'Approvato',
  approving: 'In Approvazione',
  execute: 'Esegui',
  executing: 'In Esecuzione',
  insufficientLiquidity: 'Liquidità insufficiente',
  profitLoss: 'Profitti & Perdite',
  currentValue: 'Valore attuale',
  from: 'Da',
  to: 'A',
  balance: 'Saldo',
  futureYield: 'Rendimento Futuro',
  lifeTimeYield: 'Rendimento a Termine',
  fixYourFutureYield: 'Fissa il Rendimento Futuro',
  fixedYield: 'Rendimento Fisso',
  yieldAtMaturity: 'Yield at maturity',
  estimatedYieldAtMaturity: 'Est. yield at maturity',
  totalAvailableAtMaturity: 'Totale disponibile a scadenza',
  variableYield: 'Rendimento Variabile',
  amountReceived: 'Importo Ricevuto',
  approx: 'Appross.',
  estimatedAmountReceived: 'Importo Ricevuto Stimato',
  estimated: 'Stimato',
  feesTooltipInfo:
    'Le commissioni di Deposito, Rimborso e Rimborso Anticipato sono versate nel Tesoro di Tempus Treasury (Tempus Treasury). La commissione di Scambio è versata ai fornitori di liquidità.',
  selectPlaceholder: 'Seleziona',
  selectTokenFirst: 'Prima Seleziona il Token',
  warningEthGasFees: 'Almeno 0.05 ETH devono rimanere nel portafoglio per pagare la commissione del gas.',
  about: 'Su di noi',
  tempusAnnouncements: 'Tempus Annunci',
  tempusChat: 'Tempus Chat',
  interestRateProtectionTooltipText:
    "Fissa il rendimento futuro con Tempus. Questa funzione blocca il tuo Yield Bearing Token, forgia i Principals e gli Yields in cambio e scambia tutti gli Yields per Principals attraverso il TempusAMM.<br/><br/>Riceverai Principals i quali sono riscattabili 1:1 con l'attività sottostante a scadenza.",
  liquidityProvisionTooltipText:
    'Fornisci liquidità a Tempus per ottenere un rendimento aggiuntivo. Questa funzione blocca il tuo  Yield Bearing Token, forgia i Principals e gli Yields in cambio e usa il maggior numero di Principals e Yields per immettere liquidità al TempusAMM.<br/><br/>Questo significa che riceverai il rendimento sottostante e le commissioni di scambio Tempus aggregate in un unico rendimento.',
  slippageTolerance: 'Tolleranza di slittamento',
  slippageTooltip:
    'La tua transazione non verrà completata se il prezzo cambia sfavorevolmente in misura maggiore di questa percentuale.',
  auto: 'Auto',
  language: 'Lingua',
  mobileNotSupported:
    'Il supporto per smathphone e tablet non è ancora disponibile, ma lo sarà successivamente.<br />Grazie per la comprensione.',
  mobileLink: 'Leggi di più su Tempus',
  stakedPrincipals: 'Staked Principals',
  stakedYields: 'Staked Yields',
};
export default it;
