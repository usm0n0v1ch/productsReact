import React from "react";
import styles from "./style.module.css";

const Item = ({ item, onUpdate, onDelete, onTogglePurchased }) => {
  return (
    <div className={styles.item}>
      <span>{item.name} ({item.quantity} шт.) - {item.price} сум</span>
      <span>Категория: {item.category}</span>
      <button onClick={() => onTogglePurchased(item.id)} className={styles.button}>
        {item.purchased ? "Не куплено" : "Куплено"}
      </button>
      <button onClick={() => onDelete(item.id)} className={styles.deleteButton}>
        Удалить
      </button>
    </div>
  );
};

export default Item;
