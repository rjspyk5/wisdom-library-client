import { HeadingSection } from "./HeadingSection";
import digital from "../assets/image/slider/two.png";
import digital2 from "../assets/image/slider/four.png";
import reading from "../assets/image/slider/reading.png";

export const Facilites = () => {
  return (
    <div>
      <section className="">
        <HeadingSection
          heading="Explore Our  Library Facilities"
          subheading="Discover the range of convenient facilities available at our library to enhance your reading experience"
        />
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            <div className="">
              <img className="md:h-[280px] md:mx-auto" src={reading} alt="" />
              <h3 className="mt-8 text-xl font-semibold leading-tight ">
                Quiet Reading Areas
              </h3>
              <p className="mt-4 text-base ">
                Find your quiet corner for undisturbed reading pleasure. Enjoy
                your book in peace and quiet, away from distractions.
              </p>
            </div>

            <div className="">
              <img className="md:h-[280px]" src={digital2} alt="" />
              <h3 className="mt-8 text-xl font-semibold leading-tight">
                24/7 Access to Digital Collections
              </h3>
              <p className="mt-4 text-base ">
                Enjoy round-the-clock access to our extensive digital
                collections, accessible anytime, anywhere.
              </p>
            </div>

            <div className="">
              <img className="md:h-[280px] md:mx-auto" src={digital} alt="" />
              <h3 className="mt-8 text-xl font-semibold leading-tight ">
                Digital Bookshelf Organization:
              </h3>
              <p className="mt-4 text-base ">
                Organize your digital bookshelf effortlessly with our intuitive
                digital library tools.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
