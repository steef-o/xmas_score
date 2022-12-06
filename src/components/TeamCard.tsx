import react from "react";

export interface Team {
  points: number;
  name: string;
  id: string;
  icon?: string;
}

interface ScorecardProps {
  team: Team;
}
const TeamCard = ({ team }: ScorecardProps) => {
  // TODO: implement Add points
  const addPoint = () => {};
  // TODO: implement Remove points
  const removePoint = () => {};
  return (
    <div className="h-64 rounded-md bg-white">
      <h2>{team.name}</h2>
      <p>{team.points}</p>
    </div>
  );
};

export default TeamCard;
