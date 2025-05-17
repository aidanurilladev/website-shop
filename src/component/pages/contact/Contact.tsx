"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.contact} ${visible ? styles.show : ""}`}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>Свяжитесь с нами</h2>
        <form
          className={styles.form}
          action="https://formspree.io/f/your_form_id"
          method="POST"
        >
          <input type="text" name="name" placeholder="Ваше имя" required />
          <input type="email" name="email" placeholder="Ваш email" required />
          <textarea
            name="message"
            placeholder="Ваше сообщение..."
            rows={5}
            required
          />
          <button type="submit">Отправить</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
