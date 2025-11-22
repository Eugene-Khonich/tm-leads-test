import css from './Hero.module.css';
import heroImg from '../../icons/hero.png';

const Hero = () => {
  return (
    <section className={css.hero}>
      <div className={css.text}>
        <h1>моментально копируй сделки профи трейдеров</h1>
        <p>
          Начни копировать сделки с успешной командой профессиональных трейдеров
          в автоматическом режиме.
        </p>
        <div className={css.inputWrapper}>
          <input type='text' placeholder='Введите email' />
          <button>начать</button>
        </div>
        <p className={css.free}>5 дней бесплатного пользования</p>
      </div>

      <div className={css.imageWrapper}>
        <img src={heroImg} alt='Hero' />
      </div>
    </section>
  );
};

export default Hero;
