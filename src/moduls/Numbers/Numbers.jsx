import css from './Numbers.module.css';
import mobileLine from '../../icons/about.svg';
import desktopLine from '../../icons/aboutDesck.svg';

const Numbers = () => {
  return (
    <section className={css.numbers} id='numbers'>
      <picture>
        <source media='(min-width: 1024px)' srcSet={desktopLine} />
        <img src={mobileLine} alt='line' className={css.line} />
      </picture>
      <div className={css.header}>
        <h2 className={css.title}>Цифры</h2>
        <p>Сентябрь 2022</p>
      </div>

      <ul className={css.list}>
        <li>
          Торговой прибыли
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
