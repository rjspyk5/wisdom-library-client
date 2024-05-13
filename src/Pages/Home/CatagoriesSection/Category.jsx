import { useLoaderData, useParams } from "react-router-dom";
import { HeadingSection } from "../../../Components/HeadingSection";

import { StylishCard } from "../../../Components/StylishCard";

export const Category = () => {
  const { category } = useParams();
  const books = useLoaderData();

  return (
    <div>
      <HeadingSection
        heading={`All ${category} books`}
        subheading={`Explore a diverse range of ${category} books, from timeless classics to contemporary bestsellers.`}
      />

      <div className="gap-4 md:gap-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books?.map((el) => (
          <StylishCard key={el._id} book={el} button={true} />
        ))}
      </div>
    </div>
  );
};
