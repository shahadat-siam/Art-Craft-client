import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center gap-7 justify-center mt-32">
      <h2 className="text-6xl">
        404 page not found 
      </h2>
      <Link
        to="/"
        className="px-5 py-2 text-xl font-semibold text-[#8CB9BD] border border-[#8CB9BD] rounded-lg"
      >
        Go back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
