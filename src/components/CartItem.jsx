import React from "react";
import Button from "./Button";

function CartItem({ id, name, price, imageUrl, count, minusOne, plusOne, removeAll }) {
  return (
    <div className="bread">
      <img src={imageUrl} alt="bread img" className="bread__img" width={260} height={350} />
      <div className="bread__name">{name}</div>
      <div className="bread__price">{price * count}грн</div>
      <div className="bread__plus-minus">
        <Button onClick={() => minusOne(id)}>-1</Button>
        <div className="bread__count bread__count-cart">{count}</div>
        <Button onClick={() => plusOne(id)}>+1</Button>
      </div>

      <button onClick={() => removeAll(id)} className="button bread__remove-all">
        ✖
      </button>
    </div>
  );
}

export default CartItem;
