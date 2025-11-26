import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import css from './Deals.module.css';
import CardDeal from '../CardDeal/CardDeal';
import cards from '../../dealsData';
import point from '../../icons/point.svg';

const Deals = () => {
  return (
    <section className={css.deals} id='deals'>
      <div className={css.header}>
        <h2>Прошедшие сделки</h2>
        <p>
          <img src={point} alt='point' />
          Онлайн
        </p>
      </div>

      <Swiper
        modules={[Scrollbar]}
        spaceBetween={20}
        slidesPerView='auto'
        scrollbar={{ draggable: true }}
        loop={true}
        className={css.swiper}
        breakpoints={{
          375: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1440: { slidesPerView: 4 },
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
