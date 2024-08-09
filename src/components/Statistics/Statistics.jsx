import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  const iconsArr = [
    <FaRegThumbsUp key="0" />,
    <MdOutlineProductionQuantityLimits key="1" />,
    <MdPeople key="2" />,
    <GiTreeDoor key="3" />,
  ];

  return (
    <>
      {title && <h2 className={style.title}>Main Statistics</h2>}

      <ul className={style.list}>
        {stats.map((stat, index) => {
          return (
            <StatisticsItem
              key={stat.id}
              title={stat.title}
              total={stat.total}
              icon={iconsArr[index]}
            />
          );
        })}
      </ul>
    </>
  );
};
