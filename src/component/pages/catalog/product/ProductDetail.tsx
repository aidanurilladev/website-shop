"use client";
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useLocalStorage } from "@/hooks/useLocalStorage";
import Image from 'next/image';
import Link from 'next/link';
import s from './ProductDetail.module.scss';

interface IProduct {
  id: string;
  title: string;
  images: string[];
  category: string;
  description: string;
  price: number;
}

const ProductDetail = () => {
  const [isClient, setIsClient] = useState(false);
  const [products] = useLocalStorage<IProduct[]>(
    "products", 
    [], 
    (storedValue: any[]) => {
      return storedValue.map((product: any) => {
        if (product && 'image' in product && !('images' in product)) {
          return {
            ...product,
            images: product.image ? [product.image] : []
          };
        }
        return product;
      });
    }
  );
  
  const [selectedImage, setSelectedImage] = useState(0);
  const params = useParams();
  const productId = params?.id as string;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const product = products.find(p => p.id === productId);

  const handleAddToFavorites = () => {
    console.log(`Favorilere eklendi: ${productId}`);
  };

 

  if (!isClient || !product) {
    return null; 
  }

  return (
    <div className={s.productDetail}>
      <div className="container">
        <div className={s.content}>
          <div className={s.breadcrumbs}>
            <Link href="/">Главная</Link>
            <span>/</span>
            <Link href="/catalog">Каталог</Link>
            <span>/</span>
            <span>{product.title}</span>
          </div>

          <div className={s.productContainer}>
            <div className={s.imageGallery}>
              <div className={s.mainImage}>
                <Image
                  src={product.images[selectedImage]}
                  alt={product.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {product.images.length > 1 && (
                <div className={s.thumbnails}>
                  {product.images.map((image, index) => (
                    <div 
                      key={index} 
                      className={`${s.thumbnail} ${selectedImage === index ? s.active : ''}`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <Image
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="100px"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className={s.productInfo}>
              <h1>{product.title}</h1>
              <p className={s.category}>{product.category}</p>
              
              <div className={s.priceSection}>
                <div className={s.actions}>
                 
                  <button 
                    className={s.favoriteBtn}
                    onClick={handleAddToFavorites}
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
              </div>

              <div className={s.description}>
                <h3>Описание</h3>
                <p>{product.description || 'Описание товара отсутствует'}</p>
              </div>
            </div>
          </div>

       
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;