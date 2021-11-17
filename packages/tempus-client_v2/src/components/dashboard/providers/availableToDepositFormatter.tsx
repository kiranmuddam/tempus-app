import { DataTypeProvider } from '@devexpress/dx-react-grid';
import { ethers, BigNumber } from 'ethers';
import { DashboardRow, isChildRow, isParentRow } from '../../../interfaces/DashboardRow';
import { Ticker } from '../../../interfaces/Token';
import NumberUtils from '../../../services/NumberUtils';
import Spacer from '../../spacer/spacer';
import Typography from '../../typography/Typography';
import TokenIcon from '../../tokenIcon';
import './availableToDepositFormatter.scss';
import { PoolDataContext, PoolData, getDataForPool } from '../../../context/poolDataContext';
import { WalletContext } from '../../../context/walletContext';
import { useContext, useMemo } from 'react';
import { CircularProgress } from '@material-ui/core';
import { ZERO } from '../../../constants';

const AvailableToDepositFormatter = (props: DataTypeProvider.ValueFormatterProps) => {
  const row = props.row as DashboardRow;

  const { poolData } = useContext(PoolDataContext);
  const { userWalletConnected } = useContext(WalletContext);

  const parentAvailableToDeposit = useMemo(() => {
    return getParentAvailableToDeposit(row.token, poolData);
  }, [poolData, row.token]);

  const childAvailableToDeposit = useMemo(() => {
    if (isChildRow(row)) {
      return getChildAvailableToDeposit(row.id, poolData);
    }
    return null;
  }, [poolData, row]);

  if (!userWalletConnected) {
    return <div></div>;
  }

  if (isParentRow(row)) {
    if (!parentAvailableToDeposit) {
      return <CircularProgress size={16} />;
    }

    return (
      <Typography color="default" variant="body-text">
        {`$${NumberUtils.formatWithMultiplier(Number(ethers.utils.formatEther(parentAvailableToDeposit)), 1)}`}
      </Typography>
    );
  }

  if (isChildRow(row)) {
    if (!childAvailableToDeposit) {
      return <CircularProgress size={16} />;
    }

    return (
      <div className="tf__dashboard__grid__avail-to-deposit-container">
        <div className="tf__dashboard__grid__avail-to-deposit-token-row">
          <>
            <Typography color="default" variant="body-text">
              {NumberUtils.formatWithMultiplier(
                Number(ethers.utils.formatEther(childAvailableToDeposit.backingToken)),
                2,
              )}
            </Typography>
            <div className="tf__dashboard__grid__avail-to-deposit-token-ticker-container">
              <Typography variant="body-text">{row.tempusPool.backingToken}</Typography>
              <Spacer size={5} />
              <TokenIcon ticker={row.tempusPool.backingToken} />
            </div>
          </>
        </div>
        <div className="tf__dashboard__grid__avail-to-deposit-token-row">
          <>
            <Typography color="default" variant="body-text">
              {NumberUtils.formatWithMultiplier(
                Number(ethers.utils.formatEther(childAvailableToDeposit.yieldBearingToken)),
                2,
              )}
            </Typography>
            <div className="tf__dashboard__grid__avail-to-deposit-token-ticker-container">
              <Typography variant="body-text">{row.tempusPool.yieldBearingToken}</Typography>
              <Spacer size={5} />
              <TokenIcon ticker={row.tempusPool.yieldBearingToken} />
            </div>
          </>
        </div>
      </div>
    );
  }
};

function getParentAvailableToDeposit(parentId: Ticker, poolData: PoolData[]) {
  const parentChildren = poolData
    .filter(pool => pool.backingToken === parentId)
    .filter(child => !child.isNegativeYield || (child.isNegativeYield && child.userBalanceUSD?.gte(ZERO)));

  // In case balance is still loading for some of the parent children, return null (show loading circle in dashboard)
  const childrenStillLoading = parentChildren.some(
    child => child.backingTokenValueInFiat === null || child.yieldBearingTokenValueInFiat === null,
  );
  if (childrenStillLoading) {
    return null;
  }

  const processedTokens: Ticker[] = [];
  let parentAvailableToDeposit = BigNumber.from('0');
  parentChildren.forEach(child => {
    if (child.backingTokenValueInFiat !== null && child.yieldBearingTokenValueInFiat !== null) {
      if (processedTokens.indexOf(child.backingToken) === -1) {
        parentAvailableToDeposit = parentAvailableToDeposit.add(child.backingTokenValueInFiat || '0');
        processedTokens.push(child.backingToken);
      }
      if (processedTokens.indexOf(child.yieldBearingToken) === -1) {
        parentAvailableToDeposit = parentAvailableToDeposit.add(child.yieldBearingTokenValueInFiat || '0');
        processedTokens.push(child.yieldBearingToken);
      }
    }
  });

  return parentAvailableToDeposit;
}

function getChildAvailableToDeposit(id: string, poolData: PoolData[]) {
  const data = getDataForPool(id, poolData);

  if (!data.userYieldBearingTokenBalance || !data.userBackingTokenBalance) {
    return null;
  }

  return {
    backingToken: data.userBackingTokenBalance,
    yieldBearingToken: data.userYieldBearingTokenBalance,
  };
}

export default AvailableToDepositFormatter;
