import css from './Menu.module.css';
import BurgerCloseIcon from '../../icons/close.svg';

const Menu = ({ isOpen, onClose }) => {
  return (
    <div className={`${css.menu} ${isOpen ? css.active : ''}`}>
      <button className={css.close} onClick={onClose}>
        <img src={BurgerCloseIcon} alt='Close menu' />
      </button>

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
        <button>Регистрация</button>
        <button>Войти</button>
      </div>
    </div>
  );
};

export default Menu;
