import { Link } from "remix";
import Error from "../../assets/error.svg";

export const ErrorComponent = () => {
  return (
    <div className="lg:w-content w-full mx-auto flex flex-col mt-20 gap-5 items-center justify-center">
      <img src={`${Error}`} />
      <p className="text-text text-center">Someone ate the wrong doughnut.</p>
      <Link prefetch="intent" to="/" className="bg-white font-semibold px-5 py-3 w-60 text-center">
        Get me out of here
      </Link>
    </div>
  );
};
