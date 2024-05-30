import { useEffect } from "react";
import { Header } from "./components/Header";
import { JobCard } from "./components/JobCard";
import { useFilterJobStore } from "./store";

const App = () => {
  const { getJob, jobs } = useFilterJobStore();

  useEffect(() => {
    getJob();
  }, []);

  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center gap-8 mb-10">
        {jobs.map((job) => (
          <JobCard key={job.name} job={job} />
        ))}
      </main>
    </>
  );
};

export default App;
