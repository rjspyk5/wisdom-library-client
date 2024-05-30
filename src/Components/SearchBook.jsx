import { useState } from "react";

export const SearchBook = ({ handleSearch }) => {
  const [searchText, setsearchText] = useState("");
  return (
    <div>
      <form onSubmit={(e) => handleSearch(e, searchText, setsearchText)}>
        <div className="flex gap-1">
          <label className="input flex-1 md:min-h-10 min-h-8 md:h-10 h-8  max-w-30 md:max-w-40 input-bordered flex items-center gap-2">
            <input
              onChange={(e) => setsearchText(e.target.value)}
              value={searchText}
              type="text"
              name="search"
              className="grow"
              placeholder="Search"
            />
          </label>
          <input
            value="Search Now"
            type="submit"
            className="btn md:min-h-10 min-h-8 md:h-10 h-8"
          />
        </div>
      </form>
    </div>
  );
};
