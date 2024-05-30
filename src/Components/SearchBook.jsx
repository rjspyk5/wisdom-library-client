export const SearchBook = ({ handleSearch }) => {
  return (
    <div>
      <form onSubmit={(e) => handleSearch(e, e.target.search.value)}>
        <div className="flex gap-1">
          <label className="input flex-1 md:min-h-10 min-h-8 md:h-10 h-8  max-w-30 md:max-w-40 input-bordered flex items-center gap-2">
            <input
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
