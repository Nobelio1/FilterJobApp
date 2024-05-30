import { useFilterJobStore } from "../store";
import { Job } from "../types";

type JobCardProps = {
  job: Job;
};

export const JobCard = ({ job }: JobCardProps) => {
  const { addFilter } = useFilterJobStore();

  //absolute -top-5 z-20

  return (
    <div className="w-5/6 text-sm bg-white rounded-md shadow-md">
      <div className="flex">
        {/* Franaja-Featured */}
        {job.characteristics && (
          <div className="bg-teal-600 w-1 rounded-s-md"></div>
        )}
        {/* body */}
        <div className="flex flex-col md:flex-row w-full justify-between px-6 py-7  md:items-center">
          {/* desc */}
          <div className="flex flex-col relative md:flex-row gap-1 md:items-center">
            <div className="mr-3 absolute -top-12 z-20 md:relative md:top-0 ">
              <div className="w-10 md:w-20">
                <img
                  src={`./img/${job.name.toLowerCase()}.svg`}
                  alt="logo-job"
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <p className=" mr-4 text-teal-600 font-semibold">{job.name}</p>
                {job.characteristics && (
                  <>
                    <div className="bg-teal-600 rounded-full h-5 w-12 pt-1 flex items-center justify-center mr-1">
                      <p className="text-white font-semibold ">NEW!</p>
                    </div>
                    {job.characteristics.length > 1 && (
                      <div className="bg-black rounded-full h-5 w-20 pt-1 flex items-center justify-center mr-1">
                        <p className="text-white font-semibold ">FEATURED</p>
                      </div>
                    )}
                  </>
                )}
              </div>
              <div className="mt-2">
                <p className="font-bold text-xl">{job.position}</p>
              </div>
              <div className="mt-1 flex gap-2 text-gray-500">
                <li className="list-none">{job.experience}</li>
                <li>{job.modality}</li>
                <li>{job.modality}</li>
              </div>
            </div>
          </div>
          <div className="divider-min bg-slate-200 my-4 md:hidden"></div>
          {/* feature */}
          <div className="grid grid-cols-3 place-content-start md:flex gap-3 pr-4  md:mt-0 ">
            {job.filters.map((filter) => (
              <div
                key={filter}
                className="bg-teal-50 hover:bg-teal-600 text-teal-600 hover:text-white w-fit py-1 px-2 font-medium rounded-sm text-sm"
              >
                <button onClick={() => addFilter(filter)}>{filter}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
