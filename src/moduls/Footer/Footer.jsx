import css from './Footer.module.css';
import frame from '../../icons/frame.svg';

const Footer = () => {
  return (
    <footer className={css.footerWrapper}>
      <div className={css.block}>
        <p className={css.header}>Быстрая навигация</p>
        <ul className={css.links}>
          <li>Цифры</li>
          <li>Сделки онлайн</li>
          <li>о компании</li>
          <li>tradeblad это</li>
          <li>тарифы</li>
          <li>FAQ</li>
        </ul>
      </div>

      <div className={css.block}>
        <img src={frame} alt='logo' className={css.logo} />
        <p className={css.copy}>© 2022 TradeBlade. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
