import React from "react";
import Button from "../components/Button";
import BreadItem from "../components/BreadItem";

function Home({ items, setItems }) {
  const addBreadToCart = (id) => {
    setItems((prev) => {
      const newObjs = prev.map((obj) => {
        if (obj.id === id) {
          obj.count = obj.count + 1;
        }
        return obj;
      });
      return newObjs;
    });
  };

  return (
    <div className="page">
      <div className="pageflex">
        {items?.length !== 0 ? (
          items.map((obj) => (
            <BreadItem
              key={`${obj.id}_${obj.name}`}
              id={obj.id}
              name={obj.name}
              price={obj.price}
              imageUrl={obj.imageUrl}
              count={obj.count}
              addBreadToCart={addBreadToCart}
            />
          ))
        ) : (
          <div className="empty">Загрузка...</div>
        )}
      </div>
    </div>
  );
}

export default Home;
