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
const Scorecard = ({ team }: ScorecardProps) => {
  const stuff = "stuff";
  return (
    <div className="h-64 rounded-md bg-white">
      <h2>{team.name}</h2>
    </div>
  );
};

export default Scorecard;
