"use client";
import { useState, useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import Image from "next/image";
import Link from "next/link";
import s from "./Catalog.module.scss";

interface IProduct {
  id: string;
  title: string;
  images: string[]; // images dizisine güncellenmiş
  category: string;
}

const categories = [
  "Все",
  "Юбки",
  "Платья",
  "Блузки",
  "Двойки",
  "Спорт костюмы",
];

const Catalog = () => {
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
  const [selectedCategory, setSelectedCategory] = useState<string>("Все");
  const [isMobile, setIsMobile] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Client-side kontrolü
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Ekran boyutunu takip etme
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    // İlk kontrol
    checkMobile();

    // Pencere boyutu değiştiğinde kontrol
    window.addEventListener("resize", checkMobile);

    // Temizleme fonksiyonu
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const filteredProducts =
    selectedCategory === "Все"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Favoriye ekleme fonksiyonu (henüz implement edilmedi)
  const toggleFavorite = (productId: string) => {
    // Gelecekte favorilere ekleme mantığı buraya eklenecek
    console.log(`Favorilere eklendi: ${productId}`);
  };

  // Mobil cihazlarda kategorileri açma/kapama
  const toggleFilters = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  // Client-side rendering kontrolü
  if (!isClient) {
    return null; // veya placeholder içerik
  }

  return (
    <section className={s.catalog}>
      <div className="container">
        <div className={s.content}>
          {/* Mobil cihazlar için kategorileri açma butonu */}
          {isMobile && (
            <button className={s.mobileFilterToggle} onClick={toggleFilters}>
              {isFilterOpen ? "Закрыть категории" : "Открыть категории"}
            </button>
          )}

          <div
            className={`
              ${s.filters} 
              ${isMobile && !isFilterOpen ? s.mobileHidden : ""}
            `}
          >
            <h2>Категории</h2>
            <div className={s.categoryList}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`${s.categoryBtn} ${
                    selectedCategory === category ? s.active : ""
                  }`}
                  onClick={() => {
                    setSelectedCategory(category);
                    if (isMobile) {
                      setIsFilterOpen(false);
                    }
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className={s.productsSection}>
            {filteredProducts.length > 0 ? (
              <div className={s.grid}>
                {filteredProducts.map((product) => (
                  <Link
                    href={`/catalog/${product.id}`}
                    key={product.id}
                    className={s.productCard}
                  >
                    <div className={s.imageContainer}>
                      {product.images && product.images.length > 0 ? (
                        <Image
                          src={product.images[0]}
                          alt={product.title}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className={s.noImage}>Нет изображения</div>
                      )}
                      <button
                        className={s.favoriteBtn}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleFavorite(product.id);
                        }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className={s.productInfo}>
                      <h3>{product.title}</h3>
                      <p className={s.category}>{product.category}</p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className={s.noResults}>
                <p>Ничего не найдено</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
