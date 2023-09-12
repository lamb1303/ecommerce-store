"use client";

import useCart from "@/hooks/use-cart";
import UsePreviewModal from "@/hooks/use-preview-modal";
import { Product } from "@/types";
import { ShoppingCart } from "lucide-react";
import React, { MouseEventHandler } from "react";
import Button from "./ui/Button";
import Currency from "./ui/currency";
interface InfoProps {
  data: Product;
}
const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();
  const previewModal = UsePreviewModal();
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    // Overwrite the main div: Fact with the on click
    event.stopPropagation();

    cart.addItem(data);
    previewModal.onClose();
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
        <hr className="my-4" />
        <div className="flex flex-col gap-y-6">
          <div className="flex items-center gap-x-4">
            <h3 className="font-semibold text-black">Size:</h3>
            <div>{data?.size?.name}</div>
          </div>
          <div className="flex items-center gap-x-4">
            <h3 className="font-semibold text-black">Color:</h3>
            <div
              className="h-6 w-6 rounded-full border border-gray-500"
              style={{ backgroundColor: data?.color?.value }}
            />
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          Add To Cart
        </Button>
        <ShoppingCart />
      </div>
    </div>
  );
};

export default Info;
