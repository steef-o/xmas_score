import { atomWithStorage } from "jotai/utils";

export interface Team {
  points: number[];
  name: string;
  id: string;
  icon?: string;
  color: string;
}

// Global state with local storage
export const teams = atomWithStorage<Team[]>("teams", []);
