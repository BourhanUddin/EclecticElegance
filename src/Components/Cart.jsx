import React from "react";
import { useLoaderData } from "react-router-dom";
import CardItem from "./Cards/CardItem";

const Cart = () => {
  const { cartArr } = useLoaderData();
  //    console.log(cartArr);
  //    console.log(products);

  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">
        <h2 className="text-xl font-semibold">
          {cartArr.length ? "Review Cart Item" : "Cart is EMPTY"}
        </h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          {cartArr.map((product) => (
            <CardItem key={product.id} product={product}></CardItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
