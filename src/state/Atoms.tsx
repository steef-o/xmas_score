import { atomWithStorage } from "jotai/utils";

export interface Team {
  points: number;
  name: string;
  id: string;
  icon?: string;
}

export const teams = atomWithStorage<Team[]>("teams", []);
