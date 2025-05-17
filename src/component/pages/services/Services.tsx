"use client";
import React, { useState } from "react";
import Image from "next/image";
import s from "./Services.module.scss";
import img1 from "@/assets/services.jpg";
import img2 from "@/assets/services1.jpg";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`${s.serviceCard} ${isActive ? s.active : ""}`}
      onClick={onClick}
    >
      <div className={s.serviceIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={s.readMore}>
        {isActive ? "Подробнее" : "Узнать больше"}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12H19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 5L19 12L12 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

const Services = () => {
  const [activeService, setActiveService] = useState<number>(0);

  const services = [
    {
      title: "Индивидуальный подбор одежды",
      description:
        "Наши стилисты помогут вам подобрать идеальный образ, учитывая ваш стиль, особенности фигуры и цветотип.",
      detailedDescription:
        "Индивидуальный подход к каждому клиенту позволяет нам создавать уникальные образы, которые отражают вашу личность и подчеркивают достоинства фигуры. Консультация включает анализ цветотипа, подбор фасонов и создание капсульного гардероба.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z"
            stroke="#771011"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Пошив на заказ",
      description:
        "Предлагаем услуги индивидуального пошива одежды по вашим меркам с выбором тканей и фасонов.",
      detailedDescription:
        "Наши опытные мастера создадут для вас эксклюзивные предметы гардероба с учетом ваших предпочтений и особенностей фигуры. Вы можете выбрать из широкого ассортимента премиальных тканей и фурнитуры.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 2L18 2"
            stroke="#771011"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8L12 23"
            stroke="#771011"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 19H19"
            stroke="#771011"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 2L22 2C22 4.66667 22 6 20 8C18 10 18 11 18 15C18 19 18 23 18 23"
            stroke="#771011"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 2L2 2C2 4.66667 2 6 4 8C6 10 6 11 6 15C6 19 6 23 6 23"
            stroke="#771011"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Подгонка одежды",
      description:
        "Служба подгонки одежды обеспечит идеальную посадку любой вещи из нашего магазина.",
      detailedDescription:
        "Мы предлагаем профессиональные услуги по подгонке одежды, чтобы обеспечить идеальную посадку по фигуре. Мелкие корректировки выполняются бесплатно при покупке изделия в нашем магазине.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
            stroke="#771011"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 10L12 15L17 10"
            stroke="#771011"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 15V3"
            stroke="#771011"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Доставка",
      description:
        "Бесплатная доставка при заказе от 5000 рублей. Экспресс-доставка в день заказа.",
      detailedDescription:
        "Мы предлагаем удобные варианты доставки: стандартную, экспресс и самовывоз. При заказе на сумму от 5000 рублей — доставка бесплатная. Экспресс-доставка в день заказа доступна в центральных районах города.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path
            d="M16 16V4H4V16"
            stroke="#771011"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 12V16"
            stroke="#771011"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="4"
            y="16"
            width="16"
            height="4"
            stroke="#771011"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Программа лояльности",
      description:
        "Накопительная система скидок для постоянных клиентов и специальные предложения.",
      detailedDescription:
        "Наша программа лояльности предоставляет постоянным клиентам эксклюзивные привилегии: накопительные скидки до 20%, раннее оповещение о новых коллекциях, приглашения на закрытые презентации и персональные предложения.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 12V22H4V12"
            stroke="#771011"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 7H2V12H22V7Z"
            stroke="#771011"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 22V7"
            stroke="#771011"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z"
            stroke="#771011"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z"
            stroke="#771011"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Стилистические консультации онлайн",
      description:
        "Воспользуйтесь услугой онлайн-консультации с нашими стилистами через видеозвонок.",
      detailedDescription:
        "Не можете посетить наш магазин? Наши стилисты проведут персональную консультацию через видеозвонок, помогут с подбором гардероба и ответят на все вопросы о стиле и моде.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path
            d="M23 7L16 12L23 17V7Z"
            stroke="#771011"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="1"
            y="5"
            width="15"
            height="14"
            rx="2"
            stroke="#771011"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className={s.services}>
      <div className="container">
        <h1 className={s.title}>Наши услуги</h1>

        <div className={s.servicesGrid}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              isActive={activeService === index}
              onClick={() => setActiveService(index)}
            />
          ))}
        </div>

        <div className={s.serviceDetail}>
          <div className={s.detailContent}>
            <h2>{services[activeService].title}</h2>
            <p>{services[activeService].detailedDescription}</p>

            <div className={s.featureList}>
              <div className={s.feature}>
                <div className={s.featureIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="#771011"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p>Индивидуальный подход к каждому клиенту</p>
              </div>
              <div className={s.feature}>
                <div className={s.featureIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="#771011"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p>Опытные специалисты с профильным образованием</p>
              </div>
              <div className={s.feature}>
                <div className={s.featureIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="#771011"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p>Гарантия качества на все предоставляемые услуги</p>
              </div>
            </div>

            <a href="/contact" className={s.orderBtn}>
              Заказать услугу
            </a>
          </div>

          <div className={s.detailImage}>
            <div className={s.imageWrapper}>
              <h1>hello</h1>
              <Image
                src={activeService ? img1 : img2}
                alt={services[activeService].title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>

        <div className={s.approachSection}>
          <h2>Наш подход</h2>

          <div className={s.approachContent}>
            <div className={s.approachImagesGrid}>
              <div className={s.approachImageWrapper}>
                <Image
                  src={img1}
                  alt="Наш подход к работе"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
              </div>
              <div className={s.approachImageWrapper}>
                <Image
                  src={img2}
                  alt="Наш подход к работе"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
              </div>
            </div>

            <div className={s.approachText}>
              <div className={s.approachItem}>
                <h3>Индивидуальность превыше всего</h3>
                <p>
                  Мы верим, что одежда — это способ самовыражения. Наша команда
                  стремится помочь каждому клиенту найти свой уникальный стиль,
                  подчеркивающий индивидуальность.
                </p>
              </div>

              <div className={s.approachItem}>
                <h3>Качество без компромиссов</h3>
                <p>
                  Мы тщательно отбираем каждую вещь в нашей коллекции, уделяя
                  особое внимание качеству материалов, пошиву и долговечности.
                  Наша одежда создана служить вам долгие годы.
                </p>
              </div>

              <div className={s.approachItem}>
                <h3>Долгосрочные отношения</h3>
                <p>
                  Мы не стремимся к единоразовым продажам. Наша цель — стать
                  вашим постоянным модным консультантом, сопровождая вас на пути
                  к созданию идеального гардероба.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={s.cta}>
          <h2>Готовы создать свой уникальный стиль?</h2>
          <p>
            Откройте для себя новые возможности с нашими премиальными услугами
          </p>
          <a href="/contact" className={s.contactBtn}>
            Связаться с нами
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
