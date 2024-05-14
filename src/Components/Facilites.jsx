export const Facilites = () => {
  return (
    <div>
      <section className="py-10  sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Trusted by world class companies, design teams & popular designers
            </h2>
          </div>

          <div className="grid grid-cols-1 mt-12 lg:mt-24 gap-y-12 md:grid-cols-3 gap-x-6">
            <div className="md:px-4 lg:px-10">
              <img
                className="-rotate-1"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/team.jpg"
                alt=""
              />
              <h3 className="mt-8 text-xl font-semibold leading-tight ">
                Quiet Reading Areas
              </h3>
              <p className="mt-4 text-base ">
                Find your quiet corner for undisturbed reading pleasure. Enjoy
                your book in peace and quiet, away from distractions.
              </p>
            </div>

            <div className="md:px-4 lg:px-10">
              <img
                className="rotate-1"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/work.jpg"
                alt=""
              />
              <h3 className="mt-8 text-xl font-semibold leading-tight">
                24/7 Access to Digital Collections
              </h3>
              <p className="mt-4 text-base ">
                Enjoy round-the-clock access to our extensive digital
                collections, accessible anytime, anywhere.
              </p>
            </div>

            <div className="md:px-4 lg:px-10">
              <img
                className="-rotate-1"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/success.jpg"
                alt=""
              />
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
