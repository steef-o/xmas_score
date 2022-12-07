import { Trash } from "phosphor-react";

import { Team } from "@/state/Atoms";
import { borderColors } from "@/utils/colorUtils";

interface TeamCardProps {
  team: Team;
  addPoint: (id: string, pointsToAdd: number) => void;
  subtractPoint: (id: string, pointsToSubtract: number) => void;
  removeTeamById: (id: string) => void;
}

const TeamCard = ({ team, addPoint, subtractPoint, removeTeamById }: TeamCardProps) => (
  <div
    className={`card relative flex h-64 flex-col rounded-md border-t-[12px] border-t-green-500 bg-white p-4 ${
      borderColors[team.color]
    }`}
  >
    <h2 className="text-center font-serif text-3xl font-bold">{team.name}</h2>
    <button
      className="visibleChildOnHover absolute top-5 rounded-md bg-gray-200 p-2 opacity-0 active:scale-105"
      onClick={() => removeTeamById(team.id)}
    >
      <Trash />
    </button>
    <div className="mt-10 flex">
      <div className="flex flex-col">
        <button
          className="visibleChildOnHover my-1 rounded-[50%] bg-red-200 p-1 text-lg opacity-0 active:scale-105"
          onClick={() => subtractPoint(team.id, 1)}
        >
          -1
        </button>
        <button
          className="visibleChildOnHover my-1 rounded-[50%] bg-red-200 p-1 text-lg opacity-0 active:scale-105"
          onClick={() => subtractPoint(team.id, 5)}
        >
          -5
        </button>
        <button
          className="visibleChildOnHover my-1 rounded-[50%] bg-red-200 p-1 text-lg opacity-0 active:scale-105"
          onClick={() => subtractPoint(team.id, 10)}
        >
          -10
        </button>
      </div>
      <h3 className="mx-auto pt-10 text-4xl">{team.points}</h3>
      <div className="flex flex-col">
        <button
          className="visibleChildOnHover my-1 rounded-[50%] bg-green-200 p-1 text-lg opacity-0 active:scale-105"
          onClick={() => addPoint(team.id, 1)}
        >
          +1
        </button>
        <button
          className="visibleChildOnHover my-1 rounded-[50%] bg-green-200 p-1 text-lg opacity-0 active:scale-105"
          onClick={() => addPoint(team.id, 5)}
        >
          +5
        </button>
        <button
          className="visibleChildOnHover my-1 rounded-[50%] bg-green-200 p-1 text-lg opacity-0 active:scale-105"
          onClick={() => addPoint(team.id, 10)}
        >
          +10
        </button>
      </div>
    </div>
  </div>
);

export default TeamCard;
