import { atom } from "jotai";

export interface Team {
  points: number;
  name: string;
  id: string;
  icon?: string;
}

export const teams = atom<Team[]>([]);
