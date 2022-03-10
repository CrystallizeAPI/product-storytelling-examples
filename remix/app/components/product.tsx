import { ContentTransformer } from "@crystallize/react-content-transformer";
import { Image } from "@crystallize/react-image";
import { ProductQuery } from "../crystallize/queries/product.generated";
import { componentContent } from "../crystallize/utils/componentContent";
import { ProductBody } from "./product-body";
import { VariantSelector } from "./variant-selector";
import { RelatedProducts } from "./related-products";
import { useBasket } from "./basket";
import { useState } from "react";
import { Notification } from "./basket-notification";

interface ProductProps {
  product: ProductQuery["product"];
}

export const Product = ({ product }: ProductProps) => {
  let item = componentContent(product, "Product");
  const [selectedVariant, setSelectedVariant] = useState(item.variants[0]);
  const basket = useBasket();

  const onVariantChange = (variant) => setSelectedVariant(variant);

  const buy = () => {
  
    basket?.actions?.addItem({
      id: selectedVariant.id,
      sku: selectedVariant.sku,
      path: item.path,
      priceVariantIdentifier: "default",
      stock: selectedVariant.stock,
    });
  };

  return (
    <div className="py-5">
      <div className="flex lg:flex-row flex-col items-center mt-10 mb-5">
        <div className="flex flex-col text-text w-6/12">
          <h1 className="font-extrabold text-5xl mb-3">{item.name}</h1>
          <ContentTransformer
            json={
              componentContent(item.summary.content, "RichTextContent")
                ?.json as [any]
            }
          />
        </div>
        <Image
          {...item.defaultVariant.firstImage}
          sizes="400px"
          className="w-full rounded-sm"
        />
        <div className="flex flex-col">
          <VariantSelector
            variants={item.variants}
            selectedVariant={selectedVariant}
            onVariantChange={onVariantChange}
          />
        </div>
      </div>
      <div className="flex z-10 justify-between lg:w-5/12 w-8/12 mx-auto bg-white p-5 text-text rounded-xl">
        <div>
          <p className="font-semibold text-sm">Total price</p>
          <p className="font-bold text-lg">${selectedVariant.price}</p>
        </div>
        <button
          onClick={() => buy()}
          className="bg-background2 px-4 rounded-xl"
        >
          Add to Cart
        </button>
      </div>
      <div>
        <ProductBody body={item.body} table={item.table} />
        <p className="text-text mb-4 font-semibold">Related do(u)nuts</p>
      </div>
      <RelatedProducts related={item.related} />
    </div>
  );
};
