import { useState } from 'react';
import { LanguageContext, defaultLanguageContextValue } from '../../context/languageContext';
import { ETHBalanceContext, defaultETHBalanceContextValue } from '../../context/ethBalance';
import { defaultWalletContextValue, WalletContext } from '../../context/wallet';
import { defaultPendingTransactionsContextValue, PendingTransactionsContext } from '../../context/pendingTransactions';
import ETHBalanceProvider from '../../providers/ethBalanceProvider';
import NotificationContainer from '../notification/NotificationContainer';
import NavBar from '../navbar/NavBar';
import Main from '../main/Main';

import './App.scss';
import { defaultPoolDataContextValue, PoolDataContext } from '../../context/poolData';

const App = () => {
  const [language, setLanguage] = useState(defaultLanguageContextValue);
  const [ethBalance, setETHBalance] = useState(defaultETHBalanceContextValue);
  const [walletData, setWalletData] = useState(defaultWalletContextValue);
  const [pendingTransactions, setPendingTransactions] = useState(defaultPendingTransactionsContextValue);
  const [poolData, setPoolData] = useState(defaultPoolDataContextValue);

  return (
    <LanguageContext.Provider value={{ ...language, setLanguage }}>
      <ETHBalanceContext.Provider value={{ ...ethBalance, setETHBalance }}>
        <WalletContext.Provider value={{ ...walletData, setWalletData }}>
          <PendingTransactionsContext.Provider value={{ ...pendingTransactions, setPendingTransactions }}>
            <PoolDataContext.Provider value={{ ...poolData, setPoolData }}>
              <div className="tc__app__container">
                <NavBar />
                <Main />
                <NotificationContainer />
              </div>
            </PoolDataContext.Provider>
          </PendingTransactionsContext.Provider>
          <ETHBalanceProvider />
        </WalletContext.Provider>
      </ETHBalanceContext.Provider>
    </LanguageContext.Provider>
  );
};

export default App;
