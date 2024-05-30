import { create } from "zustand";
import { Job } from "./types";
import { devtools } from "zustand/middleware";
import { jobs } from "./data";

type FilterJobState = {
  jobs: Job[];
  activeFilter: string[];
  getJob: () => void;
  addFilter: (id: string) => void;
  filterJobs: () => void;
  removeFilter: (id: string) => void;
  removeAll: () => void;
};

export const useFilterJobStore = create<FilterJobState>()(
  devtools((set, get) => ({
    jobs: [],
    activeFilter: [],
    getJob: () => {
      set({
        jobs: jobs,
      });
    },
    addFilter: (id) => {
      if (get().activeFilter.includes(id)) return;

      set((state) => ({
        activeFilter: [...state.activeFilter, id],
      }));
      get().filterJobs();
    },
    filterJobs: () => {
      set(() => ({
        jobs: jobs.filter((job) =>
          get().activeFilter.every((active) => job.filters.includes(active))
        ),
      }));
    },
    removeFilter: (id) => {
      set((state) => ({
        activeFilter: state.activeFilter.filter((job) => job !== id),
      }));
      get().filterJobs();
    },
    removeAll: () => {
      set({
        activeFilter: [],
      });
      get().filterJobs();
    },
  }))
);
