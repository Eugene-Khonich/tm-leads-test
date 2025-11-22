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
          <li>Цифры</li>
          <li>Сделки онлайн</li>
          <li>О компании</li>
          <li>Как начать</li>
          <li>Тарифы</li>
          <li>Отзывы</li>
          <li>FAQ</li>
        </ul>
        <div className={css.auth}>
          <button>Вход</button>
          <button>Регистрация</button>
        </div>
      </nav>

      <button className={css.burger} onClick={() => setMenuOpen(true)}>
        <img src={BurgerIcon} alt='menu' />
      </button>

      {/* Мобільне меню */}
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
};

export default Header;
