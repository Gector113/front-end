import React from "react";
import Button from "../components/Button";
import CartItem from "../components/CartItem";

function Cart({ items, setItems }) {
  const plusOne = (id) => {
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

  const minusOne = (id) => {
    setItems((prev) => {
      const newObjs = prev.map((obj) => {
        if (obj.id === id) {
          obj.count = obj.count - 1;
        }
        return obj;
      });
      return newObjs;
    });
  };

  const removeAll = (id) => {
    if (window.confirm("Ви точно хочете видалити товар з корзини?")) {
      setItems((prev) => {
        const newObjs = prev.map((obj) => {
          if (obj.id === id) {
            obj.count = 0;
          }
          return obj;
        });
        return newObjs;
      });
    }
  };

  return (
    <div className="page">
      <div className="pageflex">
        {items?.length !== 0 ? (
          items.map((obj) => (
            <CartItem
              key={`${obj.id}_${obj.name}`}
              id={obj.id}
              name={obj.name}
              price={obj.price}
              imageUrl={obj.imageUrl}
              count={obj.count}
              plusOne={plusOne}
              minusOne={minusOne}
              removeAll={removeAll}
            />
          ))
        ) : (
          <div className="empty">Корзина пуста</div>
        )}
      </div>
    </div>
  );
}

export default Cart;
