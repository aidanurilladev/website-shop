"use client";
import React from "react";
import Image from "next/image";
import s from "./AboutCompany.module.scss";
import img from "@/assets/about.jpg";

const AboutCompany = () => {
  return (
    <section id="about" className={s.aboutCompany}>
      <div className="container">
        <h1 className={s.title}>О Компании</h1>

        <div className={s.hero}>
          <div className={s.heroContent}>
            <h2>Наша история и философия</h2>
            <p>
              Добро пожаловать в мир стиля и моды! Наша компания начала свой
              путь с желания предложить одежду, которая подчеркивает
              индивидуальность и комфорт каждого клиента.
            </p>
            <p>
              С момента основания в 2015 году мы стремимся создавать коллекции,
              сочетающие в себе актуальные тренды, качество материалов и
              доступность.
            </p>
          </div>

          <div className={s.imageContainer}>
            <Image
              src={img}
              alt="О нашей компании"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className={s.missionSection}>
          <div className={s.missionCard}>
            <h2>Наша миссия</h2>
            <p>
              Создавать стильную и качественную одежду, которая позволяет людям
              выражать себя и чувствовать уверенность каждый день.
            </p>
          </div>
        </div>

        <div className={s.valuesSection}>
          <h2>Наши ценности</h2>

          <div className={s.valuesGrid}>
            <div className={s.valueCard}>
              <div className={s.valueIcon}>
                {/* SVG 1 */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#771011"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Качество</h3>
              <p>
                Мы используем только проверенные ткани и материалы, контролируя
                каждый этап производства.
              </p>
            </div>

            <div className={s.valueCard}>
              <div className={s.valueIcon}>
                {/* SVG 2 */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z"
                    stroke="#771011"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 14V23L12 20L16 23V14"
                    stroke="#771011"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Стиль</h3>
              <p>
                Наши дизайнеры следят за последними трендами, чтобы предложить
                вам актуальные образы.
              </p>
            </div>

            <div className={s.valueCard}>
              <div className={s.valueIcon}>
                {/* SVG 3 */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#771011"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 16V12"
                    stroke="#771011"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 8H12.01"
                    stroke="#771011"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Уверенность</h3>
              <p>
                Мы создаём одежду, в которой вы чувствуете себя уверенно и
                стильно в любой ситуации.
              </p>
            </div>

            <div className={s.valueCard}>
              <div className={s.valueIcon}>
                {/* SVG 4 */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                    stroke="#771011"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                    stroke="#771011"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Ответственность</h3>
              <p>
                Мы заботимся об окружающей среде и поддерживаем устойчивое
                производство одежды.
              </p>
            </div>
          </div>
        </div>

        <div className={s.approachSection}>
          <h2>Наш подход</h2>

          <div className={s.approachSteps}>
            <div className={s.step}>
              <div className={s.stepNumber}>01</div>
              <h3>Идея и вдохновение</h3>
              <p>
                Мы черпаем вдохновение в мировой моде и культуре для создания
                уникальных коллекций.
              </p>
            </div>

            <div className={s.step}>
              <div className={s.stepNumber}>02</div>
              <h3>Выбор материалов</h3>
              <p>
                Только качественные и комфортные ткани, которые приятно носить.
              </p>
            </div>

            <div className={s.step}>
              <div className={s.stepNumber}>03</div>
              <h3>Производство</h3>
              <p>Современное оборудование и внимание к каждой детали.</p>
            </div>

            <div className={s.step}>
              <div className={s.stepNumber}>04</div>
              <h3>Контроль качества</h3>
              <p>
                Тщательная проверка каждой единицы одежды перед поступлением в
                магазин.
              </p>
            </div>
          </div>
        </div>

        <div className={s.cta}>
          <h2>Создайте свой стиль вместе с нами</h2>
          <p>
            Откройте для себя моду, созданную с любовью и вниманием к деталям
          </p>
          <a href="/catalog" className={s.catalogBtn}>
            Смотреть каталог
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
