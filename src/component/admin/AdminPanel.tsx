"use client";
import { useState, useEffect } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import Image from 'next/image';
import s from './AdminPanel.module.scss';

interface IProduct {
  id: string;
  title: string;
  images: string[]; 
  category: string;
  description: string;
}

const categories = [
  "Юбки",
  "Платья", 
  "Блузки",
  "Двойки",
  "Спорт костюмы"
];

const AdminPanel = () => {
  const [isClient, setIsClient] = useState(false);
  const [products, setProducts] = useLocalStorage<IProduct[]>(
    'products', 
    [], 
    (storedValue) => {
      return storedValue.map((product:any) => {
        if ('image' in product && !('images' in product)) {
          return {
            ...product,
            images: (product as any).image ? [(product as any).image] : []
          };
        }
        return product;
      });
    }
  );

  const [newProduct, setNewProduct] = useState<Partial<IProduct>>({
    title: '',
    category: '',
    description: '',
    images: []
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newImages: string[] = [];

    Array.from(files).forEach(file => {
      const maxSize = 800 * 1024; // 800KB
      if (file.size > maxSize) {
        if (!window.confirm('Изображение большого размера. Продолжить загрузку?')) {
          return;
        }
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        newImages.push(base64String);

        if (newImages.length === files.length) {
          setNewProduct(prev => ({
            ...prev, 
            images: [...(prev.images || []), ...newImages]
          }));
        }
      };
      reader.onerror = () => {
        alert('Ошибка при загрузке изображения');
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (indexToRemove: number) => {
    setNewProduct(prev => ({
      ...prev,
      images: prev.images?.filter((_, index) => index !== indexToRemove)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.title || !newProduct.images || newProduct.images.length === 0 || !newProduct.category) {
      alert('Заполните обязательные поля');
      return;
    }

    const product: IProduct = {
      id: Date.now().toString(),
      title: newProduct.title || '',
      images: newProduct.images || [],
      category: newProduct.category || '',
      description: newProduct.description || ''
    };

    setProducts([...products, product]);
    setNewProduct({
      title: '',
      category: '',
      description: '',
      images: []
    });
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Вы уверены, что хотите удалить этот товар?')) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  if (!isClient) {
    return (
      <div className={s.loading}>
        <div className={s.spinner}></div>
      </div>
    );
  }

  return (
    <div className={s.adminPanel}>
      <div className="container">
        <form onSubmit={handleSubmit} className={s.addForm}>
          <h2>Добавить новый товар</h2>
          
          <div className={s.formGroup}>
            <label>Название*</label>
            <input
              type="text"
              value={newProduct.title}
              onChange={(e) => setNewProduct(prev => ({ ...prev, title: e.target.value }))}
              placeholder="Введите название товара"
              required
            />
          </div>

          <div className={s.formGroup}>
            <label>Категория*</label>
            <select
              value={newProduct.category}
              onChange={(e) => setNewProduct(prev => ({ ...prev, category: e.target.value }))}
              required
              className={s.select}
            >
              <option value="">Выберите категорию</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className={s.formGroup}>
            <label>Описание</label>
            <textarea
              value={newProduct.description}
              onChange={(e) => setNewProduct(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Введите описание товара"
            />
          </div>

          <div className={s.imageUpload}>
            <label>Изображения*</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className={s.fileInput}
            />
            {newProduct.images && newProduct.images.length > 0 && (
              <div className={s.previewContainer}>
                {newProduct.images.map((image, index) => (
                  <div key={index} className={s.previewItem}>
                    <div style={{ position: 'relative', width: '150px', height: '150px' }}>
                      <Image
                        src={image}
                        alt={`Preview ${index + 1}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="150px"
                      />
                      <button 
                        type="button"
                        onClick={() => removeImage(index)}
                        className={s.removeImageBtn}
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button type="submit" className={s.submitBtn}>
            Добавить товар
          </button>
        </form>

        <div className={s.productsList}>
          <h2>Список товаров</h2>
          <div className={s.grid}>
            {products.map(product => (
              <div key={product.id} className={s.productCard}>
                <div className={s.imageContainer}>
                  <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                    {product.images && product.images.length > 0 ? (
                      <Image
                        src={product.images[0]} 
                        alt={product.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    ) : (
                      <div className={s.noImage}>Нет изображения</div>
                    )}
                  </div>
                </div>
                <div className={s.productInfo}>
                  <h3>{product.title}</h3>
                  <p className={s.category}>{product.category}</p>
                  {product.description && (
                    <p className={s.description}>{product.description}</p>
                  )}
                  <div className={s.additionalImages}>
                    {product.images && product.images.slice(1).map((image, index) => (
                      <div 
                        key={index} 
                        className={s.thumbnailContainer}
                      >
                        <Image
                          src={image}
                          alt={`Thumbnail ${index + 2}`}
                          width={50}
                          height={50}
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => handleDelete(product.id)}
                    className={s.deleteBtn}
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;