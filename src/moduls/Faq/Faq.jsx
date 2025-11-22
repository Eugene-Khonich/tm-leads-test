import { useState } from 'react';
import css from './Faq.module.css';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      question: 'Что такое TradeBlade',
      answer:
        'Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance. Он представляет пользователям множество преимуществ, таких как более высокая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик.',
    },
    {
      question: 'Что TradeBlade предлагает инвесторам',
      answer: '',
    },
    {
      question: 'Должен ли я перевести свои средства на TradeBlade',
      answer: '',
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={css.faqWrapper}>
      <h3>Часто задаваемые вопросы</h3>
      <ul className={css.list}>
        {items.map((item, index) => (
          <li
            key={index}
            className={`${css.item} ${openIndex === index ? css.openItem : ''}`}
          >
            <h4 onClick={() => toggle(index)} className={css.question}>
              {item.question}
            </h4>
            <p
              className={`${css.answer} ${openIndex === index ? css.open : ''}`}
            >
              {item.answer}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
