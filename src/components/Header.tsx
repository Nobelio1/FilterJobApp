import { useFilterJobStore } from "../store";
import { FilterItem } from "./FilterItem";

export const Header = () => {
  const { activeFilter, removeAll } = useFilterJobStore();

  //margin-boton condicional

  return (
    <>
      <header className="w-full bg-header-color bg-center bg-header h-36"></header>
      {activeFilter.length > 0 ? (
        <div className="flex justify-center">
          <div className="w-5/6 bg-white relative -top-10 rounded-md py-6 px-8 shadow flex justify-between">
            <div className="grid grid-cols-2 md:flex gap-x-6 md:gap-x-4 gap-y-2 place-items-start">
              {activeFilter.map((filter, i) => (
                <FilterItem key={i} name={filter} />
              ))}
            </div>

            <div className="flex justify-center items-center font-semibold">
              <button
                onClick={() => removeAll()}
                className="text-gray-500 hover:text-teal-600 hover:underline text-md"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-12"></div>
      )}
    </>
  );
};
