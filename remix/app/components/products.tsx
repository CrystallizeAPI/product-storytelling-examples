import { componentContent } from "../crystallize/utils/componentContent";
import { FrontpageQuery } from "@/crystallize/queries/frontpage.generated";
import { Image } from "@crystallize/react-image";
import { Link } from "remix";

interface ProductsProps {
  donuts: FrontpageQuery["donuts"];
}

export const Products = ({ donuts }: ProductsProps) => {
  const getLastItem = (url) => url.substring(url.lastIndexOf("/") + 1);

  return (
    <div className="mt-20">
      <p className="text-lg font-semibold mb-10">Our dounots</p>
      <div className="flex items-start flex-wrap gap-1">
        {donuts.children.map((donut, index) =>
          !componentContent(donut.bundle.content, "BooleanContent").value ? (
            <Link
              to={getLastItem(componentContent(donut, "Product").path)}
              className="flex flex-col bg-primary rounded-xl h-106 p-5"
              style={{ width: "33%" }}
              key={index}
            >
              <div>
                <div className="flex justify-between items-start">
                  <div className="flex gap-1">
                    {donut.topics?.map((topic) => (
                      <div className="text-sm bg-grey px-2 py-1 rounded-2xl" key={topic.name}>{topic.name}</div>
                    ))}
                  </div>
                  <p className="self-end">
                    ${componentContent(donut, "Product").defaultVariant.price}
                  </p>
                </div>
                <Image
                  {...componentContent(donut, "Product").defaultVariant
                    .firstImage}
                />
                <h2 className="text-3xl font-bold text-center m-auto w-40">
                  {componentContent(donut, "Product").name}
                </h2>
              </div>
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
};
