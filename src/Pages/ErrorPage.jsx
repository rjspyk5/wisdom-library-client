import { useNavigate, useRouteError } from "react-router-dom";
import er from "../assets/image/404.png";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div id="error-page">
      <section className=" ">
        <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
          <div className="flex flex-col items-center max-w-sm mx-auto text-center">
            <p className="p-3 text-sm font-medium text-blue-500 rounded-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            </p>
            <h1 className="mt-3 text-2xl font-semibold md:text-3xl">Oops!</h1>
            <img src={er} alt="" />
            <p className="mt-4 ">Sorry, an unexpected error has occurred.</p>
            <p className="mt-4">
              <i>{error.statusText || error.message}</i>
            </p>

            <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center justify-center w-1/2 px-5 py-2 text-sm bg-lime-500 text-white transition-colors duration-200 border rounded-lg gap-x-2 sm:w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>

                <span>Go back</span>
              </button>

              <button
                onClick={() => navigate("/")}
                className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
              >
                Take me home
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
