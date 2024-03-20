import { Link } from "react-router-dom";

import api from "../utils/api";

import { useState, useEffect } from "react";

export default function Shop(props) {
  const { products } = props;

  return (
    <div className="bg-white relative z-20">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product-overview/${product.id}`}
              className="group"
            >
              <div
                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
                key={product.id}
              >
                <img
                  src={product.images[0].name}
                  alt={product.images[0].alt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                ${product.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
