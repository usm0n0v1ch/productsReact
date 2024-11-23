import React from "react";
import Item from "../Item/index.jsx";
import styles from "./style.module.css";

const ShoppingList = ({ items, onUpdate, onDelete, onTogglePurchased }) => {
  const notPurchased = items.filter((item) => !item.purchased);
  const purchased = items.filter((item) => item.purchased);

  return (
    <div className={styles.list}>
      <h2>Не купленные</h2>
      {notPurchased.map((item) => (
        <Item
          key={item.id}
          item={item}
          onUpdate={onUpdate}
          onDelete={onDelete}
          onTogglePurchased={onTogglePurchased}
        />
      ))}
      <h2>Купленные</h2>
      {purchased.map((item) => (
        <Item
          key={item.id}
          item={item}
          onUpdate={onUpdate}
          onDelete={onDelete}
          onTogglePurchased={onTogglePurchased}
        />
      ))}
    </div>
  );
};

export default ShoppingList;
