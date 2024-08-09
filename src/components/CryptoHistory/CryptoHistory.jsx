const tableHeaders = ['№', 'price', 'amount', 'date'];
import { formatDate } from 'helpers/formatDate';
import style from './CryptoHistory.module.css';

export const CryptoHistory = ({ transactions }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          {tableHeaders.map(tableHeader => {
            return (
              <th className={style.th} key={tableHeader}>
                {tableHeader}
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ date, amount, price, id }, i) => {
          return (
            <tr className={style.tr} key={id}>
              <td className={style.td}>{i + 1}</td>
              <td className={style.td}>{price}</td>
              <td className={style.td}>{amount}</td>
              <td className={style.td}>{formatDate(date)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
