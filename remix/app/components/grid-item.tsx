import { Image } from "@crystallize/react-image";
import { Link } from "remix";

export const GridItem = ({ cell }) => {
  const getLastItem = (url) => url.substring(url.lastIndexOf("/") + 1);

  return cell.layout.colspan === 3 ? (
    <Link to={getLastItem(cell.item.path)}>
      <div className="flex relative">
        <Image
          {...cell.item.variants[0]?.images[0]}
          className="absolute top-0 bottom-0 right-0  w-8/12 overflow-hidden rounded-r-xl"
        />
        <div className="flex flex-col justify-evenly w-128  px-5 bg-background1 h-80 p-5 rounded-xl">
          <div className="w-60">
            <h2 className="text-3xl font-bold">{cell.item.name}</h2>
            <p className="mt-4">${cell.item.variants[0]?.price}</p>
          </div>
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
        </div>
      </div>
    </Link>
  ) : (
    <Link to={getLastItem(cell.item.path)}>
      <div className={`flex flex-col bg-background3 p-5 rounded-xl h-106`}>
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
        <Image {...cell.item.variants[0]?.images[0]} />
        <h2 className="text-3xl font-bold text-center w-40 m-auto">
          {cell.item.name}
        </h2>
      </div>
    </Link>
  );
};
