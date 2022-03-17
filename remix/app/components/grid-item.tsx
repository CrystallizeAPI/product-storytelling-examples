import { Image } from "@crystallize/react-image";
import { Link } from "remix";

export const GridItem = ({ cell }) => {

  return cell.layout.colspan === 3 ? (
    <Link to={cell?.item?.path} prefetch="intent">
      <div className="flex relative lg:flex-row flex-col">
        <Image
          {...cell.item?.variants[0]?.images[0]}
          sizes="(max-width: 700px) 300px, 500px"
          className="lg:absolute lg:top-0 lg:bottom-0 lg:right-0  lg:w-8/12 overflow-hidden rounded-r-xl"
        />
        <div className="flex flex-col justify-evenly lg:w-128  px-5 bg-background1 h-80 p-5 rounded-xl w-full lg:items-start items-center">
          <div className="w-60 lg:text-left text-center">
            <h2 className="text-3xl font-bold">{cell?.item?.name}</h2>
            <p className="mt-4">${cell.item?.variants[0]?.price}</p>
          </div>
          <div className="flex gap-1">
            {cell.item?.topics?.map((topic) => (
              <div
                className="text-sm bg-grey px-2 py-1 rounded-2xl"
                key={topic.name}
              >
                {topic.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  ) : (
    <Link to={cell.item.path} prefetch="intent">
      <div className="flex flex-col bg-background1 px-5 py-7 rounded-xl lg:h-106 h-full">
        <div className="flex justify-between items-start">
          <div className="flex gap-1">
            {cell.item.topics?.map((topic) => (
              <div
                className="text-sm bg-grey px-2 py-1 rounded-2xl"
                key={topic.name}
              >
                {topic.name}
              </div>
            ))}
          </div>
          <p className="self-end">${cell.item.variants[0]?.price}</p>
        </div>
        <Image
          {...cell.item.variants[0]?.images[0]}
          sizes="(max-width: 700px) 200px, 300px"
          loading="lazy"
        />
        <h2 className="text-3xl font-bold text-center w-40 m-auto">
          {cell.item.name}
        </h2>
      </div>
    </Link>
  );
};
