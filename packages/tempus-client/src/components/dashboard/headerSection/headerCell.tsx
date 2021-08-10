import { FC } from 'react';
import { TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';

const HeaderCell: FC = (props: any) => {
  const className = `tf__dashboard__header__cell tf__dashboard__header__${props.column.name}`;
  return <TableHeaderRow.Cell {...props} class={className} />;
};

export default HeaderCell;
