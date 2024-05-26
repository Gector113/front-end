import React from "react";
import Button from "./Button";

function BreadItem({ id, name, price, imageUrl, count, addBreadToCart }) {
  return (
    <div className="bread">
      <img src={imageUrl} alt="bread img" className="bread__img" width={260} height={350} />
      <div className="bread__name">{name}</div>
      <div className="bread__price">{price}грн</div>
      <div className="bread__add">
        <div className="bread__count">{count !== 0 && count}</div>
        <Button onClick={() => addBreadToCart(id)}>add</Button>
      </div>
    </div>
  );
}

export default BreadItem;
