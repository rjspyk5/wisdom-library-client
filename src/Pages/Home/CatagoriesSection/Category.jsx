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

      <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {books?.map((el) => (
          <StylishCard key={el._id} book={el} button={true} />
        ))}
      </div>
    </div>
  );
};
