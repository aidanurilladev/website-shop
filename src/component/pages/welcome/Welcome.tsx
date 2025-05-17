"use client";
import { useState, useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import Image from "next/image";
import Link from "next/link";
import s from "./Welcome.module.scss";

interface IProduct {
  id: string;
  title: string;
  images: string[];
  category: string;
  description: string;
}

const Welcome = () => {
  const [isClient, setIsClient] = useState(false);
  const [products] = useLocalStorage<IProduct[]>(
    "products",
    [],
    (storedValue: any[]) => {
      // Eski verileri yeni formata dönüştür
      return storedValue.map((product: any) => {
        // Eğer 'image' varsa 'images' dizisine çevir
        if (product && "image" in product && !("images" in product)) {
          return {
            ...product,
            images: product.image ? [product.image] : [],
          };
        }
        return product;
      });
    }
  );
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hydration sorunlarını önlemek için client-side kontrolü
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Son eklenen 5 ürünü al
  const sliderProducts = isClient
    ? [...products].sort((a, b) => Number(b.id) - Number(a.id)).slice(0, 5)
    : [];

  // Slider otomatik geçiş
  useEffect(() => {
    if (isClient && sliderProducts.length > 1) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderProducts.length);
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [isClient, sliderProducts.length]);

  // Client-side rendering kontrolü
  if (!isClient) {
    return null; // veya placeholder içerik
  }

  return (
    <section className={s.welcome}>
      <div className="container">
        <div className={s.hero}>
          <div className={s.heroContent}>
            <h1>Выразите свой стиль вместе с нами</h1>
            <p>Современная и стильная одежда для вашего образа</p>
            <Link href="/catalog" className={s.catalogBtn}>
              Смотреть каталог
            </Link>
          </div>

          {sliderProducts.length > 0 && (
            <div className={s.sliderContainer}>
              <div
                className={s.sliderTrack}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {sliderProducts.map((product) => (
                  <div key={product.id} className={s.slide}>
                    <Image
                      src={product.images[0]} // images dizisinden ilk resmi al
                      alt={product.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
              {sliderProducts.length > 1 && (
                <div className={s.dots}>
                  {sliderProducts.map((_, index) => (
                    <button
                      key={index}
                      className={`${s.dot} ${
                        currentSlide === index ? s.active : ""
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* <div className={s.featured}>
          <h2>Популярные товары</h2>
          <div className={s.grid}>
            {products.slice(0, 4).map((product) => (
              <div key={product.id} className={s.productCard}>
                <div className={s.imageContainer}>
                  <Image
                    src={product.images[0]} // images dizisinden ilk resmi al
                    alt={product.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className={s.productInfo}>
                  <h3>{product.title}</h3>
                  <p className={s.category}>{product.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Welcome;
