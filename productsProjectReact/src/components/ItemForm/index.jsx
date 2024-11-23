import React, { useState } from "react";
import styles from "./style.module.css";

const ItemForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Продукты");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;

    onAdd({
      name,
      quantity,
      price: parseFloat(price) || 0,
      category,
    });

    setName("");
    setQuantity(1);
    setPrice("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Название товара"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
        required
      />
      <input
        type="number"
        placeholder="Количество"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className={styles.input}
        min="1"
      />
      <input
        type="number"
        placeholder="Цена"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className={styles.input}
        step="0.01"
        min="0"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={styles.input}
      >
        <option>Продукты</option>
        <option>Молочные продукты</option>
        <option>Напитки</option>
      </select>
      <button type="submit" className={styles.addButton}>
        Добавить
      </button>
    </form>
  );
};

export default ItemForm;
