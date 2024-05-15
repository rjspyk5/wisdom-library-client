import { Carasoul } from "./Carasoul";
import "animate.css";
import { HeadingSection } from "./../../Components/HeadingSection";
import { Catagories } from "./CatagoriesSection/Catagories";
import { ContactUs } from "../../Components/ContactUs";
import { HowToBorrowBook } from "../../Components/HowToBorrowBook";
import { Facilites } from "../../Components/Facilites";
import { Fade } from "react-awesome-reveal";

export const Home = () => {
  return (
    <>
      <div className="relative  animate__animated animate__fadeIn animate__slower ">
        <Carasoul />
      </div>

      <div className="px-3 max-w-[1150px] mx-auto">
        <Fade>
          {" "}
          <div className="pt-10 pb-20 ">
            <HeadingSection
              heading="Catagories"
              subheading="Browse through our range of categories to find your next literary adventure"
            />
            <Catagories />
          </div>
        </Fade>
        <Fade>
          <div>
            <Facilites />
          </div>
        </Fade>
        <Fade>
          <div className="my-24">
            <HeadingSection
              heading="Easy Steps to Borrowing a Book"
              subheading="Follow these simple steps to borrow books from our library and dive into your next adventure!"
            />
            <HowToBorrowBook />
          </div>
        </Fade>
        <Fade>
          {" "}
          <div className="mb-20">
            <ContactUs />
          </div>
        </Fade>
      </div>
    </>
  );
};
