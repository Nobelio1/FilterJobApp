import { useFilterJobStore } from "../store";

export const FilterItem = ({ name }: { name: string }) => {
  const { removeFilter } = useFilterJobStore();

  return (
    <div className="">
      <div className="flex rounded-md bg-teal-50 h-8 overflow-hidden">
        <div className=" text-teal-600 px-2 font-semibold flex items-center">
          <p>{name}</p>
        </div>
        <div className="bg-teal-600 hover:bg-teal-900 w-8 flex items-center px-2">
          <button onClick={() => removeFilter(name)}>
            <img
              src="./img/icon-remove.svg"
              alt="remove"
              className="w-4 object-contain"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
