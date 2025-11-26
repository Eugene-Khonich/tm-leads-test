import css from './Footer.module.css';
import frame from '../../icons/frame.svg';

const Footer = () => {
  return (
    <footer className={css.footerWrapper}>
      <div className={css.block}>
        <p className={css.header}>Быстрая навигация</p>
        <ul className={css.links}>
          <li>
            <a href='#numbers'>Цифры</a>
          </li>
          <li>
            <a href='#deals'>Сделки онлайн</a>
          </li>
          <li>
            <a href='#about'>О компании</a>
          </li>
          <li>Как начать</li>
          <li>
            <a href='#tariffs'>Тарифы</a>
          </li>
          <li>Отзывы</li>
          <li>
            <a href='@faq'>FAQ</a>
          </li>
        </ul>
      </div>

      <div className={css.blockLogo}>
        <img src={frame} alt='logo' className={css.logo} />
        <p className={css.copy}>© 2022 TradeBlade. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
