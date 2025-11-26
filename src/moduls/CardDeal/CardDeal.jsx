import css from './CardDeal.module.css';

const CardDeal = ({ pair, type, time, profit, target, date }) => {
  return (
    <div className={css.card}>
      <img src='/src/icons/emblem.svg' alt='' className={css.emblem} />

      <div className={css.topRow}>
        <h3 className={css.pair}>{pair}</h3>
        <p className={css.meta}>
          {type} · {time}
        </p>
      </div>

      <div className={css.center}>
        <p className={css.label}>Прибыль</p>
        <p className={css.profit}>
          {profit}% <span className={css.arrow}>↑</span>
        </p>
      </div>

      <div className={css.bottomRow}>
        <p className={css.target}>Цель {target}</p>
        <p className={css.date}>Дата входа {date}</p>
      </div>
    </div>
  );
};

export default CardDeal;
