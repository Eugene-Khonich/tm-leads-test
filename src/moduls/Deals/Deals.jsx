import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import css from './Deals.module.css';
import CardDeal from '../CardDeal/CardDeal';

const Deals = () => {
  const cards = [
    {
      pair: 'NEAR/USDT',
      type: 'SPOT',
      time: '1 мин. назад',
      profit: '58.6206',
      target: 4,
      date: '06.10.2022',
    },
    {
      pair: 'BTC/USDT',
      type: 'Futures',
      time: '5 мин. назад',
      profit: '12.4',
      target: 2,
      date: '10.09.2022',
    },
    {
      pair: 'ETH/USDT',
      type: 'SPOT',
      time: '12 мин. назад',
      profit: '34.12',
      target: 3,
      date: '15.11.2022',
    },
    {
      pair: 'SOL/USDT',
      type: 'SPOT',
      time: '20 мин. назад',
      profit: '75.0',
      target: 5,
      date: '01.10.2022',
    },
    {
      pair: 'XRP/USDT',
      type: 'SPOT',
      time: '30 мин. назад',
      profit: '22.9',
      target: 1,
      date: '20.09.2022',
    },
  ];

  return (
    <section className={css.deals}>
      <div className={css.header}>
        <h2>Прошедшие сделки</h2>
        <p>Онлайн</p>
      </div>

      <Swiper
        modules={[Scrollbar]}
        spaceBetween={5}
        slidesPerView='auto'
        scrollbar={{ draggable: true }}
        className={css.swiper}
        breakpoints={{
          375: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
      >
        {cards.map((card, i) => (
          <SwiperSlide key={i} className={css.slide}>
            <CardDeal {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Deals;
