import { useState } from "react";

import AddNewTeams from "~/AddNewTeams";
import GameBoard from "~/GameBoard";
import { Team } from "~/TeamCard";

const App = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  console.log(teams);

  return (
    <div>
      <GameBoard teams={teams} />
      <AddNewTeams teams={teams} setTeams={setTeams} />
    </div>
  );
};

export default App;
