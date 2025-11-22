import css from './Tariffs.module.css';

const Tariffs = () => {
  return (
    <div className={css.tariffsWrapper}>
      <h2>Tарифы</h2>
      <ul className={css.buttons}>
        <button className={css.btn}>спот</button>
        <button className={css.btn}>фьючерс</button>
      </ul>

      <ul className={css.card}>
        <li>
          <h3>STANDART</h3>
          <p>
            ✓ Ручной трейдинг
            <br />
            ✓ Автоматическое или полуавтоматическое копирование сделок
            <br />
            ✓ Личный кабинет со статистикой
            <br />
            ✓ Среднесрочные сделки с уровнями набора портфеля
            <br />
          </p>
          <div className={css.price}>
            <p>$234 -35%</p>
            <input type='text' />
          </div>
          <button className={css.btnTry}>
            Попробовать <br />5 дней бесплатно
          </button>
        </li>
        <li>
          <h3>VIP</h3>
          <p>
            ✓ Ручной трейдинг
            <br />
            ✓ Автоматическое или полуавтоматическое копирование сделок
            <br />
            ✓ Личный кабинет со статистикой
            <br />
            ✓ Краткосрочные, среднесрочные и инвест сделки
            <br />
            ✓ Наш авторский курс по трейдингу
            <br />
          </p>
          <div className={css.price}>
            <p>$585 -35%</p>
            <input type='text' />
          </div>
          <button className={css.btnTry}>
            Попробовать <br />5 дней бесплатно
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Tariffs;
