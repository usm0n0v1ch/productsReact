import React from "react";
import styles from "./style.module.css";

const Filter = ({ categories, setFilter }) => {
  return (
    <div className={styles.filter}>
      <select onChange={(e) => setFilter(e.target.value)} className={styles.select}>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
