import css from './About.module.css';
import mobileLine from '../../icons/about.svg';
import desktopLine from '../../icons/aboutDesck.svg';

const About = () => {
  return (
    <div className={css.about} id='about'>
      <div className={css.aboutText}>
        <picture>
          <source media='(min-width: 768px)' srcSet={desktopLine} />
          <img src={mobileLine} alt='line' className={css.line} />
        </picture>
        <h2 className={css.title}>О компании</h2>
        <p className={css.text}>
          Мы опытная команда, для которой трейдинг – профессия. TradeBlade
          является авторизованным официальным брокером биржи Binance.
          <br />
          <br />
          Он представляет пользователям множество преимуществ, таких как более
          високая скорость синхронизации API и возможность создать учетную
          запись Binance через платформу TradeBlade всего в 1 клик.
        </p>
      </div>
      <div className={css.try}>
        <p>
          Попробуйте сейчас и получите <br />5 дней бесплатного пользования
        </p>
        <div className={css.inputBlock}>
          <input type='text' className={css.input} placeholder='ВАШ E-MAIL' />
          <button className={css.btn}>Попробовать</button>
        </div>
      </div>
    </div>
  );
};

export default About;
