import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import css from './Deals.module.css';

const Deals = () => {
  const items = [1, 2, 3, 4, 5];

  return (
    <section className={css.deals}>
      <div className={css.header}>
        <h2>Прошедшие сделки</h2>
        <p>Онлайн</p>
      </div>

      <Swiper
        modules={[Scrollbar]}
        spaceBetween={20}
        slidesPerView='auto'
        scrollbar={{ draggable: true }}
        className={css.swiper}
      >
        {items.map((item) => (
          <SwiperSlide key={item} className={css.slide}>
            <div className={css.card}>{item}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Deals;
