import React, { FC, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./Header.module.scss";
import logo from "@/assets/ad-artistic-letter-logo-design-with-serif-font-in-black-and-white-colors-illustration-vector.jpg";

const Header: FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: "Главная", path: "/" },
    { title: "О компании", path: "/about" },
    { title: "Каталог", path: "/catalog" },
    { title: "Наши услуги", path: "/services" },
    { title: "Карта", path: "#map" },
    { title: "Контакты", path: "#footer" }
  ];

  // Mobil menüyü açma/kapama fonksiyonu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Menü dışına tıklandığında menüyü kapatma
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const menuElement = document.querySelector(`.${s.mobileMenu}`);
      const burgerButton = document.querySelector(`.${s.burgerMenu}`);
      
      if (
        menuElement && 
        !menuElement.contains(event.target as Node) && 
        burgerButton && 
        !burgerButton.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMenuOpen]);

  // Menü öğesine tıklandığında menüyü kapatma
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={s.header}>
      <div className="container">
        <div className={s.content}>
          <div className={s.logo}>
            <Image src={logo} alt="logo" />
          </div>
          
          {/* Burger Menu Button */}
          <button 
            className={`${s.burgerMenu} ${isMenuOpen ? s.open : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Mobile Menu */}
          <div className={`${s.mobileMenu} ${isMenuOpen ? s.open : ''}`}>
            <div className={s.mobileNavContent}>
              {navLinks.map(({ title, path }) =>
                path.startsWith("#") ? (
                  <a 
                    key={path} 
                    href={path} 
                    className={s.link}
                    onClick={closeMenu}
                  >
                    {title}
                  </a>
                ) : (
                  <Link 
                    key={path} 
                    href={path} 
                    className={pathname === path ? s.active : ""}
                    onClick={closeMenu}
                  >
                    {title}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className={s.desktopNav}>
            {navLinks.map(({ title, path }) =>
              path.startsWith("#") ? (
                <a 
                  key={path} 
                  href={path} 
                  className={s.link}
                >
                  {title}
                </a>
              ) : (
                <Link 
                  key={path} 
                  href={path} 
                  className={pathname === path ? s.active : ""}
                >
                  {title}
                </Link>
              )
            )}
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Header;