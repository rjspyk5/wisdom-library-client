import { Carasoul } from "./Carasoul";
import "animate.css";
import { HeadingSection } from "./../../Components/HeadingSection";
import { Catagories } from "./CatagoriesSection/Catagories";
import { ContactUs } from "../../Components/ContactUs";
import { HowToBorrowBook } from "../../Components/HowToBorrowBook";
import { Facilites } from "../../Components/Facilites";

export const Home = () => {
  return (
    <>
      <div className="relative  animate__animated animate__fadeIn animate__slower ">
        <Carasoul />
      </div>
      <div>
        <HeadingSection
          heading="Catagories"
          subheading="Browse through our range of categories to find your next literary adventure"
        />
      </div>
      <div>
        <Catagories />
      </div>
      <div>
        <Facilites />
      </div>
      <div>
        <HeadingSection
          heading="Easy Steps to Borrowing a Book"
          subheading="Follow these simple steps to borrow books from our library and dive into your next adventure!"
        />
        <HowToBorrowBook />
      </div>

      <ContactUs />
    </>
  );
};
