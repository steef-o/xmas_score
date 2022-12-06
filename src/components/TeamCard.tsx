import { Team } from "../state/Atoms";

interface TeamCardProps {
  team: Team;
  addPoint: (id: string) => void;
  removePoint: (id: string) => void;
  removeTeamById: (id: string) => void;
}
const TeamCard = ({ team, addPoint, removePoint, removeTeamById }: TeamCardProps) => (
  <div className="h-64 rounded-md bg-white p-4">
    <h2 className="text-center">{team.name}</h2>
    <button onClick={() => removeTeamById(team.id)}>Remove</button>
    <div className="mt-10 flex">
      <button className="text-2xl font-bold" onClick={() => removePoint(team.id)}>
        -
      </button>
      <h3 className="mx-auto px-8 text-4xl">{team.points}</h3>
      <button className="text-2xl font-bold" onClick={() => addPoint(team.id)}>
        +
      </button>
    </div>
  </div>
);

export default TeamCard;
