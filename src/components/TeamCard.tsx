import { Trash } from "phosphor-react";

import { Team } from "~/state/Atoms";

interface TeamCardProps {
  team: Team;
  addPoint: (id: string) => void;
  removePoint: (id: string) => void;
  removeTeamById: (id: string) => void;
}
const TeamCard = ({ team, addPoint, removePoint, removeTeamById }: TeamCardProps) => (
  <div className="relative flex h-64 flex-col rounded-md bg-white p-4">
    <h2 className="text-center font-serif text-3xl font-bold">{team.name}</h2>
    <div className="mt-10 flex">
      <button className="text-2xl font-bold" onClick={() => removePoint(team.id)}>
        -
      </button>
      <h3 className="mx-auto px-8 text-4xl">{team.points}</h3>
      <button className="text-2xl font-bold" onClick={() => addPoint(team.id)}>
        +
      </button>
    </div>
    <button
      className="absolute bottom-5 rounded-md bg-gray-200 p-4"
      onClick={() => removeTeamById(team.id)}
    >
      <Trash />
    </button>
  </div>
);

export default TeamCard;
