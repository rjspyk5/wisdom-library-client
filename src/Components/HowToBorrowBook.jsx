import im from "../assets/image/borrow/borrow2.jpg";
export const HowToBorrowBook = () => {
  return (
    <div className="">
      <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
        <div className="lg:pl-12 order-2 lg:order-1">
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 "
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full" />
            </div>
            <div className="pt-1 pb-4">
              <p className="mb-2 text-lg font-bold">Step 1</p>
              <p className="">
                Create an account with us to access our library services. Simply
                sign up with your email address and create a password to get
                started.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 "
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full " />
            </div>
            <div className="pt-1 pb-4">
              <p className="mb-2 text-lg font-bold">Step 2</p>
              <p className="">
                Browse our collection and click on a book to view its details.
                Get a glimpse of the book's summary, author information, and
                availability.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 "
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full" />
            </div>
            <div className="pt-1 pb-4">
              <p className="mb-2 text-lg font-bold">Step 3</p>
              <p className="">
                Once you've found a book you'd like to borrow, click on the
                "Borrow" button. Confirm your selection, and the book will be
                added to your account.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 "
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full " />
            </div>
            <div className="pt-1 pb-4">
              <p className="mb-2 text-lg font-bold">Step 4</p>
              <p className="">
                Choose a return date for the borrowed book. Select a date that
                works best for you, ensuring you have enough time to enjoy the
                book before returning it.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-6 "
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <polyline
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      points="6,12 10,16 18,8"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="pt-1">
              <p className="mb-2 text-lg font-bold">Success</p>
              <p className="" />
            </div>
          </div>
        </div>
        <div className="relative mb-4 lg:mb-0 flex justify-center items-center">
          <div className="hero-overlay bg-opacity-20 w-full absolute"></div>
          <img
            className=" w-full  rounded-xl shadow-lg h-[300px] md:h-[504px]  "
            src={im}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
