import css from './Menu.module.css';
import BurgerCloseIcon from '../../icons/close.svg';

const Menu = ({ isOpen, onClose }) => {
  const handleClick = () => {
    onClose();
  };
  return (
    <div className={`${css.menu} ${isOpen ? css.active : ''}`}>
      <button className={css.close} onClick={onClose}>
        <img src={BurgerCloseIcon} alt='Close menu' />
      </button>

      <ul className={css.links}>
        <li>
          <a href='#numbers' onClick={handleClick}>
            Цифры
          </a>
        </li>
        <li>
          <a href='#deals' onClick={handleClick}>
            Сделки онлайн
          </a>
        </li>
        <li>
          <a href='#about' onClick={handleClick}>
            О компании
          </a>
        </li>
        <li>Как начать</li>
        <li>
          <a href='#tariffs' onClick={handleClick}>
            Тарифы
          </a>
        </li>
        <li>Отзывы</li>
        <li>
          <a href='#faq' onClick={handleClick}>
            FAQ
          </a>
        </li>
      </ul>

      <div className={css.auth}>
        <button>Регистрация</button>
        <button>Войти</button>
      </div>
    </div>
  );
};

export default Menu;
