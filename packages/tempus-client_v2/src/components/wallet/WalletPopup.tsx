import { FC, RefObject, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Button, Divider, Popper } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Chain } from 'tempus-core-services';
import { Notification } from '../../interfaces/Notification';
import { LocaleContext } from '../../context/localeContext';
import { UserSettingsContext } from '../../context/userSettingsContext';
import { PendingTransactionsContext } from '../../context/pendingTransactionsContext';
import { WalletContext } from '../../context/walletContext';
import getNotificationService from '../../services/getNotificationService';
import { getChainConfig } from '../../utils/getConfig';
import getText from '../../localisation/getText';
import Typography from '../typography/Typography';
import Spacer from '../spacer/spacer';
import ExternalLink from '../common/ExternalLink';
import WalletNotification from './WalletNotification';
import WalletPending from './WalletPending';

import './WalletPopup.scss';

type WalletPopupInProps = {
  anchorElement: RefObject<HTMLButtonElement>;
  account?: string | null;
  chainName: Chain;
};

type WalletPopupOutProps = {
  onSwitchWallet: () => void;
  onClose: () => void;
};

type WalletPopupProps = WalletPopupInProps & WalletPopupOutProps;

const WalletPopup: FC<WalletPopupProps> = ({ anchorElement, account, chainName, onSwitchWallet, onClose }) => {
  const { openWalletPopup } = useContext(UserSettingsContext);
  const { locale } = useContext(LocaleContext);
  const { pendingTransactions } = useContext(PendingTransactionsContext);
  const { userWalletChain } = useContext(WalletContext);

  const [notifications, setNotifications] = useState<Notification[]>([]);

  const clearNotifications = useCallback(() => {
    getNotificationService().deleteNotifications();
    setNotifications([]);
  }, []);

  const switchWallet = useCallback(() => {
    onSwitchWallet && onSwitchWallet();
  }, [onSwitchWallet]);

  const accountAddressURL = useMemo(() => {
    const config = getChainConfig(chainName);

    switch (config.networkName) {
      case 'homestead':
        return `https://etherscan.io/address/${account}`;
      case 'fantom-mainnet':
        return `https://ftmscan.com/address/${account}`;
      case 'candle':
        return `https://candleexplorer.com/address/${account}`;
      default:
        return `https://${config.networkName}.etherscan.io/address/${account}`;
    }
  }, [account, chainName]);

  useEffect(() => {
    const notificationStream$ = getNotificationService()
      .getLastItems()
      .subscribe(notification => {
        if (notification && notification.chain === userWalletChain) {
          setNotifications((prev: any) => [notification, ...prev.slice(0, 4)]);
        }
      });

    return () => {
      notificationStream$.unsubscribe();
      setNotifications([]);
    };
  }, [userWalletChain, setNotifications]);

  return (
    <>
      <Popper
        className="tc__wallet__popper"
        open={openWalletPopup}
        anchorEl={anchorElement.current}
        placement="top-end"
      >
        <div className="tc__wallet__popper__container">
          <div className="tc__wallet__popper__section tc__wallet__popper__section-header">
            <Typography variant="dropdown-text">{getText('walletOverview', locale)}</Typography>
            <Button onClick={onClose}>
              <CloseIcon />
            </Button>
          </div>
          <Divider />
          <div className="tc__wallet__popper__section tc__wallet__popper__section-account">
            <div className="tc__wallet__popper__section__title">
              <Typography variant="dropdown-text" color="title">
                {getText('connectedWallet', locale)}
              </Typography>
              <Button onClick={switchWallet}>
                <Typography variant="disclaimer-text" color="title">
                  {getText('switchWallet', locale)}
                </Typography>
              </Button>
            </div>
            <ExternalLink className="tc__wallet__popper__section-link" href={accountAddressURL}>
              <Typography variant="dropdown-text" color="link">
                {account}
              </Typography>
            </ExternalLink>
          </div>
          {pendingTransactions && pendingTransactions.length > 0 && (
            <>
              <Divider />
              <div className="tc__wallet__popper__section tc__wallet__popper__section-transactions">
                <div className="tc__wallet__popper__section__title">
                  <Typography variant="dropdown-text" color="title">
                    {getText('pendingTransactions', locale)}
                  </Typography>
                </div>
                <Spacer size={15} />
                {pendingTransactions.map(pendingTransaction => (
                  <WalletPending key={pendingTransaction.hash} {...pendingTransaction} />
                ))}
              </div>
            </>
          )}
          {notifications && notifications.length > 0 && (
            <>
              <Divider />
              <div className="tc__wallet__popper__section tc__wallet__popper__section-transactions">
                <div className="tc__wallet__popper__section__title">
                  <Typography variant="dropdown-text" color="title">
                    {getText('transactionHistory', locale)}
                  </Typography>
                  <Button onClick={clearNotifications}>
                    <Typography variant="disclaimer-text" color="title">
                      {getText('clear', locale)}
                    </Typography>
                  </Button>
                </div>
                <Spacer size={15} />
                {notifications.map(notification => (
                  <WalletNotification key={notification.id} {...notification} />
                ))}
              </div>
            </>
          )}
        </div>
      </Popper>
      {openWalletPopup && <div className="tc__backdrop" onClick={onClose} />}
    </>
  );
};

export default WalletPopup;
