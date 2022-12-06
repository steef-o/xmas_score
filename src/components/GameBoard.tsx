import React from "react";

import TeamCard, { Team } from "~/TeamCard";

interface ScoreBoardProps {
  teams: Team[];
}
const GameBoard = ({ teams }: ScoreBoardProps) => (
  <div className="mx-auto max-w-project bg-amber-400">
    <h1 className="mt-24 text-center text-2xl text-white">Webstep X-mas Scoreboard App</h1>
    <ul className="grid grid-cols-4 gap-4">
      {teams.map((team) => (
        <TeamCard key={team.id} team={team} />
      ))}
    </ul>
  </div>
);

export default GameBoard;
