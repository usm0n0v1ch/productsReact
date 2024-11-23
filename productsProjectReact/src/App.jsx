import React, { useState, useEffect } from "react";
import ShoppingList from "./components/ShoppingList";
import ItemForm from "./components/ItemForm";
import Filter from "./components/Filter";
import styles from "./App.module.css";
import Header from "./components/Header";
const App = () => {
  const initialItems = [
    { id: 1, name: "Яблоки", quantity: 1, price: 2, category: "Продукты", purchased: false },
    { id: 2, name: "Молоко", quantity: 2, price: 1.5, category: "Молочные продукты", purchased: true },
    { id: 3, name: "Кофе", quantity: 1, price: 5, category: "Напитки", purchased: false },
  ];

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingList")) || initialItems
  );
  const [filterCategory, setFilterCategory] = useState("Все");

  useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    setItems([...items, { ...item, id: Date.now(), purchased: false }]);
  };

  const updateItem = (id, updatedItem) => {
    setItems(items.map((item) => (item.id === id ? { ...item, ...updatedItem } : item)));
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const togglePurchased = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, purchased: !item.purchased } : item
      )
    );
  };

  const filteredItems = filterCategory === "Все"
    ? items
    : items.filter((item) => item.category === filterCategory);

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={styles.container}>
      <Header/>
      <h1>Список покупок</h1>
      <ItemForm onAdd={addItem} />
      <Filter categories={["Все", "Продукты", "Молочные продукты", "Напитки"]} setFilter={setFilterCategory} />
      <ShoppingList
        items={filteredItems}
        onUpdate={updateItem}
        onDelete={deleteItem}
        onTogglePurchased={togglePurchased}
      />
      <div className={styles.total}>Общая стоимость: {totalPrice} ₽</div>
    </div>
  );
};

export default App;
