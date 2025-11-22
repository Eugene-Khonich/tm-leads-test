import css from './Numbers.module.css';

const Numbers = () => {
  return (
    <section className={css.numbers}>
      <div className={css.header}>
        <h2>Цифры</h2>
        <p>Сентябрь 2022</p>
      </div>

      <ul className={css.list}>
        <li>
          Торговой <br /> прибыли
          <span>2756%</span>
        </li>
        <li>
          Фьючерсных и спотовых сделок
          <span>67</span>
        </li>
        <li>
          Прибыль подписчиков
          <span>375000</span>
        </li>
      </ul>
    </section>
  );
};

export default Numbers;
