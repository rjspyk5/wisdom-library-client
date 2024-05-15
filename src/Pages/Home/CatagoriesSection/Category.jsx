import { useLoaderData, useParams } from "react-router-dom";
import { HeadingSection } from "../../../Components/HeadingSection";

import { StylishCard } from "../../../Components/StylishCard";

export const Category = () => {
  const { category } = useParams();
  const books = useLoaderData();

  return (
    <div className="px-8 max-w-[1150px] mx-auto">
      <HeadingSection
        heading={`All ${category} books`}
        subheading={`Explore a diverse range of ${category} books, from timeless classics to contemporary bestsellers.`}
      />

      <div className="gap-4 md:gap-8 grid grid-cols-1 md:grid-cols-2 mb-14 lg:grid-cols-3">
        {books?.map((el) => (
          <StylishCard key={el._id} book={el} button={true} />
        ))}
      </div>
    </div>
  );
};
