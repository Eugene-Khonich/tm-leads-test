import { useState } from 'react';
import frame from '../../icons/frame.svg';
import BurgerIcon from '../../icons/burger.svg';
import Menu from '../Menu/Menu';
import css from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={css.header}>
      <img src={frame} alt='icon' className={css.frame} />

      <nav className={css.nav}>
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
        <div className={css.auth}>
          <button>Вход</button>
          <button>Регистрация</button>
        </div>
      </nav>

      <button className={css.burger} onClick={() => setMenuOpen(true)}>
        <img src={BurgerIcon} alt='menu' />
      </button>

      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
};

export default Header;
