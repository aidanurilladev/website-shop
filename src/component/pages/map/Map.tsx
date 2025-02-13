// components/pages/map/Map.tsx
"use client";
import { useState } from "react";
import s from "./Map.module.scss";

const Map = () => {
  const [isMapLoading, setIsMapLoading] = useState(true);

  return (
    <section id="map" className={s.mapSection}>
      <div className="container">
        <div className={s.header}>
          <h2>Как нас найти</h2>
          <p>Мы находимся в центре города, рядом с главной площадью</p>
        </div>

        <div className={s.content}>
          <div className={s.info}>
            <div className={s.addressInfo}>
              <div className={s.infoItem}>
                <div className={s.iconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 1C7.58 1 4 4.58 4 9c0 7.5 8 14 8 14s8-6.5 8-14c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className={s.infoContent}>
                  <h3>Адрес</h3>
                  <p>ул. Куренкеева, 138</p>
                  <p>Бишкек, Кыргызстан</p>
                </div>
              </div>

              <div className={s.infoItem}>
                <div className={s.iconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className={s.infoContent}>
                  <h3>Телефон</h3>
                  <a href="tel:+996225767676">+996 225 76 76 76</a>
                </div>
              </div>

              <div className={s.infoItem}>
                <div className={s.iconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className={s.infoContent}>
                  <h3>Режим работы</h3>
                  <p>Пн-Пт: 9:00 - 18:00</p>
                  <p>Сб-Вс: Выходной</p>
                </div>
              </div>
            </div>
          </div>

          <div className={s.mapWrapper}>
            <div className={s.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.4051433495366!2d74.61144507596573!3d42.89012267107725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7ed7cb24803%3A0xe1c77d12212757b7!2s138%20%D1%83%D0%BB.%20%D0%9A%D1%83%D1%80%D0%B5%D0%BD%D0%BA%D0%B5%D0%B5%D0%B2%D0%B0%2C%20%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA!5e0!3m2!1sru!2skg!4v1707748993637!5m2!1sru!2skg"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
