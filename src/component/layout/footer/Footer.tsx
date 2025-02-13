import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import s from './Footer.module.scss';

const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Ekran boyutunu takip etme
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // İlk kontrol
    checkMobile();

    // Pencere boyutu değiştiğinde kontrol
    window.addEventListener('resize', checkMobile);

    // Temizleme fonksiyonu
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Mobil cihazlarda bölüm açma/kapama
  const toggleSection = (section: string) => {
    if (isMobile) {
      setOpenSection(openSection === section ? null : section);
    }
  };

  return (
    <footer id='footer' className={s.footer}>
      <div className="container">
        <div className={s.content}>
          <div className={s.info}>
            <h3 
              className={isMobile && openSection === 'contacts' ? s.open : ''}
              onClick={() => toggleSection('contacts')}
            >
              Контакты
            </h3>
            <div 
              className={`
                ${s.sectionContent} 
                ${isMobile && openSection === 'contacts' ? s.open : ''}
              `}
            >
              <div className={s.contactItem}>
                <p>Телефон:</p>
                <a href="tel:+1234567890">+1234567890</a>
              </div>
              <div className={s.contactItem}>
                <p>Email:</p>
                <a href="mailto:info@example.com">info@example.com</a>
              </div>
              <div className={s.contactItem}>
                <p>Адрес:</p>
                <p>ул. Примерная, 123</p>
              </div>
            </div>
          </div>

          <div className={s.navigation}>
            <h3 
              className={isMobile && openSection === 'navigation' ? s.open : ''}
              onClick={() => toggleSection('navigation')}
            >
              Навигация
            </h3>
            <div 
              className={`
                ${s.sectionContent} 
                ${isMobile && openSection === 'navigation' ? s.open : ''}
              `}
            >
             <div className={s.linkA}>
             <Link href="/">Главная</Link>
              <Link href="/catalog">Каталог</Link>
              <Link href="/about">О нас</Link>
              <Link href="/contacts">Контакты</Link>
             </div>
            </div>
          </div>

          <div className={s.schedule}>
            <h3 
              className={isMobile && openSection === 'schedule' ? s.open : ''}
              onClick={() => toggleSection('schedule')}
            >
              График работы
            </h3>
            <div 
              className={`
                ${s.sectionContent} 
                ${isMobile && openSection === 'schedule' ? s.open : ''}
              `}
            >
              <p>Пн-Пт: 9:00 - 18:00</p>
              <p>Сб: 10:00 - 16:00</p>
              <p>Вс: выходной</p>
            </div>
          </div>
        </div>
        <div className={s.bottom}>
          <div className={s.copyright}>
            <p>© 2024 Все права защищены</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;