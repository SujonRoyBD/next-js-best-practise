"use client";
import Image from "next/image";
import React, { useState } from "react";
const productImages = [
  "/assets/images/img1.jpg",
  "/assets/images/img2.jpg",
  "/assets/images/img3.jpg",
  "/assets/images/img4.jpg",
  "/assets/images/img5.jpg",
];
const ProductView = () => {
  const [image, setImage] = useState(productImages[0]);

  return (
    <div>
      <h3 className="text-3xl font-bold text-center text-black leading-normal">
        Product view details page
      </h3>

      <div className="flex justify-center items-center ">
        <Image
          src={image}
          alt="product"
          width={600}
          height={600}
          className="h-[400px] w-[500px] object-contain"
        />
      </div>
      <div className="w-full flex items-center justify-center gap-2">
        {productImages?.map((img, index) => {
          return (
            <div key={index}>
              <button onClick={()=>setImage(img)}>
                <Image
                src={img}
                alt="product"
                width={600}
                height={600}
                className={`h-[120px] w-[120px] object-contain ${img === image ? "border border-black p-1 rounded-[10px]":""}`}
              />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductView;
